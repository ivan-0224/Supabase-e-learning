"use client";

import { useEffect, useState } from "react";

interface TextTypingAnimationProps {
  text: string;
  typingSpeed?: number;
  className?: string;
}

export default function TextTypingAnimation({
  text,
  typingSpeed = 50,
  className = "",
}: TextTypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, text, typingSpeed]);

  return (
    <div className={`font-mono ${className}`}>
      <pre className="whitespace-pre-wrap">
        {displayedText}
        {!isComplete && <span className="animate-blink">|</span>}
      </pre>
    </div>
  );
}
