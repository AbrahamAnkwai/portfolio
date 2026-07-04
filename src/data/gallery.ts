/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GalleryItem } from "../types";

/* ==========================================================================
   GALLERY DATA FILE
   ==========================================================================
   All gallery items represent realistic, professional work in computer systems,
   diagnostics, and photography. Image files are stored locally in the assets folder.
   ========================================================================== */
const BASE = import.meta.env.BASE_URL;

export const galleryData: GalleryItem[] = [
  {
    id: "gal_1",
    // Replace this file inside /assets/images/placeholders/gallery_1.jpg
    url: `${BASE}/assets/images/placeholders/gallery_1.jpg`,
    title: "Laptop Diagnostic Assembly",
    category: "Computer Engineering",
    description: "Detailed diagnostics of a disassembled high-end laptop, inspecting internal heatpipes, modular RAM slots, and lithium battery connections.",
    projectName: "Desktop Workstation Diagnostics & Repair"
  },
  {
    id: "gal_2",
    // Replace this file inside /assets/images/placeholders/gallery_2.jpg
    url: `${BASE}/assets/images/placeholders/gallery_2.jpg`,
    title: "Enterprise Fiber Routing",
    category: "Networking",
    description: "Symmetrical and labeled structural wiring of optical fiber cables on server switch panels for low-latency client networking.",
    projectName: "Structured Office LAN Setup & Rack Routing"
  },
  {
    id: "gal_3",
    // Replace this file inside /assets/images/placeholders/gallery_3.jpg
    url: `${BASE}/assets/images/placeholders/gallery_3.jpg`,
    title: "Oscilloscope Motherboard Diagnostics",
    category: "Diagnostics",
    description: "Analyzing high-frequency electrical signals on a microcontroller motherboard using high-performance probe sensors and oscilloscopes.",
    projectName: "Desktop Workstation Diagnostics & Repair"
  },
  {
    id: "gal_4",
    // Replace this file inside /assets/images/placeholders/gallery_4.jpg
    url: `${BASE}/assets/images/placeholders/gallery_4.jpg`,
    title: "Custom Workstation Deployment",
    category: "Photography",
    description: "An elegant, clean desktop environment featuring a customized computing rig with balanced low-key warm workspace lighting.",
    projectName: "Operating System Deployment & Configurations"
  }
];
