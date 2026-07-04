/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ExperienceItem } from "../types";

/* ==========================================================================
   EXPERIENCE DATA FILE
   ==========================================================================
   This contains 4 realistic sample career milestones matching your skills.
   Since these are placeholders, names and dates are clearly flagged for editing.
   All artifact images reference local high-quality placeholders.
   ========================================================================== */

export const experienceData: ExperienceItem[] = [
  {
    id: "exp_1",
    company: "[Your Company / Employer - Edit inside /src/data/experience.ts]",
    position: "Lead Computer Engineering Consultant (Sample Placeholder)",
    description: "Systematically diagnosing custom dual-socket motherboard bottlenecks, replacing damaged PCB capacitors, and formulating hardware preventative maintenance guidelines for server racks.",
    technologies: ["Computer Repair & Diagnostics", "Computer Hardware Maintenance", "Problem Solving", "System Maintenance"],
    location: "[Your Location - Edit inside /src/data/experience.ts]",
    startDate: "Jan 2024",
    endDate: "Present",
    // Replace these files inside /assets/images/placeholders/
    images: [
      "/assets/images/placeholders/desktop_repair.jpg",
      "/assets/images/placeholders/gallery_3.jpg"
    ]
  },
  {
    id: "exp_2",
    company: "[Your Networking Agency - Edit inside /src/data/experience.ts]",
    position: "Network Infrastructure Engineer (Sample Placeholder)",
    description: "Deployed structural LAN cabinets and high-performance managed switch boards. Terminated, trunked, and labeled category 6 STP networking cabling in multi-office spaces.",
    technologies: ["Network Setup & Troubleshooting", "System Maintenance", "Attention to Detail", "Teamwork"],
    location: "[Your Location - Edit inside /src/data/experience.ts]",
    startDate: "May 2022",
    endDate: "Dec 2023",
    images: [
      "/assets/images/placeholders/network_installation.jpg",
      "/assets/images/placeholders/gallery_2.jpg"
    ]
  },
  {
    id: "exp_3",
    company: "[Your Tech Support Center - Edit inside /src/data/experience.ts]",
    position: "OS Administrator & Customer Support Specialist (Sample Placeholder)",
    description: "Standardized modern operating system setups, resolved critical legacy driver compatibility blocks, tweaked registry tuning settings, and offered responsive technical support tickets.",
    technologies: ["Operating System Management", "Software Installation & Configuration", "Technical Support", "Customer Service"],
    location: "[Your Location - Edit inside /src/data/experience.ts]",
    startDate: "Mar 2020",
    endDate: "Apr 2022",
    images: [
      "/assets/images/placeholders/windows_config.jpg",
      "/assets/images/placeholders/gallery_1.jpg"
    ]
  },
  {
    id: "exp_4",
    company: "[Your Design Studio / Agency - Edit inside /src/data/experience.ts]",
    position: "Creative Lead & Media Editor (Sample Placeholder)",
    description: "Conceptualized corporate visual graphic layouts, designed custom minimal vector logo marks, retouched commercial hardware photography, and post-edited instructional video walks.",
    technologies: ["Graphic Design", "Logo Design", "Photo Editing", "Video Editing", "Photography"],
    location: "[Your Location - Edit inside /src/data/experience.ts]",
    startDate: "Jun 2018",
    endDate: "Feb 2020",
    images: [
      "/assets/images/placeholders/gallery_4.jpg"
    ]
  }
];
