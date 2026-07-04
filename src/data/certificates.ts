/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CertificateItem } from "../types";

/* ==========================================================================
   CERTIFICATES DATA FILE
   ==========================================================================
   All certificates are structured with local placeholder images and clear comments.
   Replace these files inside /assets/certificates/placeholders/ and customize titles.
   ========================================================================== */

export const certificatesData: CertificateItem[] = [
  {
    id: "cert_1",
    title: "Computer Engineering & Hardware Diagnostics (Sample Placeholder)",
    issuer: "[Your Issuing Authority - Edit inside /src/data/certificates.ts]",
    issueDate: "November 2024 (Sample)",
    
    // Replace this certificate image inside /assets/certificates/placeholders/cert_1.jpg
    image: "/assets/certificates/placeholders/cert_1.jpg",
    credentialUrl: "#" /* Replace with your verification link inside /src/data/certificates.ts */,
    description: "Hands-on assessment and curriculum validating skills in digital logic circuits, electronic component testing, motherboard diagnoses, and custom system assemblies."
  },
  {
    id: "cert_2",
    title: "Hardware Maintenance & Diagnostic Specialist (Sample Placeholder)",
    issuer: "[Your Issuing Authority - Edit inside /src/data/certificates.ts]",
    issueDate: "April 2025 (Sample)",
    
    // Replace this certificate image inside /assets/certificates/placeholders/cert_2.jpg
    image: "/assets/certificates/placeholders/cert_2.jpg",
    credentialUrl: "#" /* Replace with your verification link inside /src/data/certificates.ts */,
    description: "Validation of skill in advanced laptop component troubleshooting, heat dissipation upgrades, processor board soldering reflows, and electronic equipment safety."
  },
  {
    id: "cert_3",
    title: "Network Infrastructure Routing Certification (Sample Placeholder)",
    issuer: "[Your Issuing Authority - Edit inside /src/data/certificates.ts]",
    issueDate: "July 2024 (Sample)",
    
    // Replace this certificate image inside /assets/certificates/placeholders/cert_3.jpg
    image: "/assets/certificates/placeholders/cert_3.jpg",
    credentialUrl: "#" /* Replace with your verification link inside /src/data/certificates.ts */,
    description: "Rigorous standards testing of local area connections (LAN), ethernet crimping protocols, server rack trunk organization, and smart managed switch configurations."
  },
  {
    id: "cert_4",
    title: "Operating Systems Configuration Specialist (Sample Placeholder)",
    issuer: "[Your Issuing Authority - Edit inside /src/data/certificates.ts]",
    issueDate: "February 2025 (Sample)",
    
    // Replace this certificate image inside /assets/certificates/placeholders/cert_4.jpg
    image: "/assets/certificates/placeholders/cert_4.jpg",
    credentialUrl: "#" /* Replace with your verification link inside /src/data/certificates.ts */,
    description: "Comprehensive qualification in administrative operating system deployment, registry management, kernel tweaking, and advanced group policy deployment."
  }
];
