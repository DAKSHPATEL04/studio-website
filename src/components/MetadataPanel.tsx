"use client";

import React from 'react';

const MetadataPanel: React.FC = () => {
  return (
    <div className="fixed right-4 top-20 bottom-20 w-64 bg-black bg-opacity-80 border border-white border-opacity-10 text-white font-mono text-xs z-30 hidden lg:hide">
      <div className="p-4 border-b border-white border-opacity-10">
        <h3 className="font-bold mb-2">SYSTEM INFO</h3>
        <div className="space-y-1">
          <p>USER: admin</p>
          <p>STATUS: active</p>
          <p>SESSION: 0x7F9A</p>
        </div>
      </div>
      
      <div className="p-4 border-b border-white border-opacity-10">
        <h3 className="font-bold mb-2">PROJECT METADATA</h3>
        <div className="space-y-1">
          <p>ID: AAM.6W1QA02RZFAA</p>
          <p>FRAMES: 1920×1080</p>
          <p>FPS: 29.90</p>
          <p>CODECS: AVC1, OPUS</p>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-bold mb-2">CONNECTION</h3>
        <div className="space-y-1">
          <p>STATUS: secure</p>
          <p>ENCRYPTION: AES-256</p>
          <p>PACKETS: 1248/1248</p>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-2 bg-gray-900 text-center text-[10px]">
        <p>ORANGE.STUDIO v2.1.4</p>
      </div>
    </div>
  );
};

export default MetadataPanel;