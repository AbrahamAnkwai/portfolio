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
import { skillsData } from "../data/skills";

export default function Skills() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filterCategories = ["All", "Technical", "Creative", "Professional"];

  // Search & Filter computation
  const filteredSkills = skillsData.filter((skill) => {
    const matchesSearch =
      skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory =
      activeCategory === "All" || skill.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-24 flex flex-col gap-12 relative">
      
      {/* Background glow */}
      <div className="absolute top-40 left-10 w-96 h-96 bg-blue-500/[0.02] rounded-full blur-3xl pointer-events-none" />

      {/* Title */}
      <SectionTitle
        badge="Expertise"
        title="Technical & Creative Skills"
        subtitle="A detailed breakdown of my technological capabilities, design principles, and organizational strategies."
      />

      {/* SEARCH AND FILTERS */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-xl shadow-sm">
        <FilterBar
          categories={filterCategories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Search skills (e.g. React, Camera)..."
          className="w-full md:w-80"
        />
      </div>

      {/* SKILLS DISPLAY GRID */}
      {filteredSkills.length === 0 ? (
        <EmptyState
          iconName="Filter"
          title="No skills found"
          description={`No credentials matching "${searchTerm}" found in the "${activeCategory}" category. Try entering another query.`}
          actionText="Reset Filters"
          onAction={() => {
            setSearchTerm("");
            setActiveCategory("All");
          }}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <Card
              key={skill.id}
              hoverEffect={true}
              className="flex flex-col justify-between p-6 h-full relative group"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
                    <LucideIcon name={skill.icon} size={18} />
                  </div>
                  
                  <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase font-semibold">
                    {skill.category}
                  </span>
                </div>

                {/* Skill description titles */}
                <h3 className="text-lg font-sans font-bold text-white mb-2 tracking-tight group-hover:text-white transition-colors">
                  {skill.name}
                </h3>
                
                <p className="text-xs text-white/50 font-sans leading-relaxed mb-6">
                  {skill.description}
                </p>
              </div>

              {/* Proficiency animated progress bar */}
              <div className="flex flex-col gap-1.5 mt-auto">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest font-semibold">
                    Proficiency
                  </span>
                  <span className="text-xs font-mono font-semibold text-white">
                    {skill.proficiency}%
                  </span>
                </div>

                <div className="w-full h-1.5 bg-white/5 border border-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white rounded-full transition-all duration-1000"
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
              </div>

            </Card>
          ))}
        </div>
      )}

    </div>
  );
}
