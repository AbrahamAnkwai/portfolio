/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import LucideIcon from "./LucideIcon";
import { siteSettings } from "../data/settings";

interface NavbarProps {
  activePage: string;
  onPageChange: (pageId: string) => void;
}

export default function Navbar({ activePage, onPageChange }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Monitor scroll for glass effect and progress bar
  useEffect(() => {
    const handleScroll = () => {
      // 1. Is scrolled
      setIsScrolled(window.scrollY > 15);

      // 2. Scroll Progress Percentage
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (pageId: string) => {
    onPageChange(pageId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className={`
      fixed top-0 inset-x-0 z-40 transition-all duration-300
      ${isScrolled 
        ? "bg-[#050505]/85 backdrop-blur-xl border-b border-white/5 py-4 shadow-xl shadow-black/30" 
        : "bg-transparent py-6 border-b border-transparent"
      }
    `}>
      
      {/* Scroll Progress Indicator Bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-white to-white/40 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Branding Title */}
        <div
          onClick={() => handleLinkClick("home")}
          className="flex items-center gap-2.5 cursor-pointer font-sans font-bold text-lg text-white tracking-tight hover:opacity-90 select-none group"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-white to-gray-400 flex items-center justify-center shadow-lg shadow-white/5 transition-transform duration-300 group-hover:rotate-6 text-black font-extrabold text-xs">
            AB
          </span>
          <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            {siteSettings.brandName}
          </span>
        </div>

        {/* Desktop Navigation Link List */}
        <nav className="hidden lg:flex items-center gap-5 bg-white/5 border border-white/10 rounded-full px-5 py-1.5 backdrop-blur-xl">
          {siteSettings.pages.map((page) => {
            const isActive = activePage === page.id;
            return (
              <button
                key={page.id}
                onClick={() => handleLinkClick(page.id)}
                className={`
                  text-xs font-sans font-medium transition-all cursor-pointer bg-transparent py-0.5
                  ${isActive 
                    ? "text-white underline underline-offset-4 decoration-white/30 font-semibold" 
                    : "text-white/60 hover:text-white"
                  }
                `}
              >
                {page.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action: Call to action */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={() => handleLinkClick("contact")}
            className="bg-white text-black px-5 py-2 rounded-full text-xs font-semibold hover:bg-gray-200 transition-colors cursor-pointer shadow-md transition-all duration-300 active:scale-95"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Hamburger Trigger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl border border-gray-800 bg-gray-900/50 text-gray-400 hover:text-white transition cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          <LucideIcon name={isMobileMenuOpen ? "X" : "Menu"} size={18} />
        </button>

      </div>

      {/* Mobile Menu Dropdown Panel */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-[calc(100%+1px)] inset-x-0 bg-black/95 border-b border-gray-900 backdrop-blur-xl py-6 px-6 flex flex-col gap-2.5 animate-in fade-in slide-in-from-top-3 duration-300">
          <p className="text-[10px] font-mono tracking-widest text-purple-400 uppercase mb-2">
            Navigation Menu
          </p>
          <div className="grid grid-cols-2 gap-2">
            {siteSettings.pages.map((page) => {
              const isActive = activePage === page.id;
              return (
                <button
                  key={page.id}
                  onClick={() => handleLinkClick(page.id)}
                  className={`
                    w-full py-3 px-4 rounded-xl text-left font-sans text-xs font-semibold transition cursor-pointer border
                    ${isActive 
                      ? "bg-purple-600/10 border-purple-500/30 text-purple-400" 
                      : "bg-gray-900/30 border-transparent text-gray-400 hover:text-white hover:bg-gray-900/60"
                    }
                  `}
                >
                  {page.label}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => handleLinkClick("contact")}
            className="w-full mt-4 py-3 text-center text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl shadow-lg cursor-pointer"
          >
            Get In Touch
          </button>
        </div>
      )}

    </header>
  );
}
