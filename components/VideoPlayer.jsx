'use client'

import { useState, useRef } from 'react'

export default function VideoPlayer({ src, thumbnail }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const handlePause = () => {
    setIsPlaying(false)
  }

  return (
    <div className="relative bg-primary border border-border rounded-xl overflow-hidden group">
      {/* Video container with black background for letterboxing */}
      <div className="aspect-video bg-primary flex items-center justify-center">
        <video
          ref={videoRef}
          className="max-h-full max-w-full object-contain"
          src={src}
          onPause={handlePause}
          onEnded={handlePause}
          playsInline
          preload="metadata"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Play overlay */}
      {!isPlaying && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/60 to-primary/40 backdrop-blur-sm flex items-center justify-center cursor-pointer" onClick={handlePlay}>
          <div className="w-20 h-20 rounded-full bg-surface/90 flex items-center justify-center transform transition-transform group-hover:scale-110">
            <svg className="w-10 h-10 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  )
}
