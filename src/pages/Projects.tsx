/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import LucideIcon from "../components/LucideIcon";
import Card from "../components/Card";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import Modal from "../components/Modal";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import EmptyState from "../components/EmptyState";
import { projectsData } from "../data/projects";
import { Project } from "../types";

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Extract unique categories dynamically
  const categories = ["All", ...Array.from(new Set(projectsData.map((p) => p.category)))];

  // Search and filter operations
  const filteredProjects = projectsData.filter((proj) => {
    const matchesSearch =
      proj.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      proj.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      proj.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory =
      activeCategory === "All" || proj.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = projectsData.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % projectsData.length;
    setSelectedProject(projectsData[nextIndex]);
  };

  const handlePrevProject = () => {
    if (!selectedProject) return;
    const currentIndex = projectsData.findIndex((p) => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + projectsData.length) % projectsData.length;
    setSelectedProject(projectsData[prevIndex]);
  };

  return (
    <div className="pt-24 flex flex-col gap-12 relative">
      
      {/* Background Glow */}
      <div className="absolute top-40 right-10 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Section Title */}
      <SectionTitle
        badge="My Portfolio"
        title="Engineering Case Studies"
        subtitle="Explore detailed breakdowns of software systems, server infrastructure layouts, and high-end digital media designs."
      />

      {/* SEARCH AND FILTERS */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between bg-gray-950/40 p-4 rounded-2xl border border-gray-900/60 backdrop-blur">
        <FilterBar
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Search projects or technologies..."
          className="w-full md:w-80"
        />
      </div>

      {/* PROJECTS GRID */}
      {filteredProjects.length === 0 ? (
        <EmptyState
          iconName="Filter"
          title="No projects found"
          description={`Could not find any projects matching "${searchTerm}" under the selected category.`}
          actionText="Reset Filters"
          onAction={() => {
            setSearchTerm("");
            setActiveCategory("All");
          }}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((proj) => (
            <Card
              key={proj.id}
              className="flex flex-col p-0 overflow-hidden border-gray-900/50 group"
            >
              {/* Cover Image Container */}
              <div className="relative aspect-video overflow-hidden bg-gray-950">
                <img
                  src={proj.coverImage}
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Category Pill Tag */}
                <span className="absolute top-4 left-4 px-2.5 py-1 text-[10px] font-mono tracking-widest text-purple-400 uppercase bg-black/85 backdrop-blur rounded-full border border-purple-500/30">
                  {proj.category}
                </span>

                {/* Status indicator */}
                <span className="absolute top-4 right-4 px-2 py-0.5 text-[9px] font-mono tracking-widest text-emerald-400 uppercase bg-black/85 backdrop-blur rounded border border-emerald-500/30">
                  {proj.status}
                </span>
              </div>

              {/* Text Body */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between gap-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-sans font-bold text-white tracking-tight mb-2 group-hover:text-purple-400 transition-colors">
                    {proj.title}
                  </h3>
                  
                  <p className="text-sm text-gray-400 font-sans leading-relaxed line-clamp-3">
                    {proj.description}
                  </p>
                </div>

                {/* Technologies List */}
                <div className="flex flex-wrap gap-1.5">
                  {proj.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[10px] font-mono text-gray-400 bg-gray-950 border border-gray-900 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {proj.technologies.length > 4 && (
                    <span className="px-2 py-0.5 text-[10px] font-mono text-purple-400 bg-purple-500/5 border border-purple-500/10 rounded">
                      +{proj.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 border-t border-gray-900/40 pt-6">
                  <Button
                    onClick={() => setSelectedProject(proj)}
                    variant="glass"
                    size="sm"
                    iconName="Code"
                  >
                    View Details
                  </Button>

                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center text-xs font-semibold text-gray-400 hover:text-white ml-2 cursor-pointer transition-colors"
                    >
                      Live Demo <LucideIcon name="Layers" size={12} className="ml-1 rotate-45" />
                    </a>
                  )}
                </div>
              </div>

            </Card>
          ))}
        </div>
      )}

      {/* ==========================================
         PROJECT DETAILS COMPREHENSIVE MODAL
         ========================================== */}
      <Modal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
        size="xl"
      >
        {selectedProject && (
          <div className="flex flex-col gap-8">
            
            {/* Header Cover Banner */}
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden border border-gray-900 bg-gray-950">
              <img
                src={selectedProject.coverImage}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4">
                <span className="px-2.5 py-1 text-xs font-mono tracking-widest text-purple-400 bg-purple-500/10 border border-purple-500/30 rounded-full backdrop-blur">
                  {selectedProject.category}
                </span>
                
                <span className="font-mono text-xs text-gray-300">
                  Completed: {selectedProject.completionDate}
                </span>
              </div>
            </div>

            {/* Core Description */}
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest">
                Case Study Overview
              </h4>
              <p className="text-sm md:text-base text-gray-300 font-sans leading-relaxed">
                {selectedProject.longDescription}
              </p>
            </div>

            {/* TWO COLUMNS: Challenges & Solutions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card hoverEffect={false} className="border-red-500/10 bg-red-500/[0.01]">
                <h5 className="text-sm font-sans font-bold text-red-400 flex items-center gap-1.5 mb-3">
                  <LucideIcon name="Layers" size={14} className="text-red-400" />
                  Key Challenge
                </h5>
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-sans">
                  {selectedProject.challenges}
                </p>
              </Card>

              <Card hoverEffect={false} className="border-emerald-500/10 bg-emerald-500/[0.01]">
                <h5 className="text-sm font-sans font-bold text-emerald-400 flex items-center gap-1.5 mb-3">
                  <LucideIcon name="Wrench" size={14} className="text-emerald-400" />
                  Engineered Solution
                </h5>
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-sans">
                  {selectedProject.solutions}
                </p>
              </Card>
            </div>

            {/* Screenshots Grid (Images list) */}
            {selectedProject.images && selectedProject.images.length > 0 && (
              <div>
                <h4 className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest mb-3">
                  Platform Evidence & Visual Mockups
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {selectedProject.images.map((img, idx) => (
                    <div key={idx} className="aspect-video rounded-xl overflow-hidden border border-gray-900 bg-gray-950">
                      <img
                        src={img}
                        alt={`Screenshot ${idx + 1}`}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Downloadable Deliverables */}
            {selectedProject.downloadableFiles && selectedProject.downloadableFiles.length > 0 && (
              <div className="border-t border-gray-900/60 pt-6">
                <h4 className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest mb-3">
                  Technical Deliverables
                </h4>
                <div className="flex flex-col sm:flex-row gap-3">
                  {selectedProject.downloadableFiles.map((file) => (
                    <a
                      key={file.name}
                      href={file.url}
                      onClick={(e) => {
                        e.preventDefault();
                        alert(`Downloading file: ${file.name} (Simulated)...`);
                      }}
                      className="inline-flex items-center gap-3 px-4.5 py-3 rounded-xl bg-gray-950 border border-gray-900 text-gray-300 hover:text-white hover:border-gray-800 transition shadow"
                    >
                      <LucideIcon name="Download" size={14} className="text-purple-400" />
                      <span className="text-xs font-sans font-medium">{file.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* MODAL FOOTER BUTTONS with Next/Prev pagination */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-gray-900/60 pt-6">
              
              {/* Pagination controls */}
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={handlePrevProject}
                  className="flex-1 sm:flex-initial py-3 px-4 rounded-xl bg-gray-950 border border-gray-900 text-gray-400 hover:text-white transition cursor-pointer flex items-center justify-center gap-1.5"
                  title="Previous Case Study"
                >
                  <LucideIcon name="ChevronLeft" size={14} />
                  <span className="text-xs font-sans font-medium">Prev</span>
                </button>

                <button
                  onClick={handleNextProject}
                  className="flex-1 sm:flex-initial py-3 px-4 rounded-xl bg-gray-950 border border-gray-900 text-gray-400 hover:text-white transition cursor-pointer flex items-center justify-center gap-1.5"
                  title="Next Case Study"
                >
                  <span className="text-xs font-sans font-medium">Next</span>
                  <LucideIcon name="ChevronRight" size={14} />
                </button>
              </div>

              {/* External source codes */}
              <div className="flex items-center gap-3 w-full sm:w-auto">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-semibold hover:bg-white/10 transition cursor-pointer"
                  >
                    <LucideIcon name="Github" size={14} />
                    Repository
                  </a>
                )}

                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-purple-600 text-white text-xs font-semibold hover:bg-purple-500 transition shadow shadow-purple-600/10 cursor-pointer"
                  >
                    <LucideIcon name="Layers" size={14} className="rotate-45" />
                    Live Demo
                  </a>
                )}
              </div>

            </div>

          </div>
        )}
      </Modal>

    </div>
  );
}
