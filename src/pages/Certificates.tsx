/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import LucideIcon from "../components/LucideIcon";
import Card from "../components/Card";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import ImageViewer from "../components/ImageViewer";
import { certificatesData } from "../data/certificates";
import { CertificateItem } from "../types";

export default function Certificates() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const handleCertificateClick = (cert: CertificateItem) => {
    const idx = certificatesData.findIndex((c) => c.id === cert.id);
    if (idx !== -1) {
      setActiveIdx(idx);
    }
  };

  return (
    <div className="pt-24 flex flex-col gap-12 relative">
      
      {/* Background glow */}
      <div className="absolute top-40 right-10 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Section Title */}
      <SectionTitle
        badge="Credentials"
        title="Professional Certifications"
        subtitle="Explore my validated certifications in computer systems engineering, cloud architecture, cinematic coloring, and brand layouts."
      />

      {/* CERTIFICATES DISPLAY GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certificatesData.map((cert) => (
          <Card
            key={cert.id}
            onClick={() => handleCertificateClick(cert)}
            className="flex flex-col md:flex-row gap-6 p-6 h-full items-start group cursor-pointer border-gray-900"
          >
            {/* Visual Thumbnail */}
            <div className="relative w-full md:w-40 aspect-video md:aspect-[4/3] rounded-xl overflow-hidden bg-gray-950 flex-shrink-0 border border-gray-900/60 shadow-md">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />
              
              {/* Eye zoom icon in the corner */}
              <div className="absolute bottom-2 right-2 w-7 h-7 rounded-lg bg-black/80 flex items-center justify-center text-gray-400 group-hover:text-white transition">
                <LucideIcon name="Layers" size={12} /> {/* View indicator fallback */}
              </div>
            </div>

            {/* Certificate info content */}
            <div className="flex-1 flex flex-col justify-between h-full gap-4">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-purple-400 uppercase">
                  {cert.issuer}
                </span>
                
                <h3 className="text-lg font-sans font-bold text-white tracking-tight leading-snug mt-1 mb-2 group-hover:text-purple-300 transition-colors">
                  {cert.title}
                </h3>
                
                <p className="text-xs text-gray-400 font-sans leading-relaxed line-clamp-2">
                  {cert.description}
                </p>
              </div>

              {/* Verified links */}
              <div className="flex items-center justify-between border-t border-gray-900/40 pt-3">
                <span className="font-mono text-[9px] text-gray-500 uppercase">
                  Issued: {cert.issueDate}
                </span>

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()} // Stop bubbling trigger to lightbox
                    className="inline-flex items-center text-[10px] font-mono font-semibold text-purple-400 hover:text-purple-300 transition cursor-pointer"
                  >
                    VERIFY KEY <LucideIcon name="Layers" size={10} className="ml-1.5 rotate-45" /> {/* external icon */}
                  </a>
                )}
              </div>
            </div>

          </Card>
        ))}
      </div>

      {/* ==========================================
         FULLSCREEN CERTIFICATE LIGHTBOX VIEWER
         ========================================== */}
      <ImageViewer
        isOpen={activeIdx !== null}
        onClose={() => setActiveIdx(null)}
        images={certificatesData.map((c) => c.image)}
        currentIndex={activeIdx || 0}
        titles={certificatesData.map((c) => c.title)}
        descriptions={certificatesData.map((c) => `${c.issuer} — ${c.description}`)}
        categories={certificatesData.map((c) => `CREDENTIAL VERIFIED: ${c.issueDate}`)}
        onIndexChange={setActiveIdx}
      />

    </div>
  );
}
