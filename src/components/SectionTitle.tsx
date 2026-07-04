/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export default function SectionTitle({
  badge,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionTitleProps) {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end",
  };

  return (
    <div className={`flex flex-col max-w-3xl mb-12 ${alignClasses[align]} ${className}`}>
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-mono font-bold tracking-widest text-white/70 uppercase bg-white/5 rounded-full border border-white/10 mb-3.5 shadow-sm">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/40 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
          </span>
          {badge}
        </span>
      )}
      
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-extrabold tracking-tighter text-white mb-4">
        {title}
      </h2>
      
      {subtitle && (
        <p className="text-sm md:text-base text-white/50 font-sans leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
