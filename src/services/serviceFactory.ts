import { ChatService } from "./ChatService";
import { OpenAIService } from "./OpenAIService";
import { N8NService } from "./N8NService";

export const createChatService = (): ChatService => {
  const provider = process.env.REACT_APP_CHAT_PROVIDER;

  if (provider === "n8n") {
    const endpoint = process.env.REACT_APP_N8N_ENDPOINT;
    if (!endpoint) {
      throw new Error("REACT_APP_N8N_ENDPOINT no está configurado.");
    }
    return new N8NService({ endpoint });
  }

  const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
  const assistantId = process.env.REACT_APP_OPENAI_ASSISTANT_ID;
  console.log(`apiKey: ${apiKey}`);
  if (!apiKey) {
    throw new Error("REACT_APP_OPENAI_API_KEY no está configurada.");
  }
  if (!assistantId) {
    throw new Error("REACT_APP_OPENAI_ASSISTANT_ID no está configurada.");
  }

  return new OpenAIService({
    apiKey,
    assistantId
  });
};
