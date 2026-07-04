/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import LucideIcon from "./LucideIcon";

interface ImageViewerProps {
  isOpen: boolean;
  images: string[];
  currentIndex: number;
  titles?: string[];
  descriptions?: string[];
  categories?: string[];
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

export default function ImageViewer({
  isOpen,
  images,
  currentIndex,
  titles = [],
  descriptions = [],
  categories = [],
  onClose,
  onIndexChange,
}: ImageViewerProps) {
  const [zoomScale, setZoomScale] = useState(1);

  // Reset zoom on index change or close
  useEffect(() => {
    setZoomScale(1);
  }, [currentIndex, isOpen]);

  // Handle keyboard inputs
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex, images.length]);

  const handleNext = () => {
    if (images.length <= 1) return;
    onIndexChange((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    if (images.length <= 1) return;
    onIndexChange((currentIndex - 1 + images.length) % images.length);
  };

  const handleZoomIn = () => {
    setZoomScale((prev) => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoomScale((prev) => Math.max(prev - 0.25, 1));
  };

  const handleDownload = () => {
    const currentUrl = images[currentIndex];
    // Open in a new tab for download safely
    window.open(currentUrl, "_blank", "noopener,noreferrer");
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 backdrop-blur-xl">
        
        {/* Backdrop overlay */}
        <div className="absolute inset-0 cursor-zoom-out" onClick={onClose} />

        {/* 1. TOP UTILITY RAIL */}
        <div className="relative z-10 flex items-center justify-between p-4 md:p-6 bg-gradient-to-b from-black/60 to-transparent">
          {/* Index Counter */}
          <span className="font-mono text-xs font-semibold text-gray-400 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 backdrop-blur">
            IMAGE {currentIndex + 1} OF {images.length}
          </span>

          {/* Quick Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleZoomIn}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
              title="Zoom In"
            >
              <LucideIcon name="Search" size={16} />
            </button>
            <button
              onClick={handleZoomOut}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
              title="Zoom Out"
            >
              <LucideIcon name="Filter" size={16} className="rotate-45" /> {/* fallback utility */}
            </button>
            <button
              onClick={handleDownload}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
              title="Open Source Image"
            >
              <LucideIcon name="Download" size={16} />
            </button>
            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all cursor-pointer ml-2"
              title="Close Lightbox (Esc)"
            >
              <LucideIcon name="X" size={16} />
            </button>
          </div>
        </div>

        {/* 2. MAIN VIEW STAGE */}
        <div className="relative flex-1 flex items-center justify-between px-4 md:px-12">
          {/* Prev Navigation Button */}
          {images.length > 1 && (
            <button
              onClick={handlePrev}
              className="relative z-10 p-3 md:p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white transition-all cursor-pointer hidden sm:flex"
              aria-label="Previous image"
            >
              <LucideIcon name="ChevronLeft" size={24} />
            </button>
          )}

          {/* Core Image Stage */}
          <div className="flex-1 flex items-center justify-center h-full max-h-[70vh] overflow-hidden p-2">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={titles[currentIndex] || "Portfolio showcase"}
              style={{ scale: zoomScale }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: zoomScale }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="max-h-full max-w-full object-contain rounded-lg shadow-2xl transition-transform duration-200 select-none referrer-policy"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Next Navigation Button */}
          {images.length > 1 && (
            <button
              onClick={handleNext}
              className="relative z-10 p-3 md:p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white transition-all cursor-pointer hidden sm:flex"
              aria-label="Next image"
            >
              <LucideIcon name="ChevronRight" size={24} />
            </button>
          )}
        </div>

        {/* 3. CAPTION BAR */}
        <div className="relative z-10 p-6 md:p-8 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-3xl">
            {categories[currentIndex] && (
              <span className="inline-block px-2.5 py-1 text-[10px] font-mono tracking-widest text-purple-400 uppercase bg-purple-500/10 rounded-full border border-purple-500/20 mb-2">
                {categories[currentIndex]}
              </span>
            )}
            <h4 className="text-xl md:text-2xl font-sans font-bold text-white tracking-tight mb-1">
              {titles[currentIndex] || "Untitled Exhibit"}
            </h4>
            <p className="text-sm text-gray-400 font-sans max-w-xl">
              {descriptions[currentIndex] || "No further details available for this item."}
            </p>
          </div>

          {/* Mobile Swipe / Arrow Hints */}
          <div className="flex items-center gap-3 sm:hidden">
            <button
              onClick={handlePrev}
              className="flex-1 py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-white flex items-center justify-center cursor-pointer"
            >
              <LucideIcon name="ChevronLeft" size={18} />
            </button>
            <button
              onClick={handleNext}
              className="flex-1 py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-white flex items-center justify-center cursor-pointer"
            >
              <LucideIcon name="ChevronRight" size={18} />
            </button>
          </div>
        </div>

      </div>
    </AnimatePresence>
  );
}
