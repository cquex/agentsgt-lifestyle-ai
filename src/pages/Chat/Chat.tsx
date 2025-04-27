// src/components/Chat.tsx

"use client";

import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "components/Button";
import Input from "components/Input";
import { Send, User } from "components/icons";
import { createChatService } from "services/serviceFactory";
import type { Message as ChatMessage } from "services/ChatService";

const chatService = createChatService();

const ChatPage: React.FC = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    (async () => {
      try {
        const history = await chatService.getMessages();
        setMessages(history);
      } catch (error) {
        console.error("Error cargando mensajes:", error);
      }
    })();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!input.trim()) return;

    const userMessage: ChatMessage = {
      role: "user",
      content: input
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      await chatService.sendMessage(userMessage.content);
      const updatedMessages = await chatService.getMessages();
      setMessages(updatedMessages);
    } catch (error) {
      console.error("Error al enviar o recibir mensaje:", error);
      alert("Hubo un problema enviando o recibiendo tu mensaje.");
    } finally {
      setLoading(false);
      scrollToBottom();
    }
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <header className="border-b bg-white z-10 flex-shrink-0">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/apple-touch-icon.png"
              alt="LISA AI Logo"
              className="h-6 w-6"
            />
            <span className="text-xl font-bold text-primary">LISA AI</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto p-4 md:p-6 max-w-4xl mx-auto w-full">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`flex items-start gap-2 max-w-[80%] ${
                    message.role === "user"
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-gray-800"
                  } p-3 rounded-lg`}
                >
                  <div className="mt-1">
                    {message.role === "user" ? (
                      <User className="h-5 w-5" />
                    ) : (
                      <img
                        src="/apple-touch-icon.png"
                        alt="LISA AI"
                        className="h-5 w-5"
                      />
                    )}
                  </div>
                  <div>{message.content}</div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>

        <div className="border-t bg-white p-4 md:p-6 max-w-4xl mx-auto w-full flex-shrink-0">
          <form onSubmit={handleSendMessage} className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu mensaje..."
              className="flex-1"
              disabled={loading}
            />
            <Button type="submit" disabled={loading}>
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ChatPage;
