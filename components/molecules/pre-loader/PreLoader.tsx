"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

type PreLoaderProps = {
  language: string;
  message: string;
};

const PreLoader = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<PreLoaderProps[]>([]);

  useEffect(() => {
    const loadMessages = async () => {
      const res = await fetch("/data/messages.json");
      const data = await res.json();
      setMessages(data);
    };
    loadMessages();
  }, []);

  console.log("PreLoader messages:", messages);

  useEffect(() => {
    if (messages.length === 0) return;

    const tl = gsap.timeline({ repeat: 0 });

    messages.forEach(({ message }, i) => {
      tl.to(textRef.current!, {
        opacity: 0,
        duration: 0.2,
        onComplete: () => {
          if (textRef.current) textRef.current.innerText = message;
        },
      });
      tl.to(textRef.current!, {
        opacity: 1,
        duration: 0.6,
      });
      tl.to(textRef.current!, {
        opacity: 1,
        duration: 1,
      });
    });

    tl.to(containerRef.current!, {
      y: "-100%",
      duration: 1,
      ease: "power3.inOut",
      onComplete: () => {
        if (onFinish) onFinish();
      },
    });

    return () => tl.kill();
  }, [messages]);

  return (
    <div
      ref={containerRef}
      className="pre-loader fixed top-0 left-0 w-full h-full flex items-center justify-center bg-red-300 z-50 overflow-hidden"
    >
      <div
        ref={textRef}
        className="text-red-600 text-4xl font-semibold opacity-0 transition-all duration-500 capitalize"
      >
        Thank You
      </div>
    </div>
  );
};

export default PreLoader;
