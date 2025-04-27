export interface Message {
  role: "user" | "assistant";
  content: string;
}

export interface ChatService {
  sendMessage(content: string): Promise<Message>;
  getMessages(): Promise<Message[]>;
  resetThread(): Promise<void>;
}
