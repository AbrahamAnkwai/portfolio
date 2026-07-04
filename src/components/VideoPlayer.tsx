/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState, useEffect } from "react";
import LucideIcon from "./LucideIcon";
import { VideoItem } from "../types";

interface VideoPlayerProps {
  video: VideoItem;
  relatedVideos?: VideoItem[];
  onSelectRelatedVideo?: (video: VideoItem) => void;
  onClose?: () => void;
}

export default function VideoPlayer({
  video,
  relatedVideos = [],
  onSelectRelatedVideo,
  onClose,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    // Reset states when video changes
    setIsPlaying(false);
    setCurrentTime(0);
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [video]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => console.log("Video play interrupted:", err));
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    setIsMuted(vol === 0);
    if (videoRef.current) {
      videoRef.current.volume = vol;
      videoRef.current.muted = vol === 0;
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    videoRef.current.muted = nextMute;
    if (nextMute) {
      videoRef.current.volume = 0;
    } else {
      videoRef.current.volume = volume || 0.5;
    }
  };

  const toggleFullscreen = () => {
    const container = videoRef.current?.parentElement;
    if (!container) return;

    if (!document.fullscreenElement) {
      container.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch((err) => {
        console.error("Fullscreen request failed", err);
      });
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  // Format time (e.g. 02:34)
  const formatTime = (time: number) => {
    if (isNaN(time)) return "00:00";
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const isYoutube = video.url.includes("youtube.com") || video.url.includes("youtu.be");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 bg-gray-950 p-4 rounded-2xl border border-gray-900 shadow-2xl">
      {/* 1. MAIN PLAYER SCREEN (2 Cols) */}
      <div className="lg:col-span-2 flex flex-col justify-between">
        
        {/* Aspect Container */}
        <div className="relative aspect-video rounded-xl overflow-hidden bg-black border border-gray-900 group">
          {isYoutube ? (
            <iframe
              src={video.url}
              title={video.title}
              className="w-full h-full border-none"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <>
              <video
                ref={videoRef}
                src={video.url}
                className="w-full h-full object-contain cursor-pointer"
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onClick={togglePlay}
                playsInline
              />

              {/* Big Central Overlay Button (fade on play) */}
              {!isPlaying && (
                <div
                  onClick={togglePlay}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-xs cursor-pointer transition-opacity duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-purple-600/95 hover:bg-purple-500 flex items-center justify-center text-white shadow-lg shadow-purple-600/30 transition-all scale-100 hover:scale-105">
                    <LucideIcon name="Play" size={24} className="ml-1" />
                  </div>
                </div>
              )}

              {/* 3. PLAYER CONTROLS (Fades on hover) */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-2">
                
                {/* Custom Seek Bar */}
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min={0}
                    max={duration || 100}
                    value={currentTime}
                    onChange={handleSeekChange}
                    className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                  />
                </div>

                {/* Control Panel Row */}
                <div className="flex items-center justify-between">
                  {/* Left Controls: Play, Mute, Volume, Time */}
                  <div className="flex items-center gap-4">
                    <button
                      onClick={togglePlay}
                      className="text-gray-300 hover:text-white transition cursor-pointer"
                    >
                      <LucideIcon name={isPlaying ? "Sparkles" : "Play"} size={16} /> {/* Sparkle fallback for pause / state */}
                    </button>

                    <div className="flex items-center gap-1.5 group/volume">
                      <button
                        onClick={toggleMute}
                        className="text-gray-300 hover:text-white transition cursor-pointer"
                      >
                        <LucideIcon name={isMuted ? "PhoneCall" : "Volume2"} size={16} /> {/* Fallback mapper */}
                      </button>
                      <input
                        type="range"
                        min={0}
                        max={1}
                        step={0.05}
                        value={isMuted ? 0 : volume}
                        onChange={handleVolumeChange}
                        className="w-16 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500 transition-all"
                      />
                    </div>

                    <span className="font-mono text-xs text-gray-400">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                  </div>

                  {/* Right Controls: Fullscreen */}
                  <button
                    onClick={toggleFullscreen}
                    className="text-gray-300 hover:text-white transition cursor-pointer"
                  >
                    <LucideIcon name="Layers" size={16} /> {/* fullscreen abstract */}
                  </button>
                </div>

              </div>
            </>
          )}
        </div>

        {/* Info detail */}
        <div className="mt-4">
          <span className="px-2.5 py-1 text-[10px] font-mono tracking-widest text-purple-400 uppercase bg-purple-500/10 rounded-full border border-purple-500/20 mb-2 inline-block">
            {video.category}
          </span>
          <h4 className="text-xl font-sans font-bold text-white mb-2 leading-tight">
            {video.title}
          </h4>
          <p className="text-sm text-gray-400 font-sans leading-relaxed">
            {video.description}
          </p>
        </div>

      </div>

      {/* 2. RELATED QUEUE BAR (1 Col) */}
      <div className="flex flex-col border-t lg:border-t-0 lg:border-l border-gray-900 lg:pl-6 pt-6 lg:pt-0">
        <h5 className="font-sans font-semibold text-white mb-4 text-sm uppercase tracking-wider text-gray-400">
          Related Videos ({relatedVideos.length})
        </h5>
        
        {relatedVideos.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center py-12 text-center">
            <LucideIcon name="Video" className="text-gray-600 mb-2" size={24} />
            <p className="text-xs text-gray-500 font-sans">No other videos in this category</p>
          </div>
        ) : (
          <div className="flex flex-col gap-3 max-h-[360px] overflow-y-auto pr-1">
            {relatedVideos.map((item) => {
              const active = item.id === video.id;
              return (
                <div
                  key={item.id}
                  onClick={() => !active && onSelectRelatedVideo?.(item)}
                  className={`
                    flex gap-3 p-2 rounded-xl transition cursor-pointer border
                    ${active 
                      ? "bg-purple-600/10 border-purple-500/30 text-purple-400" 
                      : "bg-gray-900/20 border-transparent hover:bg-gray-900/60 hover:border-gray-800 text-white"
                    }
                  `}
                >
                  {/* Miniature Thumbnail */}
                  <div className="relative w-20 h-14 rounded-lg overflow-hidden bg-gray-900 flex-shrink-0">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-1 right-1 bg-black/80 text-[9px] font-mono font-medium text-white px-1 py-0.5 rounded">
                      {item.duration}
                    </span>
                  </div>

                  {/* Micro Info */}
                  <div className="flex flex-col justify-center overflow-hidden">
                    <span className="text-[9px] font-mono uppercase tracking-wider text-purple-400">
                      {item.category}
                    </span>
                    <h6 className="text-xs font-sans font-medium line-clamp-1 mt-0.5">
                      {item.title}
                    </h6>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

    </div>
  );
}
