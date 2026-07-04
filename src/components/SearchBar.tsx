/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import LucideIcon from "./LucideIcon";

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  className?: string;
}

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search projects or technologies...",
  className = "",
}: SearchBarProps) {
  return (
    <div className={`relative flex items-center ${className}`}>
      {/* Search Lens Icon */}
      <div className="absolute left-4.5 text-gray-500 pointer-events-none">
        <LucideIcon name="Search" size={16} />
      </div>

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-gray-900/40 border border-gray-800/80 rounded-2xl pl-12 pr-12 py-3.5 text-sm font-sans text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/80 focus:ring-1 focus:ring-purple-500/80 transition backdrop-blur-md shadow-inner"
      />

      {/* Clear Button */}
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute right-4.5 p-1.5 rounded-lg text-gray-500 hover:text-white hover:bg-gray-800/40 transition cursor-pointer"
          title="Clear search"
        >
          <LucideIcon name="X" size={12} />
        </button>
      )}
    </div>
  );
}
