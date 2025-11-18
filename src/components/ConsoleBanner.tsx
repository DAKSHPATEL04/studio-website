"use client";

import React, { useState, useEffect } from 'react';

interface ConsoleMessage {
  id: number;
  text: string;
  timestamp: string;
}

const ConsoleBanner: React.FC = () => {
  const [messages, setMessages] = useState<ConsoleMessage[]>([]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Add initial messages
    const initialMessages: ConsoleMessage[] = [
      { id: 1, text: 'CONSOLE INITIALIZED...', timestamp: '00:00:01' },
      { id: 2, text: 'LOADING PROJECT DATA...', timestamp: '00:00:02' },
      { id: 3, text: 'ESTABLISHING CONNECTION...', timestamp: '00:00:03' },
    ];
    
    // Use setTimeout to avoid synchronous state update in effect
    const timer = setTimeout(() => {
      setMessages(initialMessages);
    }, 0);

    // Add new messages periodically
    const interval = setInterval(() => {
      const newMessage: ConsoleMessage = {
        id: Date.now(),
        text: `MESSAGE_${Math.floor(Math.random() * 1000)}`,
        timestamp: new Date().toISOString().substr(11, 8)
      };
      
      setMessages(prev => [...prev.slice(-4), newMessage]); // Keep only last 5 messages
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const closeBanner = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-white text-white font-mono text-xs z-50">
      <div className="flex justify-between items-center px-4 py-2 bg-gray-900">
        <span>SYSTEM CONSOLE</span>
        <button 
          onClick={closeBanner}
          className="hover:text-red-500 transition-colors"
        >
          CLOSE
        </button>
      </div>
      <div className="max-h-24 overflow-y-auto">
        {messages.map(message => (
          <div key={message.id} className="px-4 py-1 border-b border-gray-800 flex">
            <span className="text-gray-400 mr-4">[{message.timestamp}]</span>
            <span>{message.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConsoleBanner;