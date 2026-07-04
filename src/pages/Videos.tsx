/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import LucideIcon from "../components/LucideIcon";
import Card from "../components/Card";
import SectionTitle from "../components/SectionTitle";
import Modal from "../components/Modal";
import VideoPlayer from "../components/VideoPlayer";
import EmptyState from "../components/EmptyState";
import { videosData } from "../data/videos";
import { VideoItem } from "../types";

export default function Videos() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  // Filter queue of other videos excluding the active playing video
  const getRelatedVideos = (activeId: string) => {
    return videosData.filter((v) => v.id !== activeId);
  };

  return (
    <div className="pt-24 flex flex-col gap-12 relative">
      
      {/* Background glow */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Section Title */}
      <SectionTitle
        badge="Cinematics"
        title="Cinematic Motion & Video Guides"
        subtitle="Explore high-luxury startup promo commercials, hardware system diagnostics, and code optimization webinars."
      />

      {/* VIDEOS DISPLAY GRID */}
      {videosData.length === 0 ? (
        <EmptyState
          iconName="Video"
          title="No videos found"
          description="We are compiling cinematic projects in DaVinci. Please check back later!"
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videosData.map((item) => (
            <Card
              key={item.id}
              onClick={() => setSelectedVideo(item)}
              className="p-0 overflow-hidden border-gray-900 group relative cursor-pointer flex flex-col h-full justify-between"
            >
              {/* Thumbnail Play Stage */}
              <div>
                <div className="relative aspect-video overflow-hidden bg-gray-950">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  
                  {/* Duration stamp */}
                  <span className="absolute bottom-3 right-3 bg-black/80 backdrop-blur text-[10px] font-mono font-medium text-white px-2 py-0.5 rounded">
                    {item.duration}
                  </span>

                  {/* Play circle trigger overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white shadow-lg shadow-purple-600/20 scale-100 group-hover:scale-115 transition-all">
                      <LucideIcon name="Play" size={16} className="ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Info Text Padding */}
                <div className="p-6">
                  <span className="text-[10px] font-mono tracking-widest text-purple-400 uppercase">
                    {item.category}
                  </span>
                  
                  <h3 className="text-lg font-sans font-bold text-white mt-1 mb-2 leading-tight group-hover:text-purple-300 transition">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs text-gray-400 font-sans leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Card Footer detail */}
              <div className="p-6 pt-0 border-t border-gray-900/30 flex items-center justify-between text-gray-500 text-[10px] font-mono uppercase tracking-widest">
                <span>Play Duration: {item.duration}</span>
                <LucideIcon name="Video" size={12} className="text-purple-400" />
              </div>

            </Card>
          ))}
        </div>
      )}

      {/* ==========================================
         CINEMATIC HTML5 VIDEO PLAYER MODAL OVERLAY
         ========================================== */}
      <Modal
        isOpen={selectedVideo !== null}
        onClose={() => setSelectedVideo(null)}
        size="xl"
      >
        {selectedVideo && (
          <VideoPlayer
            video={selectedVideo}
            relatedVideos={getRelatedVideos(selectedVideo.id)}
            onSelectRelatedVideo={setSelectedVideo}
            onClose={() => setSelectedVideo(null)}
          />
        )}
      </Modal>

    </div>
  );
}
