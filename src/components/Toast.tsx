/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import LucideIcon from "./LucideIcon";

export interface ToastMessage {
  id: string;
  type: "success" | "error" | "info";
  message: string;
}

interface ToastProps {
  toasts: ToastMessage[];
  onRemove: (id: string) => void;
}

export default function Toast({ toasts, onRemove }: ToastProps) {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} onRemove={onRemove} />
        ))}
      </AnimatePresence>
    </div>
  );
}

interface ToastItemProps {
  toast: ToastMessage;
  onRemove: (id: string) => void;
  key?: string | number;
}

function ToastItem({ toast, onRemove }: ToastItemProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onRemove(toast.id);
    }, 4000); // Auto close after 4 seconds

    return () => clearTimeout(timer);
  }, [toast.id, onRemove]);

  const typeConfig = {
    success: {
      bgColor: "bg-gray-950/95 border-emerald-500/30",
      textColor: "text-emerald-400",
      icon: "Wrench", // check mark fallback
    },
    error: {
      bgColor: "bg-gray-950/95 border-red-500/30",
      textColor: "text-red-400",
      icon: "Layers", // error indicator fallback
    },
    info: {
      bgColor: "bg-gray-950/95 border-purple-500/30",
      textColor: "text-purple-400",
      icon: "Lightbulb",
    },
  };

  const config = typeConfig[toast.type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.15 } }}
      className={`
        pointer-events-auto flex items-start gap-3 p-4 rounded-xl border backdrop-blur shadow-2xl w-full
        ${config.bgColor}
      `}
    >
      <div className={`mt-0.5 flex-shrink-0 ${config.textColor}`}>
        <LucideIcon name={config.icon} size={16} />
      </div>

      <div className="flex-1">
        <p className="text-xs font-sans font-medium text-white leading-relaxed">
          {toast.message}
        </p>
      </div>

      <button
        onClick={() => onRemove(toast.id)}
        className="text-gray-500 hover:text-white transition cursor-pointer flex-shrink-0 ml-1 p-0.5"
      >
        <LucideIcon name="X" size={12} />
      </button>
    </motion.div>
  );
}
