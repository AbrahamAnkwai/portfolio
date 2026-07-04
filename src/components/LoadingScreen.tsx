/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import LucideIcon from "./LucideIcon";

export default function LoadingScreen() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showScreen, setShowScreen] = useState(true);

  useEffect(() => {
    // Fast simulated progress loading
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setShowScreen(false), 500); // Wait for progress bar fill, then hide
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {showScreen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
        >
          {/* Central Logo Indicator */}
          <div className="flex flex-col items-center gap-4 relative">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: [1, 1.05, 1], opacity: 1 }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center shadow-2xl shadow-purple-500/25 border border-purple-500/20"
            >
              <LucideIcon name="Cpu" size={32} className="text-white" />
            </motion.div>
            
            <h1 className="font-sans font-bold text-lg text-white tracking-widest uppercase">
              WELCOME
            </h1>
            <p className="font-mono text-[9px] text-gray-500 tracking-wider">
               TO MY PORTFOLIO
            </p>

            {/* Fine Progress Indicator Line */}
            <div className="w-48 h-[2px] bg-gray-900 rounded-full overflow-hidden mt-6">
              <div
                className="h-full bg-gradient-to-r from-purple-600 to-indigo-600 transition-all duration-100"
                style={{ width: `${Math.min(loadingProgress, 100)}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
