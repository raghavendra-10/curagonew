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
    <div className="relative bg-surface border border-border rounded-xl overflow-hidden group">
      <video
        ref={videoRef}
        className="w-full aspect-video object-cover"
        src={src}
        onPause={handlePause}
        onEnded={handlePause}
        controls={isPlaying}
        playsInline
        preload="metadata"
      >
        Your browser does not support the video tag.
      </video>

      {/* Play overlay */}
      {!isPlaying && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/60 to-primary/40 backdrop-blur-sm flex items-center justify-center cursor-pointer" onClick={handlePlay}>
          <div className="w-20 h-20 rounded-full bg-surface/90 flex items-center justify-center transform transition-transform group-hover:scale-110">
            <svg className="w-10 h-10 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>

          {/* Caption overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent p-6 pt-12">
            <p className="text-surface text-sm font-medium text-center">
              Preview of your assessment report (sample video)
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
