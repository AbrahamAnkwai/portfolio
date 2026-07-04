/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import LucideIcon from "./LucideIcon";
import { ExperienceItem } from "../types";
import Card from "./Card";

interface TimelineProps {
  items: ExperienceItem[];
}

export default function Timeline({ items }: TimelineProps) {
  const [expandedId, setExpandedId] = useState<string | null>("exp_1"); // Default expand the first item

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="relative border-l border-white/10 ml-4 md:ml-12 pl-6 md:pl-10 py-4 flex flex-col gap-10">
      
      {items.map((item, index) => {
        const isExpanded = expandedId === item.id;

        return (
          <div key={item.id} className="relative group">
            
            {/* 1. GLOWING BULLET NODE */}
            <div className={`
              absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 bg-[#050505] transition-all duration-500 z-10
              ${isExpanded 
                ? "border-white ring-4 ring-white/10 scale-125" 
                : "border-white/10 group-hover:border-white/30 scale-100"
              }
            `} />

            {/* 2. TIMELINE CONTENT CARD */}
            <Card
              onClick={() => toggleExpand(item.id)}
              hoverEffect={!isExpanded}
              glowEffect={isExpanded}
              className="relative p-6 md:p-8 transition-all duration-300 select-none cursor-pointer"
            >
              {/* Header Information Row */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="font-mono text-[10px] font-bold text-white/80 bg-white/5 border border-white/10 rounded-full px-2.5 py-1">
                      {item.startDate} — {item.endDate}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-white/50 font-sans">
                      <LucideIcon name="MapPin" size={12} />
                      {item.location}
                    </span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-sans font-bold text-white tracking-tight">
                    {item.position}
                  </h3>
                  <p className="text-sm font-sans font-medium text-white/70 hover:text-white transition mt-0.5">
                    {item.company}
                  </p>
                </div>

                {/* Dropdown Indicator */}
                <div className={`
                  w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 group-hover:text-white transition-all duration-300
                  ${isExpanded ? "rotate-180 bg-white/10 border-white/20 text-white" : "rotate-0"}
                `}>
                  <LucideIcon name="Layers" size={16} /> {/* collapse placeholder icon */}
                </div>
              </div>

              {/* 3. EXPANDED CONTENT ACCORDION */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden mt-6 border-t border-white/5 pt-6"
                  >
                    {/* Position Description */}
                    <p className="text-sm md:text-base text-white/75 font-sans leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Technologies Tag Array */}
                    <div className="mb-6">
                      <h4 className="text-xs font-mono font-semibold text-white/50 uppercase tracking-wider mb-2.5">
                        Key Responsibilities & Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs font-mono font-medium text-white/70 bg-white/5 border border-white/10 rounded-lg hover:border-white/20 transition"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Milestone Image Gallery */}
                    {item.images && item.images.length > 0 && (
                      <div>
                        <h4 className="text-xs font-mono font-semibold text-white/50 uppercase tracking-wider mb-3">
                          Project Evidence & Artifacts
                        </h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {item.images.map((img, i) => (
                            <div
                              key={i}
                              className="relative aspect-video rounded-xl overflow-hidden border border-white/10 hover:border-white/30 transition group/img shadow-md"
                            >
                              <img
                                src={img}
                                alt={`${item.company} Work Asset`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

            </Card>
          </div>
        );
      })}

    </div>
  );
}
