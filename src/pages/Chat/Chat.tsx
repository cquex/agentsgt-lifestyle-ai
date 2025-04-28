"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";

import Button from "components/Button";
import Input from "components/Input";
import { Send, User } from "components/icons";
import PlanPreview from "components/PlanPreview/PlanPreview";
import Modal from "components/Modal";
import { MessageBubble } from "components/MessageBubble/";
import ModalConfirm from "components/ModalConfirm";
import TypingIndicator from "components/TypingIndicator";

import { createChatService } from "services/serviceFactory";
import type { Message as ChatMessage } from "services/ChatService";

import { Eye, Loader } from "lucide-react";
import { useAutoResizeTextarea } from "hooks/useAutoResizeTextarea";
import { useModal } from "hooks/useModal";
import { useChatScroll } from "hooks/useChatScroll";

const chatService = createChatService();

const ChatPage: React.FC = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const previewModal = useModal();
  const [planContent, setPlanContent] = useState<string | null>(null);
  const [showEndConversationModal, setShowEndConversationModal] =
    useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  useAutoResizeTextarea(textareaRef, input);
  useChatScroll(messagesEndRef, [messages]);
  
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
      const lastAssistantMessage = [...updatedMessages]
        .reverse()
        .find((m) => m.role === "assistant");
      if (lastAssistantMessage) {
        if (lastAssistantMessage.content.includes("END_OF_CONVERSATION")) {
          handleEndOfConversation();
        }
      }
    } catch (error) {
      alert("Hubo un problema enviando o recibiendo tu mensaje.");
    } finally {
      setLoading(false);
    }
  };

  const handleEndOfConversation = () => {
    setShowEndConversationModal(true);
  };
  const handlePreviewClick = (plan: String) => {
    //const lastAssistantMessage = [...messages]
    //  .reverse()
    //  .find((m) => m.role === "assistant");
    //console.log("lastAssistantMessage", lastAssistantMessage);
    //if (!lastAssistantMessage) {
    //  alert("No hay plan disponible para previsualizar.");
    //  return;
    //}

    const lastAssistantMessage = plan;
    const start = lastAssistantMessage.indexOf("[PLAN_VIEWER_START]");
    const end = lastAssistantMessage.indexOf("[PLAN_VIEWER_END]");

    if (start !== -1 && end !== -1) {
      const extracted = lastAssistantMessage
        .substring(start + "[PLAN_VIEWER_START]".length, end)
        .trim();
      setPlanContent(extracted);
      previewModal.open();
    } else {
      alert("No se encontró un plan para previsualizar.");
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
              className="h-12 w-12"
            />
            <span className="text-xl font-bold text-primary">LISA AI</span>
          </Link>

          <Button
            onClick={() => {
              handleEndOfConversation();
            }}
            variant="outline"
          >
            Nueva conversación
          </Button>
        </div>
      </header>

      <main className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto p-4 md:p-6 max-w-4xl mx-auto w-full">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <MessageBubble
                key={index}
                message={message}
                loading={loading}
                onPreviewClick={handlePreviewClick}
              />
            ))}
            {loading && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Footer */}
        <div className="border-t bg-white p-4 md:p-6 max-w-4xl mx-auto w-full flex-shrink-0">
          <form onSubmit={handleSendMessage} className="flex gap-2 items-end">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={handleInputChange}
              placeholder="Escribe tu mensaje..."
              className="flex-1 resize-none rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent min-h-[48px] max-h-[300px] overflow-hidden"
              disabled={loading}
              rows={1}
            />
            <Button type="submit" disabled={loading}>
              {loading ? (
                <Loader className="h-8 w-4 animate-spin" />
              ) : (
                <Send className="h-8 w-4" />
              )}
            </Button>
          </form>
        </div>
      </main>
      <Modal isOpen={previewModal.isOpen} onClose={previewModal.close}>
        {planContent ? (
          <PlanPreview planText={planContent} />
        ) : (
          <div className="text-center text-gray-500">
            No hay plan disponible.
          </div>
        )}
      </Modal>
      <ModalConfirm
        isOpen={showEndConversationModal}
        title="La conversación ha finalizado"
        description="¿Deseas comenzar una nueva conversación?"
        onConfirm={() => {
          setMessages([]);
          chatService.resetThread();
          setShowEndConversationModal(false);
        }}
        onCancel={() => {
          setShowEndConversationModal(false);
        }}
      />
    </div>
  );
};

export default ChatPage;
