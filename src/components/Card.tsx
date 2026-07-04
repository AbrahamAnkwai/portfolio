/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverEffect?: boolean;
  glowEffect?: boolean;
  key?: string | number;
}

export default function Card({
  children,
  className = "",
  onClick,
  hoverEffect = true,
  glowEffect = false,
}: CardProps) {
  const isClickable = typeof onClick === "function";
  
  return (
    <div
      onClick={onClick}
      className={`
        relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition-all duration-300
        ${hoverEffect ? "hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:shadow-2xl hover:shadow-white/5" : ""}
        ${isClickable ? "cursor-pointer" : ""}
        ${glowEffect ? "shadow-lg shadow-white/10 border-white/20" : "shadow-xl"}
        ${className}
      `}
    >
      {/* Decorative inner gradient glow */}
      {glowEffect && (
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-full blur-2xl pointer-events-none" />
      )}
      
      {children}
    </div>
  );
}
