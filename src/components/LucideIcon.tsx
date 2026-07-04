/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import * as Icons from "lucide-react";

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function LucideIcon({ name, className = "", size }: LucideIconProps) {
  // Safe dynamic lookup from the Lucide bundle
  const IconComponent = (Icons as any)[name];

  if (!IconComponent) {
    // Fallback icon if lookup fails
    return <Icons.Sparkles className={className} size={size} />;
  }

  return <IconComponent className={className} size={size} />;
}
