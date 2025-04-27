import OpenAI from "openai";
import { ChatService, Message } from "./ChatService";

interface OpenAIConfig {
  apiKey: string;
  assistantId: string;
}

interface ThreadMessage {
  id: string;
  role: "user" | "assistant" | "system" | "tool";
  content: Array<{
    type: string;
    text?: {
      value: string;
    };
  }>;
}

export class OpenAIService implements ChatService {
  private client: OpenAI;
  private assistantId: string;
  private threadId: string | null = null;

  constructor(config: OpenAIConfig) {
    if (!config.apiKey) {
      throw new Error("La OPENAI_API_KEY no está configurada.");
    }
    if (!config.assistantId) {
      throw new Error("La OPENAI_ASSISTANT_ID no está configurada.");
    }

    this.client = new OpenAI({
      apiKey: config.apiKey,
      dangerouslyAllowBrowser: true
    });

    this.assistantId = config.assistantId;
    this.threadId = localStorage.getItem("openai_thread_id");
  }

  private async getThreadId(): Promise<string> {
    if (!this.threadId) {
      const thread = await this.client.beta.threads.create({});
      this.threadId = thread.id;
      localStorage.setItem("openai_thread_id", thread.id);
    }
    return this.threadId;
  }

  private convert(message: ThreadMessage): Message {
    let content = "";
    const textContent = message.content.find((c) => c.type === "text");
    if (textContent?.text?.value) {
      content = textContent.text.value;
    }
    return {
      role: message.role === "user" ? "user" : "assistant",
      content
    };
  }

  async getMessages(): Promise<Message[]> {
    const threadId = await this.getThreadId();
    const response = await this.client.beta.threads.messages.list(threadId);
    console.log("Response", response);
    return response.data.map((m) => this.convert(m)).reverse();
  }

  async sendMessage(content: string): Promise<Message> {
    const threadId = await this.getThreadId();
    await this.client.beta.threads.messages.create(threadId, {
      role: "user",
      content
    });

    const run = await this.client.beta.threads.runs.create(threadId, {
      assistant_id: this.assistantId
    });

    let status = run.status;
    while (!["completed", "failed", "cancelled", "expired"].includes(status)) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const updatedRun = await this.client.beta.threads.runs.retrieve(
        threadId,
        run.id
      );
      status = updatedRun.status;
    }

    if (status !== "completed") {
      throw new Error(`Assistant run status: ${status}`);
    }

    const messages = await this.getMessages();
    return messages[0];
  }

  async resetThread(): Promise<void> {
    this.threadId = null;
    localStorage.removeItem("openai_thread_id");
    await this.getThreadId();
  }
}
