/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { VideoItem } from "../types";

/* ==========================================================================
   VIDEOS DATA FILE
   ==========================================================================
   This contains 4 realistic sample videos for your portfolio.
   If real videos are unavailable, each is linked to a local MP4 placeholder file.
   Explicit instructions are provided inside comments on how to replace them.
   ========================================================================== */

export const videosData: VideoItem[] = [
  {
    id: "vid_1",
    title: "Desktop Workstation Cleaning & Repair Walkthrough",
    
    // Replace this thumbnail image inside /assets/images/placeholders/desktop_repair.jpg
    thumbnail: "/assets/images/placeholders/desktop_repair.jpg",
    
    // Replace this video file inside /assets/videos/placeholders/video_1.mp4
    url: "/assets/videos/placeholders/video_1.mp4",
    duration: "5:24",
    category: "Computer Repair",
    description: "Detailed step-by-step diagnostic video illustrating workstation teardown, heat-sink cleaning, motherboard capacitor scanning, and final testing procedures."
  },
  {
    id: "vid_2",
    title: "VLAN Configuration & Switch Patching Protocol",
    
    // Replace this thumbnail image inside /assets/images/placeholders/network_installation.jpg
    thumbnail: "/assets/images/placeholders/network_installation.jpg",
    
    // Replace this video file inside /assets/videos/placeholders/video_2.mp4
    url: "/assets/videos/placeholders/video_2.mp4",
    duration: "8:15",
    category: "Networking",
    description: "A complete visual training session on routing custom category 6 Ethernet cables, crimping rj45 connections, and configuring modern managed switches."
  },
  {
    id: "vid_3",
    title: "Windows Administrative Configuration & Policy Deployment",
    
    // Replace this thumbnail image inside /assets/images/placeholders/windows_config.jpg
    thumbnail: "/assets/images/placeholders/windows_config.jpg",
    
    // Replace this video file inside /assets/videos/placeholders/video_3.mp4
    url: "/assets/videos/placeholders/video_3.mp4",
    duration: "4:45",
    category: "Software Installation",
    description: "Demonstrating how to deploy clean administrative user profiles, optimize Windows registry latency parameters, and customize security group policies."
  },
  {
    id: "vid_4",
    title: "Cinematic Lighting & Macro Hardware Photography Setup",
    
    // Replace this thumbnail image inside /assets/images/placeholders/gallery_1.jpg
    thumbnail: "/assets/images/placeholders/gallery_1.jpg",
    
    // Replace this video file inside /assets/videos/placeholders/video_4.mp4
    url: "/assets/videos/placeholders/video_4.mp4",
    duration: "6:12",
    category: "Photography",
    description: "Behind-the-scenes look at setting up dynamic off-camera flash units, select softbox diffusers, and macro prime lenses to capture motherboard trace details."
  }
];
