import React from "react";
import { User } from "components/icons";
import { Eye } from "lucide-react";

import Button from "components/Button";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface MessageBubbleProps {
  message: Message;
  loading: boolean;
  onPreviewClick: (content: string) => void;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({
  message,
  loading,
  onPreviewClick
}) => {
  const cleanMessageContent = (content: string): string => {
    return content
      .replace(/\[PLAN_VIEWER_START\]/g, "")
      .replace(/\[PLAN_VIEWER_END\]/g, "")
      .replace(/\[END_OF_CONVERSATION\]/g, "")
      .replace(/\[Plan\]\[([^\]]+)\]/g, "Plan $1") // Transformar [Plan][X] en Plan X
      .trim();
  };
  return (
    <div
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
        <div className="flex-shrink-0 h-8 w-8">
          {message.role === "user" ? (
            <User className="h-6 w-6" />
          ) : (
            <img
              src="/apple-touch-icon.png"
              alt="LISA AI"
              className="h-10 w-10 object-cover rounded-full"
            />
          )}
        </div>

        <div className="flex-1" style={{ whiteSpace: "pre-wrap" }}>
          {cleanMessageContent(message.content)}

          {message.content.includes("[PLAN_VIEWER_START]") && (
            <div className="flex justify-end mt-2">
              <Button
                type="button"
                onClick={() => onPreviewClick(message.content)}
                disabled={loading}
              >
                <Eye className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
