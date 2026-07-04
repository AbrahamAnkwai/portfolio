/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface FilterBarProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  className?: string;
}

export default function FilterBar({
  categories,
  activeCategory,
  onCategoryChange,
  className = "",
}: FilterBarProps) {
  return (
    <div className={`flex flex-wrap items-center gap-2 overflow-x-auto pb-1 max-w-full no-scrollbar ${className}`}>
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`
              px-4 py-2 text-xs font-sans font-semibold rounded-xl border transition-all cursor-pointer whitespace-nowrap
              ${isActive
                ? "bg-purple-600 border-purple-500 text-white shadow-lg shadow-purple-500/10"
                : "bg-gray-900/30 border-gray-800/80 text-gray-400 hover:text-white hover:border-gray-700 hover:bg-gray-900/60"
              }
            `}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
