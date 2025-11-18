"use client";

import React, { useState, useRef, useEffect } from 'react';

interface Frame {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  videoId: string;
  timestamp: string;
  resolution: string;
  loudness: string;
  codec: string;
}

// List of video URLs
const videoUrls = [
  "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
];

// Function to get a random video URL
const getRandomVideoUrl = () => {
  const randomIndex = Math.floor(Math.random() * videoUrls.length);
  return videoUrls[randomIndex];
};

const ProjectGrid: React.FC = () => {
  const [frames, setFrames] = useState<Frame[]>([
    {
      id: '1',
      x: 100,
      y: 100,
      width: 300,
      height: 200,
      videoId: 'AAM.6W1QA02RZFAA',
      timestamp: '00:00:05.12',
      resolution: '1920x1080',
      loudness: '-25.60D',
      codec: 'AVC1',
    },
    {
      id: '2',
      x: 450,
      y: 150,
      width: 250,
      height: 300,
      videoId: 'PKGS.XFRK.V4P2C',
      timestamp: '00:00:12.45',
      resolution: '1920x1080',
      loudness: '-24.80D',
      codec: 'OPUS',
    },
    {
      id: '3',
      x: 200,
      y: 350,
      width: 350,
      height: 200,
      videoId: 'XFRK.V4P2C.AAM',
      timestamp: '00:00:28.78',
      resolution: '3840x2160',
      loudness: '-26.20D',
      codec: 'AVC1',
    },
    {
      id: '4',
      x: 600,
      y: 50,
      width: 200,
      height: 150,
      videoId: 'V4P2C.AAM.6W1',
      timestamp: '00:00:35.22',
      resolution: '1920x1080',
      loudness: '-23.40D',
      codec: 'OPUS',
    },
    {
      id: '5',
      x: 50,
      y: 500,
      width: 280,
      height: 180,
      videoId: '6W1QA02RZFAA',
      timestamp: '00:00:42.67',
      resolution: '3840x2160',
      loudness: '-27.10D',
      codec: 'AVC1',
    },
    {
      id: '6',
      x: 500,
      y: 400,
      width: 620,
      height: 420,
      videoId: 'PKGS.XFRK.V4P2',
      timestamp: '00:00:51.89',
      resolution: '1920x1080',
      loudness: '-25.90D',
      codec: 'OPUS',
    }
  ]);

  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [revealVideo, setRevealVideo] = useState(true);
  const [currentVideoUrl, setCurrentVideoUrl] = useState(getRandomVideoUrl());
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  const handleMouseDown = (e: React.MouseEvent, id: string) => {
    const frame = frames.find(f => f.id === id);
    if (frame) {
      setDraggingId(id);
      setDragOffset({
        x: e.clientX - frame.x,
        y: e.clientY - frame.y,
      });
    }
  };

  const toggleReveal = () => {
    setRevealVideo(!revealVideo);
  };

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (draggingId && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - containerRect.left - dragOffset.x;
        const y = e.clientY - containerRect.top - dragOffset.y;
        
        setFrames(prev =>
          prev.map(frame =>
            frame.id === draggingId
              ? {
                  ...frame,
                  x: Math.max(0, Math.min(x, containerRect.width - frame.width)),
                  y: Math.max(0, Math.min(y, containerRect.height - frame.height)),
                }
              : frame
          )
        );
      }
    };

    const handleGlobalMouseUp = () => {
      setDraggingId(null);
    };

    if (draggingId) {
      window.addEventListener('mousemove', handleGlobalMouseMove);
      window.addEventListener('mouseup', handleGlobalMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [draggingId, dragOffset]);

  useEffect(() => {
    const updateContainerSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight
        });
      }
    };

    updateContainerSize();
    window.addEventListener('resize', updateContainerSize);
    return () => window.removeEventListener('resize', updateContainerSize);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden">
      {/* Background video - playing in background but hidden from view */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0 }}
        >
          {currentVideoUrl && <source src={currentVideoUrl} type="video/mp4" />}
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Dark overlay to hide background video until reveal is enabled */}
      <div className="absolute inset-0 bg-black" style={{ opacity: revealVideo ? 0 : 1, zIndex: revealVideo ? -1 : 10 }}></div>

      {/* Reveal mask - shows video content within frame positions when reveal is enabled */}
      {revealVideo && (
        <div className="absolute inset-0 pointer-events-none">
          {frames.map(frame => (
            <div
              key={`mask-${frame.id}`}
              className="absolute"
              style={{
                clipPath: `inset(${frame.y}px ${containerSize.width - frame.x - frame.width}px ${containerSize.height - frame.y - frame.height}px ${frame.x}px)`,
                left: 0,
                top: 0,
                width: '100%',
                height: '100%'
              }}
            >
              <div className="absolute inset-0">
                <video
                  autoPlay
                  loop
                  muted
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ opacity: 1 }}
                >
                  {currentVideoUrl && <source src={currentVideoUrl} type="video/mp4" />}
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Draggable frames */}
      {frames.map(frame => (
        <div
          key={frame.id}
          className="absolute border-2 border-white cursor-move group"
          style={
            {
              left: frame.x,
              top: frame.y,
              width: frame.width,
              height: frame.height,
            }
          }
          onMouseDown={e => handleMouseDown(e, frame.id)}
        >
          {/* Frame content with metadata */}
          <div className="absolute inset-0 bg-opacity-70 flex flex-col p-2 text-white text-xs font-mono z-10">
            <div className="flex justify-between">
              <span>VIDEO ID: {frame.videoId}</span>
              <span>TIMESTAMP: {frame.timestamp}</span>
            </div>
            <div className="flex justify-between mt-1">
              <span>RES: {frame.resolution}</span>
              <span>LOUDNESS: {frame.loudness}</span>
            </div>
            <div className="mt-1">
              <span>CODEC: {frame.codec}</span>
            </div>
          </div>
        </div>
      ))}

      {/* Reveal Button */}
      <button
        onClick={toggleReveal}
        className="absolute top-4 right-4 text-white px-4 py-2 border border-white font-mono text-sm hover:bg-white hover:text-black transition-colors z-20"
      >
        {revealVideo ? 'DISABLE REVEAL' : 'ENABLE REVEAL'}
      </button>

      {/* Instructions */}
      <div className="absolute bottom-4 left-4 text-white font-mono text-xs z-20">
        <p>Drag frames to position. Click &apos;ENABLE REVEAL&apos; to see video through frames.</p>
      </div>
    </div>
  );
};

export default ProjectGrid;