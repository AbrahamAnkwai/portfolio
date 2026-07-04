/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project } from "../types";

/* ==========================================================================
   PROJECTS DATA FILE
   ==========================================================================
   All projects are populated with professional, realistic, locally stored assets.
   Every image and video path has explicit instructions on where to replace files.
   ========================================================================== */

export const projectsData: Project[] = [
  {
    id: "proj_1",
    title: "Desktop Workstation Diagnostics & Repair",
    category: "Technical",
    description: "Systematic motherboard hardware component testing, faulty RAM/motherboard diagnosis, and custom CPU fan upgrades to resolve recurring blue screen errors.",
    longDescription: "This project showcases full diagnostic isolation of custom gaming and office workstations suffering from thermal throttling and electrical shortages. By utilizing oscilloscopes and power supply testers, bad capacitors were identified and replaced, and CPU cooling configurations were successfully overhauled.",
    
    // Replace this file inside /assets/images/placeholders/desktop_repair.jpg
    coverImage: "/assets/images/placeholders/desktop_repair.jpg",
    
    // Replace these files inside /assets/images/placeholders/
    images: [
      "/assets/images/placeholders/desktop_repair.jpg",
      "/assets/images/placeholders/gallery_1.jpg",
      "/assets/images/placeholders/gallery_3.jpg",
      "/assets/images/placeholders/gallery_4.jpg"
    ],
    
    // Replace this video file inside /assets/videos/placeholders/video_1.mp4
    videos: ["/assets/videos/placeholders/video_1.mp4"],
    
    completionDate: "October 2025",
    technologies: ["Computer Repair & Diagnostics", "Computer Hardware Maintenance", "Problem Solving", "Technical Support"],
    status: "Completed",
    challenges: "The workstation was crashing intermittently under load. Traditional logs didn't report physical hardware failures, and memory tests passed intermittently, creating a highly ambiguous error trace.",
    solutions: "Conducted systematic voltage ripple testing of the electrical phases on the motherboard. Replaced two failing solid capacitors on the power delivery rail and re-aligned the thermal mounting plate to bring idle core temperatures down by 15°C."
  },
  {
    id: "proj_2",
    title: "Structured Office LAN Setup & Rack Routing",
    category: "Technical",
    description: "Designing, routing, and crimping custom category 6 Ethernet network lines, configuring a managed rack switch, and optimizing router bandwidth.",
    longDescription: "A complete physical-layer installation of network systems for a multi-room professional office. Includes neat routing inside wall trunks, installation of wall patch plates, crimping high-quality jacks, and configuring an enterprise network switch with Virtual LANs (VLANs) to separate office traffic.",
    
    // Replace this file inside /assets/images/placeholders/network_installation.jpg
    coverImage: "/assets/images/placeholders/network_installation.jpg",
    
    // Replace these files inside /assets/images/placeholders/
    images: [
      "/assets/images/placeholders/network_installation.jpg",
      "/assets/images/placeholders/gallery_2.jpg",
      "/assets/images/placeholders/gallery_3.jpg",
      "/assets/images/placeholders/gallery_4.jpg"
    ],
    
    // Replace this video file inside /assets/videos/placeholders/video_2.mp4
    videos: ["/assets/videos/placeholders/video_2.mp4"],
    
    completionDate: "December 2025",
    technologies: ["Network Setup & Troubleshooting", "System Maintenance", "Attention to Detail", "Teamwork"],
    status: "Completed",
    challenges: "Wall pathways were highly congested with legacy cable lines, and electromagnetic interference from building power lines threatened signal throughput on newly installed cables.",
    solutions: "Employed high-quality double-shielded STP Cat6 cables. Carefully routed all channels away from high-voltage conduit channels, and verified exact channel continuity and speed using advanced cable analyzers."
  },
  {
    id: "proj_3",
    title: "Operating System Deployment & Configurations",
    category: "Technical",
    description: "Standardized operating system installations, driver configurations, registry tweaking, group policies alignment, and critical security patch setup.",
    longDescription: "Deploying a clean, highly secure operating system image across administrative computers. Implemented driver updates, custom registry settings for bandwidth throttling, local user policy restrictions, and automated offline recovery options for reliable backup access.",
    
    // Replace this file inside /assets/images/placeholders/windows_config.jpg
    coverImage: "/assets/images/placeholders/windows_config.jpg",
    
    // Replace these files inside /assets/images/placeholders/
    images: [
      "/assets/images/placeholders/windows_config.jpg",
      "/assets/images/placeholders/gallery_1.jpg",
      "/assets/images/placeholders/gallery_3.jpg",
      "/assets/images/placeholders/gallery_4.jpg"
    ],
    
    // Replace this video file inside /assets/videos/placeholders/video_3.mp4
    videos: ["/assets/videos/placeholders/video_3.mp4"],
    
    completionDate: "January 2026",
    technologies: ["Software Installation & Configuration", "Operating System Management", "Technical Support", "Customer Service"],
    status: "Completed",
    challenges: "Legacy proprietary software drivers failed to load on the modern Windows 11 platform, halting core customer operations during migration.",
    solutions: "Isolated the driver failure to an unsigned system library. Configured an offline local driver policy, compiled the driver dependencies under compatibility mode, and deployed a secure custom local group policy to allow execution safely."
  },
  {
    id: "proj_4",
    title: "Server Preventive Maintenance & Diagnostic Check",
    category: "Technical",
    description: "Conducting diagnostic thermal scans, removing internal chassis debris, replacing aging thermal paste, and checking backup battery health.",
    longDescription: "A comprehensive physical preventative service routine for key database servers. Removed accumulated particulate material, evaluated storage disk wear statistics (S.M.A.R.T), re-applied high-performance non-conductive thermal grease, and tested backup power supplies.",
    
    // Replace this file inside /assets/images/placeholders/preventive_maintenance.jpg
    coverImage: "/assets/images/placeholders/preventive_maintenance.jpg",
    
    // Replace these files inside /assets/images/placeholders/
    images: [
      "/assets/images/placeholders/preventive_maintenance.jpg",
      "/assets/images/placeholders/gallery_1.jpg",
      "/assets/images/placeholders/gallery_2.jpg",
      "/assets/images/placeholders/gallery_3.jpg"
    ],
    
    // Replace this video file inside /assets/videos/placeholders/video_4.mp4
    videos: ["/assets/videos/placeholders/video_4.mp4"],
    
    completionDate: "March 2026",
    technologies: ["System Maintenance", "Computer Hardware Maintenance", "Problem Solving", "Time Management"],
    status: "Completed",
    challenges: "The server could only be taken offline for a narrow 30-minute maintenance window at midnight, leaving no room for cleaning delays or testing failures.",
    solutions: "Staged all physical equipment, anti-static kits, tools, and thermal materials in advance. Performed cleaning and physical diagnostic checks with high speed, returning the server online successfully with 4 minutes of the window to spare."
  }
];
