/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ProfileStats {
  projectsCompleted: number;
  technicalSkills: number;
  creativeSkills: number;
  yearsOfLearning: number;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  description: string;
}

export interface Profile {
  name: string;
  avatar: string;
  title: string;
  shortIntro: string;
  bio: string;
  longBio: string;
  careerObjective: string;
  mission: string;
  vision: string;
  typingTitles: string[];
  cvUrl: string;
  email: string;
  phone: string;
  location: string;
  stats: ProfileStats;
  education: EducationItem[];
  interests: string[];
}

export interface DownloadableFile {
  name: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  coverImage: string;
  images: string[];
  videos: string[]; // paths or youtube ids
  completionDate: string;
  technologies: string[];
  status: "Completed" | "In Progress" | "Active";
  githubUrl?: string;
  liveUrl?: string;
  challenges: string;
  solutions: string;
  downloadableFiles?: DownloadableFile[];
}

export interface Skill {
  id: string;
  name: string;
  category: "Technical" | "Creative" | "Professional";
  icon: string; // Lucide icon name
  proficiency: number; // 0 to 100
  description: string;
}

export interface Service {
  id: string;
  title: string;
  icon: string; // Lucide icon name
  shortDescription: string;
  detailedExplanation: string;
  sampleImages: string[];
  sampleVideo?: string;
  pricingPlaceholder: string;
  technologies: string[];
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  category: string;
  description: string;
  projectName?: string;
}

export interface VideoItem {
  id: string;
  title: string;
  thumbnail: string;
  url: string; // YouTube/Vimeo embed URL or raw MP4 path
  duration: string;
  category: string;
  description: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  image: string;
  credentialUrl?: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  description: string;
  technologies: string[];
  location: string;
  startDate: string;
  endDate: string; // or 'Present'
  images: string[];
  videos?: string[];
}

export interface SocialItem {
  id: string;
  name: string;
  icon: string; // Lucide icon name
  url: string;
  colorClass: string; // e.g., 'hover:text-blue-500'
  bgColorClass: string; // e.g., 'bg-blue-500/10 hover:bg-blue-500/20 text-blue-400'
}
