import { ChatService, Message } from "services/ChatService";

interface N8NConfig {
  endpoint: string;
}

export class N8NService implements ChatService {
  private endpoint: string;

  constructor(config: N8NConfig) {
    this.endpoint = config.endpoint;
  }

  async getMessages(): Promise<Message[]> {
    return [];
  }

  async sendMessage(content: string): Promise<Message> {
    try {
      const response = await fetch(this.endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: content })
      });

      if (!response.ok) {
        throw new Error("Error en la API de N8N");
      }

      const data = await response.json();
      return {
        role: "assistant",
        content: data.reply || "Sin respuesta"
      };
    } catch (error) {
      console.error("Error enviando a N8N:", error);
      throw error;
    }
  }

  async resetThread(): Promise<void> {
    return;
  }
}
