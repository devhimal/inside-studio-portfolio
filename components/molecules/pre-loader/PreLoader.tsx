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

  // Fetch messages from local JSON file
  useEffect(() => {
    const loadMessages = async () => {
      try {
        const res = await fetch("/data/messages.json");
        const data = await res.json();
        setMessages(data);
      } catch (error) {
        console.error("Failed to load messages:", error);
      }
    };

    loadMessages();
  }, []);

  // Animate messages and container
  useEffect(() => {
    if (messages.length === 0) return;

    const textEl = textRef.current;
    const containerEl = containerRef.current;

    if (!textEl || !containerEl) return;

    const tl = gsap.timeline({ repeat: 0 });

    messages.forEach(({ message }) => {
      tl.to(textEl, {
        opacity: 1,
        duration: 0.1,
        onComplete: () => {
          textEl.innerText = message;
        },
      });
      tl.to(textEl, { opacity: 1, duration: 0.1 });
    });

    // Slide the container off screen at the end
    tl.to(containerEl, {
      y: "-100%",
      duration: 2,
      ease: "power3.inOut",
    });

    return () => {
      tl.kill();
    };
  }, [messages]);

  return (
    <div
      ref={containerRef}
      className="pre-loader fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black z-50 overflow-hidden"
    >
      <div
        ref={textRef}
        className="text-white text-4xl font-semibold opacity-0 transition-all duration-500 capitalize"
      >
        Thank You
      </div>
    </div>
  );
};

export default PreLoader;
