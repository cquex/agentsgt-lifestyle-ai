"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "components/Button";
import Input from "components/Input";
import { Send, User } from "components/icons";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const ChatPage: React.FC = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hola, soy LISA AI, tu asistente inteligente. ¿En qué puedo ayudarte hoy?"
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Scroll to bottom on initial load
  useEffect(() => {
    setTimeout(() => {
      scrollToBottom();
    }, 100);
  }, []);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      role: "user",
      content: input
    };

    // Simulate assistant response
    const assistantResponses = [
      "Entiendo lo que necesitas. Puedo ayudarte a organizar eso de manera eficiente.",
      "Excelente elección. Vamos a diseñar un plan personalizado para ti.",
      "Basado en tus preferencias, te recomendaría empezar con pequeños cambios diarios.",
      "He analizado tus patrones y tengo algunas sugerencias que podrían funcionar bien para ti.",
      "Vamos a trabajar juntos para lograr un estilo de vida más equilibrado y pleno."
    ];

    const randomResponse =
      assistantResponses[Math.floor(Math.random() * assistantResponses.length)];

    const assistantMessage: Message = {
      role: "assistant",
      content: randomResponse
    };

    setMessages([...messages, userMessage, assistantMessage]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Header */}
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

      {/* Main content */}
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

        {/* Message input form - fixed at bottom */}
        <div className="border-t bg-white p-4 md:p-6 max-w-4xl mx-auto w-full flex-shrink-0">
          <form onSubmit={handleSendMessage} className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu mensaje..."
              className="flex-1"
            />
            <Button type="submit">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ChatPage;
