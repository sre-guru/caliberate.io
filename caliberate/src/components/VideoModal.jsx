"use client";

import React from 'react';
import { X } from 'lucide-react';

const VideoModal = ({ isOpen, onClose, videoId = "oqiWQrzCnEw" }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
      <div className="relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title="Product Demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          referrerPolicy="origin"
        />
      </div>
    </div>
  );
};

export default VideoModal;