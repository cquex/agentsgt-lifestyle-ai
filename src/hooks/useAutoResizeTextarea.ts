import { useEffect } from "react";

export function useAutoResizeTextarea(
  ref: React.RefObject<HTMLTextAreaElement | null>,
  value: string
) {
  useEffect(() => {
    const textarea = ref.current;
    if (!textarea) return;

    textarea.style.height = "auto"; 
    textarea.style.height = `${textarea.scrollHeight}px`; 
  }, [value]);
}
