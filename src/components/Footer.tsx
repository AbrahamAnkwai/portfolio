/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import LucideIcon from "./LucideIcon";
import { siteSettings } from "../data/settings";
import { socialsData } from "../data/socials";

interface FooterProps {
  onPageChange: (pageId: string) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    setErrorMsg("");
    setIsSubscribed(true);
    setNewsletterEmail("");
  };

  const handleQuickLink = (pageId: string) => {
    onPageChange(pageId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-16 pb-12 mt-20 relative overflow-hidden">
      
      {/* Decorative back-glow */}
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/[0.01] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        
        {/* COL 1: Brand & Bio */}
        <div className="flex flex-col gap-4">
          <div
            onClick={() => handleQuickLink("home")}
            className="flex items-center gap-2 cursor-pointer font-sans font-bold text-xl text-white tracking-tight group"
          >
            <span className="w-8 h-8 rounded-xl bg-white flex items-center justify-center shadow-lg shadow-white/10">
              <LucideIcon name="Cpu" size={14} className="text-black" />
            </span>
            <span>{siteSettings.brandName}</span>
          </div>
          <p className="text-xs font-sans text-white/50 leading-relaxed max-w-sm mt-2">
            Multi-disciplinary engineer and creative designer combining mathematical code accuracy with pristine cinematic storytelling.
          </p>

          {/* Social Row */}
          <div className="flex items-center gap-2 mt-4">
            {socialsData.map((soc) => (
              <a
                key={soc.id}
                href={soc.url}
                target="_blank"
                rel="noreferrer"
                className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all bg-white/5 border border-white/10 hover:border-white/20 text-white/75 hover:text-white`}
                title={soc.name}
              >
                <LucideIcon name={soc.icon} size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* COL 2: Quick Navigation */}
        <div className="flex flex-col gap-4">
          <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/50">
            Navigation
          </h4>
          <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
            {siteSettings.pages.map((p) => (
              <li key={p.id}>
                <button
                  onClick={() => handleQuickLink(p.id)}
                  className="text-xs font-sans text-white/60 hover:text-white hover:translate-x-0.5 transition-all text-left cursor-pointer"
                >
                  {p.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* COL 3: Professional Contacts */}
        <div className="flex flex-col gap-4">
          <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/50">
            Get In Touch
          </h4>
          <ul className="flex flex-col gap-3">
            <li className="flex items-start gap-2.5 text-xs text-white/60">
              <LucideIcon name="Mail" size={14} className="text-white/40 mt-0.5" />
              <span className="font-mono">himab316@gmail.com</span>
            </li>
            <li className="flex items-start gap-2.5 text-xs text-white/60">
              <LucideIcon name="PhoneCall" size={14} className="text-white/40 mt-0.5" />
              <span className="font-mono">+1 (555) 019-2834</span>
            </li>
            <li className="flex items-start gap-2.5 text-xs text-white/60">
              <LucideIcon name="MapPin" size={14} className="text-white/40 mt-0.5" />
              <span>San Francisco, CA, USA</span>
            </li>
          </ul>
        </div>

        {/* COL 4: Newsletter */}
        <div className="flex flex-col gap-4">
          <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/50">
            Newsletter
          </h4>
          <p className="text-xs font-sans text-white/50 leading-relaxed">
            Subscribe to receive insights on system performance, design systems, and cinematic production.
          </p>

          <form onSubmit={handleSubscribe} className="flex flex-col gap-2 mt-2">
            {isSubscribed ? (
              <div className="py-2.5 px-4 bg-white/5 border border-white/10 text-white rounded-xl text-xs font-sans font-medium flex items-center gap-2">
                <LucideIcon name="Wrench" size={12} /> {/* success indicator */}
                Thank you for subscribing!
              </div>
            ) : (
              <>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs font-sans text-white placeholder-white/25 focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/10"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-white hover:bg-white/95 text-black rounded-xl text-xs font-sans font-semibold transition cursor-pointer"
                  >
                    Join
                  </button>
                </div>
                {errorMsg && (
                  <p className="text-[10px] font-sans text-red-400 mt-1">{errorMsg}</p>
                )}
              </>
            )}
          </form>
        </div>

      </div>

      {/* FOOTER ROW */}
      <div className="max-w-7xl mx-auto px-6 border-t border-white/5 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <p className="text-xs font-sans text-white/40">
          {siteSettings.copyright}
        </p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group text-xs font-mono text-white/50 hover:text-white flex items-center gap-1.5 transition cursor-pointer"
        >
          BACK TO TOP
          <LucideIcon name="Layers" size={12} className="group-hover:-translate-y-0.5 transition-transform" /> {/* arrow up replacement */}
        </button>
      </div>

    </footer>
  );
}
