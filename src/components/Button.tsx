/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import LucideIcon from "./LucideIcon";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline" | "glass";
  size?: "sm" | "md" | "lg";
  iconName?: string;
  iconPosition?: "left" | "right";
  className?: string;
  disabled?: boolean;
}

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  iconName,
  iconPosition = "right",
  className = "",
  disabled = false,
}: ButtonProps) {
  const baseStyle = "inline-flex items-center justify-center font-sans font-semibold rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer active:scale-95";
  
  const variants = {
    primary: "bg-white text-black hover:bg-gray-150 shadow-lg shadow-white/5 hover:scale-[1.03] transition-transform",
    secondary: "bg-white/10 border border-white/10 hover:bg-white/15 text-white hover:-translate-y-0.5",
    outline: "border border-white/10 hover:border-white/20 text-white bg-transparent hover:bg-white/5 hover:-translate-y-0.5",
    glass: "backdrop-blur-md bg-white/5 hover:bg-white/10 border border-white/10 text-white hover:border-white/20 hover:-translate-y-0.5"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base"
  };

  const iconSize = size === "sm" ? 14 : size === "lg" ? 18 : 16;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {iconName && iconPosition === "left" && (
        <LucideIcon name={iconName} size={iconSize} className="mr-2 animate-pulse" />
      )}
      {children}
      {iconName && iconPosition === "right" && (
        <LucideIcon name={iconName} size={iconSize} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </button>
  );
}
