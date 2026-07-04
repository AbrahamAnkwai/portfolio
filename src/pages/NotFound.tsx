/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import LucideIcon from "../components/LucideIcon";
import Button from "../components/Button";

interface NotFoundProps {
  onGoHome: () => void;
}

export default function NotFound({ onGoHome }: NotFoundProps) {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 relative py-20">
      
      {/* Decorative back-glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Symmetrical Core Error Graphics */}
      <div className="relative flex flex-col items-center gap-6 z-10 max-w-md">
        <div className="w-16 h-16 rounded-2xl bg-gray-950 border border-gray-900 text-purple-400 flex items-center justify-center shadow-lg">
          <LucideIcon name="Layers" size={28} className="animate-spin" /> {/* fallback graphic spinner */}
        </div>

        <h1 className="text-8xl font-sans font-extrabold text-white tracking-tighter leading-none bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent">
          404
        </h1>

        <h2 className="text-xl font-sans font-bold text-white tracking-tight">
          System Address Not Found
        </h2>

        <p className="text-sm font-sans text-gray-400 leading-relaxed">
          The requested page route has been unmapped or does not exist. Confirm your navigation credentials and trace back to safety.
        </p>

        <Button
          onClick={onGoHome}
          variant="primary"
          iconName="Code" // Code works as a fallback button icon mapping
          className="mt-4"
        >
          Return to Dashboard
        </Button>
      </div>

    </div>
  );
}
