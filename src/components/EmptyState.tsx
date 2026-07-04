/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import LucideIcon from "./LucideIcon";
import Button from "./Button";

interface EmptyStateProps {
  iconName?: string;
  title?: string;
  description?: string;
  actionText?: string;
  onAction?: () => void;
  className?: string;
}

export default function EmptyState({
  iconName = "Filter",
  title = "No results found",
  description = "Try adjusting your filters or search criteria to locate items.",
  actionText,
  onAction,
  className = "",
}: EmptyStateProps) {
  return (
    <div className={`flex flex-col items-center justify-center text-center p-12 bg-gray-900/10 border border-dashed border-gray-900 rounded-3xl backdrop-blur max-w-lg mx-auto ${className}`}>
      <div className="w-12 h-12 rounded-xl bg-gray-950 flex items-center justify-center text-gray-500 border border-gray-900 mb-4 shadow-inner">
        <LucideIcon name={iconName} size={20} />
      </div>
      
      <h3 className="text-lg font-sans font-semibold text-white tracking-tight mb-1.5">
        {title}
      </h3>
      
      <p className="text-sm font-sans text-gray-400 mb-6 max-w-sm">
        {description}
      </p>

      {actionText && onAction && (
        <Button onClick={onAction} variant="outline" size="sm">
          {actionText}
        </Button>
      )}
    </div>
  );
}
