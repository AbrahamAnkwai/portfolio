/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SocialItem } from "../types";

/* ==========================================================================
   SOCIALS DATA FILE
   ==========================================================================
   This file contains your external links and contact channels.
   All generic fictional placeholder handles have been cleared.
   Please input your real social links into the 'url' fields below.
   ========================================================================== */

export const socialsData: SocialItem[] = [
  {
    id: "soc_1",
    name: "GitHub",
    icon: "Github",
    url: "" /* ADD YOUR GITHUB PROFILE LINK (e.g., "https://github.com/yourusername") */,
    colorClass: "hover:text-white",
    bgColorClass: "bg-white/5 hover:bg-white/10 text-white"
  },
  {
    id: "soc_2",
    name: "LinkedIn",
    icon: "Linkedin",
    url: "" /* ADD YOUR LINKEDIN PROFILE LINK */,
    colorClass: "hover:text-blue-400",
    bgColorClass: "bg-blue-500/10 hover:bg-blue-500/20 text-blue-400"
  },
  {
    id: "soc_3",
    name: "Facebook",
    icon: "Facebook",
    url: "" /* ADD YOUR FACEBOOK PROFILE LINK */,
    colorClass: "hover:text-blue-500",
    bgColorClass: "bg-blue-600/10 hover:bg-blue-600/20 text-blue-500"
  },
  {
    id: "soc_4",
    name: "Instagram",
    icon: "Instagram",
    url: "" /* ADD YOUR INSTAGRAM PROFILE LINK */,
    colorClass: "hover:text-pink-500",
    bgColorClass: "bg-pink-500/10 hover:bg-pink-500/20 text-pink-400"
  },
  {
    id: "soc_5",
    name: "Twitter",
    icon: "Twitter",
    url: "" /* ADD YOUR TWITTER/X PROFILE LINK */,
    colorClass: "hover:text-sky-400",
    bgColorClass: "bg-sky-500/10 hover:bg-sky-500/20 text-sky-400"
  },
  {
    id: "soc_6",
    name: "WhatsApp",
    icon: "PhoneCall",
    url: "" /* ADD YOUR WHATSAPP CHAT LINK (e.g., "https://wa.me/phonenumber") */,
    colorClass: "hover:text-green-400",
    bgColorClass: "bg-green-500/10 hover:bg-green-500/20 text-green-400"
  },
  {
    id: "soc_7",
    name: "Email",
    icon: "Mail",
    url: "mailto:himab316@gmail.com", // Your verified email address
    colorClass: "hover:text-purple-400",
    bgColorClass: "bg-purple-500/10 hover:bg-purple-500/20 text-purple-400"
  }
];
