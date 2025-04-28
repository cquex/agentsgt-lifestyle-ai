import { useState, useEffect } from "react";

const TypingIndicator: React.FC = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev.length >= 3) return "";
        return prev + ".";
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return <div>Escribiendo{dots}</div>;
};

export default TypingIndicator;
