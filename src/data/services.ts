/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service } from "../types";

/* ==========================================================================
   SERVICES DATA FILE
   ==========================================================================
   All services are directly related to your specified technical and creative skills.
   Each contains local sample image references with clear instructions.
   ========================================================================== */

export const servicesData: Service[] = [
  {
    id: "srv_1",
    title: "Computer Repair",
    icon: "Wrench",
    shortDescription: "Complete physical troubleshooting, component level replacement, and diagnostic tests.",
    detailedExplanation: "Systematic investigation of system failure states, replacement of damaged capacitors, testing of power supplies, memory diagnostic assessments, and full hardware assembly validation.",
    pricingPlaceholder: "Contact for diagnosis quote",
    technologies: ["Computer Repair & Diagnostics", "Computer Hardware Maintenance", "Problem Solving"],
    // Replace these files inside /assets/images/placeholders/
    sampleImages: ["/assets/images/placeholders/desktop_repair.jpg", "/assets/images/placeholders/gallery_1.jpg"]
  },
  {
    id: "srv_2",
    title: "Computer Hardware Maintenance",
    icon: "Settings",
    shortDescription: "Dust removal, thermal paste application, and routine fan inspection to prevent overheating.",
    detailedExplanation: "Comprehensive internal cleaning of laptops, desktops, and server chassis. Evaluates physical state of components, checks connection integrity, and replaces dry thermal interfaces.",
    pricingPlaceholder: "Custom commercial & residential packages",
    technologies: ["Computer Hardware Maintenance", "System Maintenance", "Attention to Detail"],
    sampleImages: ["/assets/images/placeholders/preventive_maintenance.jpg", "/assets/images/placeholders/gallery_3.jpg"]
  },
  {
    id: "srv_3",
    title: "Software Installation & Configuration",
    icon: "Download",
    shortDescription: "Installing critical business software, administrative programs, and system drivers.",
    detailedExplanation: "Safe deployment of productive client applications, driver utility alignment, licensing synchronization, and custom program parameter customization for smooth workspace usage.",
    pricingPlaceholder: "Flat rate per machine configuration",
    technologies: ["Software Installation & Configuration", "Operating System Management", "Technical Support"],
    sampleImages: ["/assets/images/placeholders/windows_config.jpg", "/assets/images/placeholders/gallery_1.jpg"]
  },
  {
    id: "srv_4",
    title: "Network Setup & Troubleshooting",
    icon: "Network",
    shortDescription: "Physical network design, ethernet cable crimping, routing, and router setup.",
    detailedExplanation: "Structuring local area connectivity (LAN) inside offices. Includes cable trunk installations, patching, network switch routing configurations, Wi-Fi channel analysis, and broadband troubleshooting.",
    pricingPlaceholder: "On-site assessment required",
    technologies: ["Network Setup & Troubleshooting", "Problem Solving", "Teamwork"],
    sampleImages: ["/assets/images/placeholders/network_installation.jpg", "/assets/images/placeholders/gallery_2.jpg"]
  },
  {
    id: "srv_5",
    title: "Operating System Installation",
    icon: "Monitor",
    shortDescription: "Deploying Windows, macOS, or Linux with optimized settings and backup setup.",
    detailedExplanation: "Fresh deployment of operating systems. Configures active user accounts, partitions physical storage drives, manages registries, disables telemetric bloat, and optimizes OS boot speed.",
    pricingPlaceholder: "Contact for OS migration rate",
    technologies: ["Operating System Management", "Software Installation & Configuration", "System Maintenance"],
    sampleImages: ["/assets/images/placeholders/windows_config.jpg", "/assets/images/placeholders/gallery_4.jpg"]
  },
  {
    id: "srv_6",
    title: "Technical Support",
    icon: "HelpCircle",
    shortDescription: "Empathetic hardware and software problem solving for commercial and home users.",
    detailedExplanation: "Responsive support cycles to resolve hardware halts or software conflicts. Provides patient, step-by-step guidance on system settings, peripheral connections, and software procedures.",
    pricingPlaceholder: "Hourly or monthly retainer rates",
    technologies: ["Technical Support", "Communication", "Customer Service"],
    sampleImages: ["/assets/images/placeholders/gallery_3.jpg", "/assets/images/placeholders/gallery_4.jpg"]
  },
  {
    id: "srv_7",
    title: "Graphic Design",
    icon: "PenTool",
    shortDescription: "Professional vector artwork, branding collateral layouts, and print-ready files.",
    detailedExplanation: "Creating geometric high-contrast layouts, digital flyers, commercial assets, and brochure blueprints aligned with operational aesthetic guidelines.",
    pricingPlaceholder: "Project-based quotes available",
    technologies: ["Graphic Design", "Attention to Detail", "Adaptability"],
    sampleImages: ["/assets/images/placeholders/gallery_4.jpg", "/assets/images/placeholders/desktop_repair.jpg"]
  },
  {
    id: "srv_8",
    title: "Logo Design",
    icon: "Paintbrush",
    shortDescription: "Minimal, high-impact vector logo marks crafted for physical and digital systems.",
    detailedExplanation: "Deep conceptual research, drafting initial visual directions, vectorizing selected drafts, and designing scalable logo kits with proper color codes and typography guidelines.",
    pricingPlaceholder: "Flat branding package pricing",
    technologies: ["Logo Design", "Graphic Design", "Time Management"],
    sampleImages: ["/assets/images/placeholders/gallery_4.jpg", "/assets/images/placeholders/network_installation.jpg"]
  },
  {
    id: "srv_9",
    title: "Photo Editing",
    icon: "Layers",
    shortDescription: "Color grading, photo retouching, background isolations, and graphic compositing.",
    detailedExplanation: "Enhancing raw photography outputs. Fine-tunes exposures, applies sharp lens distortion profiles, cleans noise and dust artifacts, and handles transparent visual compositions.",
    pricingPlaceholder: "Inquire for batch editing rates",
    technologies: ["Photo Editing", "Photography", "Attention to Detail"],
    sampleImages: ["/assets/images/placeholders/gallery_3.jpg", "/assets/images/placeholders/gallery_1.jpg"]
  },
  {
    id: "srv_10",
    title: "Video Editing",
    icon: "Video",
    shortDescription: "Assembling raw clips, audio syncing, pacing edits, and color correcting.",
    detailedExplanation: "Post-production editing of tutorials, technical walkthroughs, or creative clips. Arranges sequence continuity, synchronizes secondary multi-mic audio tracks, and compiles final high-def formats.",
    pricingPlaceholder: "Contact for per-minute editing rates",
    technologies: ["Video Editing", "Creative Skills", "Time Management"],
    sampleImages: ["/assets/images/placeholders/gallery_1.jpg", "/assets/images/placeholders/preventive_maintenance.jpg"]
  },
  {
    id: "srv_11",
    title: "Photography",
    icon: "Camera",
    shortDescription: "Capturing high-resolution physical workspaces, products, and technical objects.",
    detailedExplanation: "On-site commercial hardware and technical object shoots. Utilizes high-end camera bodies, prime macro lenses, and synchronized flash systems to document engineering layouts.",
    pricingPlaceholder: "Half-day and full-day photo shoot rates",
    technologies: ["Photography", "Creative Skills", "Adaptability"],
    sampleImages: ["/assets/images/placeholders/gallery_3.jpg", "/assets/images/placeholders/gallery_2.jpg"]
  }
];
