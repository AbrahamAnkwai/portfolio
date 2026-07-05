/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/* ==========================================================================
   GLOBAL SETTINGS FILE
   ==========================================================================
   This file controls high-level features across the entire application,
   such as brand name, footer copyrights, SEO settings, and toggle flags.
   All fictional placeholder names have been removed.
   ========================================================================== */

export const siteSettings = {
  // Brand name shown in the navbar and footer
  brandName: "Portfolio" /* ADD YOUR BRAND OR FIRST NAME HERE */,
  brandTitle: "Personal Portfolio" /* ADD YOUR FULL NAME HERE */,
  
  // Custom SEO-ready meta settings
  metaTitle: "Personal Portfolio" /* ADD YOUR SEO TITLE HERE */,
  metaDescription: "Professional computer engineering, support, and creative skills portfolio." /* ADD YOUR SEO DESCRIPTION HERE */,
  
  // Footer text
  copyright: "© 2026. All rights reserved." /* ADD YOUR COPYRIGHT AND NAME HERE */,
  
  // Toggle switches
  enableCustomCursor: true, // Set to false to disable the custom cursor highlight
  enableScrollReveal: true, // Enable fade-in reveal animations on scroll
  enableToastNotifications: true, // Enable modern toasts for contact form submission
  
  // Navigation layout pages
  pages: [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "gallery", label: "Gallery" },
    { id: "videos", label: "Videos" },
    //{ id: "experience", label: "Experience" },
    // { id: "certificates", label: "Certificates" },
    { id: "contact", label: "Contact" }
  ]
};
