import { useEffect } from "react";

export function useChatScroll(
  ref: React.RefObject<HTMLDivElement | null>,
  dependency: any[]
) {
  useEffect(() => {
    if (!ref.current) return;
    ref.current.scrollIntoView({ behavior: "smooth" });
  }, [dependency]);
}
