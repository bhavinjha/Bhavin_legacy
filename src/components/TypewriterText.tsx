import React, { useState, useEffect } from "react";

interface TypewriterTextProps {
  words: string[];
  loop?: boolean;
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetweenWords?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  words,
  loop = true,
  typeSpeed = 100,
  deleteSpeed = 50,
  delayBetweenWords = 2000,
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (currentText.length < currentWord.length) {
            setCurrentText(currentWord.slice(0, currentText.length + 1));
          } else {
            // Word complete, wait before deleting
            setTimeout(() => setIsDeleting(true), delayBetweenWords);
          }
        } else {
          // Deleting
          if (currentText.length > 0) {
            setCurrentText(currentWord.slice(0, currentText.length - 1));
          } else {
            // Deletion complete, move to next word
            setIsDeleting(false);
            if (loop || currentWordIndex < words.length - 1) {
              setCurrentWordIndex((prev) => (prev + 1) % words.length);
            }
          }
        }
      },
      isDeleting ? deleteSpeed : typeSpeed
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, loop, typeSpeed, deleteSpeed, delayBetweenWords]);

  return (
    <span className="inline-flex items-center">
      {currentText}
      <span className="ml-1 inline-block w-0.5 h-[1em] bg-primary animate-pulse" />
    </span>
  );
};

export default TypewriterText;
