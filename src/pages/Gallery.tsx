/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import LucideIcon from "../components/LucideIcon";
import Card from "../components/Card";
import SectionTitle from "../components/SectionTitle";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import EmptyState from "../components/EmptyState";
import ImageViewer from "../components/ImageViewer";
import { galleryData } from "../data/gallery";
import { GalleryItem } from "../types";

export default function Gallery() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Lightbox controller state
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Extract unique categories dynamically
  const categories = ["All", ...Array.from(new Set(galleryData.map((item) => item.category)))];

  // Search and filter operations
  const filteredGallery = galleryData.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.projectName && item.projectName.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  const handleImageClick = (item: GalleryItem) => {
    // Locate the index of this item inside the CURRENT FILTERED list
    const index = filteredGallery.findIndex((g) => g.id === item.id);
    if (index !== -1) {
      setLightboxIndex(index);
    }
  };

  return (
    <div className="pt-24 flex flex-col gap-12 relative">
      
      {/* Background glow */}
      <div className="absolute top-40 left-10 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Section Title */}
      <SectionTitle
        badge="Exhibits"
        title="Visual Photography Gallery"
        subtitle="Symmetrical architecture snaps, industrial hardware details, and minimalist layouts captured across the world."
      />

      {/* FILTER & SEARCH TOOLS BAR */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between bg-gray-950/40 p-4 rounded-2xl border border-gray-900/60 backdrop-blur">
        <FilterBar
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Search photo captions or locations..."
          className="w-full md:w-80"
        />
      </div>

      {/* GALLERY GRID */}
      {filteredGallery.length === 0 ? (
        <EmptyState
          iconName="Camera"
          title="No images found"
          description={`Could not find any photos matching "${searchTerm}" under the selected category.`}
          actionText="Reset Filters"
          onAction={() => {
            setSearchTerm("");
            setActiveCategory("All");
          }}
        />
      ) : (
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => handleImageClick(item)}
              className="relative break-inside-avoid rounded-2xl overflow-hidden border border-gray-900/80 bg-gray-950/40 hover:border-purple-500/30 transition-all duration-300 group cursor-zoom-in shadow-xl shadow-black/10"
            >
              {/* Primary Photo */}
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-auto object-cover rounded-2xl transition-transform duration-500 group-hover:scale-[1.03]"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Title Overlay Panel */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end">
                <span className="text-[9px] font-mono tracking-widest text-purple-400 uppercase">
                  {item.category}
                </span>
                
                <h4 className="text-sm font-sans font-bold text-white tracking-tight mt-0.5 leading-tight">
                  {item.title}
                </h4>
                
                <p className="text-[11px] text-gray-300 font-sans mt-1 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>

                {item.projectName && (
                  <span className="text-[9px] font-sans font-medium text-purple-300/80 flex items-center gap-1 mt-2.5 border-t border-white/5 pt-2">
                    <LucideIcon name="Layers" size={10} />
                    Project: {item.projectName}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ==========================================
         LIGHTBOX DETAILED IMAGE VIEWER
         ========================================== */}
      <ImageViewer
        isOpen={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
        images={filteredGallery.map((g) => g.url)}
        currentIndex={lightboxIndex || 0}
        titles={filteredGallery.map((g) => g.title)}
        descriptions={filteredGallery.map((g) => g.description)}
        categories={filteredGallery.map((g) => g.category)}
        onIndexChange={setLightboxIndex}
      />

    </div>
  );
}
