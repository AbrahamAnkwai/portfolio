/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Profile } from "../types";


/* ==========================================================================
   PROFILE DATA FILE
   ==========================================================================
   This file contains your main identity information.
   All fictional placeholder names, careers, and statistics have been removed.
   Please fill in the commented fields below with your real information.
   ========================================================================== */
  // Use a safe access for import.meta.env to satisfy TypeScript when ImportMeta typing is not extended
  const BASE = ((import.meta as any).env?.BASE_URL) || '/';
export const profileData: Profile = {

  // 1. YOUR BASIC INFORMATION
  // Replace the placeholder below with your real name (e.g. "John Doe") inside /src/data/profile.ts
  name: "Computer Engineer" /* Replace this name inside /src/data/profile.ts */,
  
  // High-quality professional portrait. Replace this file inside /assets/images/placeholders/profile_portrait.jpg
  avatar: `${BASE}assets/images/profile/ab-dp.png`,
  
  // Your primary role or title
  title: "Computer Systems Engineer & Creative Technical Specialist" /* Replace this title inside /src/data/profile.ts */,
  
  // A punchy short intro for the landing sections
  shortIntro: "Engineering high-performance physical systems, diagnosing complex hardware bottlenecks, and crafting professional visual assets." /* Replace this intro inside /src/data/profile.ts */,
  
  // A brief introductory paragraph used in headers/cards
  bio: "Providing systematic diagnostic analysis, computer hardware maintenance, robust system configuration, and graphic/video solutions." /* Replace this bio inside /src/data/profile.ts */,
  
  // A detailed biography shown on the About page
  longBio: "A dedicated Computer Engineering specialist with a secondary focus in digital creative design. Experienced in inspecting, repairing, and optimizing complex motherboard components, network routing architectures, and operating system kernels. Fully equipped to manage technical support cycles while executing professional graphic, logo, photo, and video post-production editing briefs." /* Replace this biography inside /src/data/profile.ts */,

  // 2. CAREER GOALS, MISSION & VISION (Used on the About Page)
  careerObjective: "To deploy robust, high-efficiency physical and digital hardware configurations that maximize system uptime, streamline operations, and bridge the gap between engineering diagnostics and aesthetic creative layouts." /* Replace this objective inside /src/data/profile.ts */,
  mission: "To systematically troubleshoot system failures, perform precise hardware installations, and provide clear technical solutions with high operational standards." /* Replace this mission inside /src/data/profile.ts */,
  vision: "To create seamless, high-availability IT infrastructures paired with elegant, clean visual designs for businesses and individual clients." /* Replace this vision inside /src/data/profile.ts */,

  // 3. TYPING ANIMATION TITLES (Cycles on the Hero Section)
  // Derived strictly from your actual specified skills list
  typingTitles: [
    "Computer Engineer",
    "Hardware Specialist",
    "Technical Support Specialist",
    "Graphic Designer",
    "Video Editor",
    "Photographer"
  ],

  // 4. LINK TO YOUR CURRICULUM VITAE (CV)
  cvUrl: "#" /* Replace this with a link to your real CV PDF inside /src/data/profile.ts */,

  // 5. CONTACT METHOD VALUES
  email: "himab316@gmail.com", // Your real email address
  phone: "[Your Phone Number - Edit inside /src/data/profile.ts]" /* Replace this inside /src/data/profile.ts */,
  location: "[Your Location - Edit inside /src/data/profile.ts]" /* Replace this inside /src/data/profile.ts */,

  // 6. STATISTICS COUNTERS (Shown on the Home Page)
  // Reflects actual sample item counts to make pages look complete immediately
  stats: {
    projectsCompleted: 4, // 4 real projects are configured below
    technicalSkills: 9,   // Exactly 9 real technical skills provided
    creativeSkills: 5,    // Exactly 5 real creative skills provided
    yearsOfLearning: 4,   // 4 years of learning and practice
  },

  // 7. EDUCATION HISTORY TIMELINE (Shown on the About Page)
  // Standard educational placeholders for you to replace with your real background.
  education: [
    {
      id: "edu_1",
      institution: "[Your University - Edit inside /src/data/profile.ts]",
      degree: "B.S. in Computer Engineering (Sample Placeholder)",
      period: "2022 - 2026 (Sample)",
      description: "Comprehensive coursework in digital logic systems, computer architecture, hardware diagnostics, and low-level firmware integrations."
    },
    {
      id: "edu_2",
      institution: "[Your Academy / Board - Edit inside /src/data/profile.ts]",
      degree: "Hardware Maintenance & Diagnostic Specialist (Sample Placeholder)",
      period: "2024 (Sample)",
      description: "Rigorous laboratory training in motherboard component repairing, soldering techniques, oscilloscope testing, and device calibration."
    },
    {
      id: "edu_3",
      institution: "[Your Certifying Authority - Edit inside /src/data/profile.ts]",
      degree: "Network Infrastructure Certification (Sample Placeholder)",
      period: "2023 (Sample)",
      description: "Validation of physical layer cable routing, switch configuration, wireless routing protocols, and enterprise connectivity."
    },
    {
      id: "edu_4",
      institution: "[Your Training Institute - Edit inside /src/data/profile.ts]",
      degree: "Advanced OS Configuration & IT Support (Sample Placeholder)",
      period: "2025 (Sample)",
      description: "Technical support management, operating system deployment, registry tuning, driver optimization, and security kernels."
    }
  ],

  // 8. PERSONAL INTERESTS / HOBBIES (Shown on the About Page)
  interests: [
    "Custom Workstation Design",
    "Digital Electronics Engineering",
    "Cinematic Camera Systems",
    "High-Contrast Visual Graphic Design"
  ]
};
