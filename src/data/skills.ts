/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Skill } from "../types";

/* ==========================================================================
   SKILLS DATA FILE
   ==========================================================================
   This file contains your technical, creative, and professional skills.
   - category: Must be "Technical", "Creative", or "Professional"
   - icon: Must be a string matching a Lucide icon component name.
     (Examples: Cpu, Code, Database, Terminal, Camera, Video, PenTool, Paintbrush, Network, HelpCircle, Users, Briefcase, Lightbulb)
   - proficiency: Number from 0 to 100 for the animated progress bars.
   ========================================================================== */

export const skillsData: Skill[] = [
  // --- TECHNICAL SKILLS ---
  {
    id: "tech_1",
    name: "Computer Engineering",
    category: "Technical",
    icon: "Cpu",
    proficiency: 90,
    description: "Designing, analyzing, and building physical computer hardware and integrated digital systems."
  },
  {
    id: "tech_2",
    name: "Computer Hardware Maintenance",
    category: "Technical",
    icon: "Settings",
    proficiency: 85,
    description: "Inspecting, cleaning, and upgrading computer components to ensure peak mechanical and electrical function."
  },
  {
    id: "tech_3",
    name: "Computer Repair & Diagnostics",
    category: "Technical",
    icon: "Wrench",
    proficiency: 95,
    description: "Identifying hardware failures, performing component-level troubleshooting, and replacing damaged modules."
  },
  {
    id: "tech_4",
    name: "Software Installation & Configuration",
    category: "Technical",
    icon: "Download",
    proficiency: 90,
    description: "Installing operating systems, administrative software, and drivers with correct system configurations."
  },
  {
    id: "tech_5",
    name: "Network Setup & Troubleshooting",
    category: "Technical",
    icon: "Network",
    proficiency: 85,
    description: "Deploying local area networks, configuring routers/switches, and resolving connection or bandwidth issues."
  },
  {
    id: "tech_6",
    name: "Operating System Management",
    category: "Technical",
    icon: "Monitor",
    proficiency: 90,
    description: "Administering Windows, Linux, and macOS platforms, optimizing registry, permissions, and system kernels."
  },
  {
    id: "tech_7",
    name: "System Maintenance",
    category: "Technical",
    icon: "Shield",
    proficiency: 88,
    description: "Conducting routine backups, software patches, disk optimization, and preventive maintenance routines."
  },
  {
    id: "tech_8",
    name: "Technical Support",
    category: "Technical",
    icon: "HelpCircle",
    proficiency: 95,
    description: "Providing user assistance, clarifying hardware/software procedures, and resolving user issues."
  },
  {
    id: "tech_9",
    name: "Problem Solving",
    category: "Technical",
    icon: "Lightbulb",
    proficiency: 90,
    description: "Applying systematic logical analysis to isolate hardware bottlenecks and software conflicts."
  },

  // --- CREATIVE SKILLS ---
  {
    id: "create_1",
    name: "Graphic Design",
    category: "Creative",
    icon: "PenTool",
    proficiency: 85,
    description: "Creating professional visual materials, vector assets, digital layouts, and promotional media."
  },
  {
    id: "create_2",
    name: "Logo Design",
    category: "Creative",
    icon: "Paintbrush",
    proficiency: 80,
    description: "Developing minimal, distinctive, and functional logo marks aligned with brand identities."
  },
  {
    id: "create_3",
    name: "Photo Editing",
    category: "Creative",
    icon: "Layers",
    proficiency: 85,
    description: "Color correction, background removal, retouching, and compositing raw digital images."
  },
  {
    id: "create_4",
    name: "Video Editing",
    category: "Creative",
    icon: "Video",
    proficiency: 80,
    description: "Trimming, audio syncing, pacing, and color grading raw video files into clear visual narratives."
  },
  {
    id: "create_5",
    name: "Photography",
    category: "Creative",
    icon: "Camera",
    proficiency: 85,
    description: "Capturing high-resolution photos using professional digital camera systems, lighting, and lenses."
  },

  // --- PROFESSIONAL SKILLS ---
  {
    id: "prof_1",
    name: "Communication",
    category: "Professional",
    icon: "MessageSquare",
    proficiency: 90,
    description: "Exchanging technical ideas clearly and explaining engineering processes to clients or team members."
  },
  {
    id: "prof_2",
    name: "Time Management",
    category: "Professional",
    icon: "Clock",
    proficiency: 85,
    description: "Prioritizing diagnostic tasks and support tickets to meet strict operational schedules."
  },
  {
    id: "prof_3",
    name: "Attention to Detail",
    category: "Professional",
    icon: "Eye",
    proficiency: 90,
    description: "Verifying exact hardware alignments and code/configuration settings to prevent system failure."
  },
  {
    id: "prof_4",
    name: "Teamwork",
    category: "Professional",
    icon: "Users",
    proficiency: 85,
    description: "Collaborating with clients, technicians, and digital teams to resolve cross-disciplinary project challenges."
  },
  {
    id: "prof_5",
    name: "Customer Service",
    category: "Professional",
    icon: "Smile",
    proficiency: 90,
    description: "Providing empathetic, responsive support with a helpful attitude to resolve user difficulties."
  },
  {
    id: "prof_6",
    name: "Adaptability",
    category: "Professional",
    icon: "Sparkles",
    proficiency: 85,
    description: "Adjusting to new operating systems, custom software platforms, and evolving system support workflows."
  }
];
