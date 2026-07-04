/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import LucideIcon from "../components/LucideIcon";
import Card from "../components/Card";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import { profileData } from "../data/profile";
import { socialsData } from "../data/socials";

interface ContactProps {
  onAddToast: (type: "success" | "error" | "info", message: string) => void;
}

export default function Contact({ onAddToast }: ContactProps) {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSent, setFormSent] = useState(false);

  // Handle Form Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Client-Side Validations
    if (!formData.name.trim()) {
      onAddToast("error", "Name field is required.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      onAddToast("error", "Please provide a valid email address.");
      return;
    }
    if (!formData.subject.trim()) {
      onAddToast("error", "Subject field is required.");
      return;
    }
    if (!formData.message.trim()) {
      onAddToast("error", "Message field is required.");
      return;
    }

    // 2. Simulated submission flow
    setIsSubmitting(true);
    onAddToast("info", "Establishing secure communication...");

    setTimeout(() => {
      setIsSubmitting(false);
      setFormSent(true);
      const responder = profileData.name || "I";
      onAddToast("success", `Message received! ${responder} will contact you shortly.`);
      
      // Reset inputs
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1800);
  };

  return (
    <div className="pt-24 flex flex-col gap-16 relative">
      
      {/* Background glow */}
      <div className="absolute top-40 right-10 w-96 h-96 bg-blue-500/[0.02] rounded-full blur-3xl pointer-events-none" />

      {/* Section Title */}
      <SectionTitle
        badge="Inquiries"
        title="Get In Touch"
        subtitle="Want to discuss computer systems engineering, troubleshooting diagnostics, or design layouts? Send me a message!"
      />

      {/* TWO COLUMNS: Contact Methods (left) & Contact Form (right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* LEFT COLUMN (5 Cols): Methods & Socials */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-sans font-bold text-white tracking-tight">
              Contact Channels
            </h3>
            <p className="text-xs md:text-sm text-white/50 font-sans leading-relaxed">
              Have an urgent requirement or a direct project briefing? Reach out directly via these channels:
            </p>
          </div>

          {/* Quick Cards list */}
          <div className="flex flex-col gap-4">
            {[
              { icon: "Mail", title: "Corporate Email", value: profileData.email, href: `mailto:${profileData.email}`, show: !!profileData.email },
              { icon: "PhoneCall", title: "Direct Contact Line", value: profileData.phone, href: `tel:${profileData.phone}`, show: !!profileData.phone },
              { icon: "MapPin", title: "Operational Headquarters", value: profileData.location, href: "#", show: !!profileData.location },
            ].filter(item => item.show).map((chan) => (
              <a
                key={chan.title}
                href={chan.href}
                className="block group"
              >
                <Card hoverEffect={true} className="flex items-center gap-4 p-4 border-white/10 bg-white/5">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white flex-shrink-0 group-hover:scale-105 transition-all">
                    <LucideIcon name={chan.icon} size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold text-white/40 uppercase tracking-widest">
                      {chan.title}
                    </h4>
                    <p className="text-sm font-sans font-bold text-white mt-0.5 group-hover:text-white transition-colors">
                      {chan.value}
                    </p>
                  </div>
                </Card>
              </a>
            ))}
          </div>

          {/* Socials Link Grid */}
          {socialsData.some(soc => soc.url) && (
            <div className="flex flex-col gap-4 border-t border-white/5 pt-6">
              <h4 className="text-xs font-mono font-bold text-white/50 uppercase tracking-widest">
                Professional Social Networks
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {socialsData.filter(soc => soc.url).map((soc) => (
                  <a
                    key={soc.id}
                    href={soc.url}
                    target="_blank"
                    rel="noreferrer"
                    className="block group"
                  >
                    <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10 group-hover:border-white/20 transition-all duration-300">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${soc.bgColorClass}`}>
                        <LucideIcon name={soc.icon} size={14} />
                      </div>
                      <span className="text-xs font-sans font-semibold text-white/60 group-hover:text-white transition">
                        {soc.name}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* RIGHT COLUMN (7 Cols): Dynamic Contact Form */}
        <div className="lg:col-span-7">
          <Card hoverEffect={false} className="p-8 border-white/10 bg-white/5">
            <h3 className="text-xl font-sans font-extrabold text-white mb-6 tracking-tighter">
              Submit Project Briefing
            </h3>

            {formSent ? (
              <div className="flex flex-col items-center justify-center text-center py-10 gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                  <LucideIcon name="Layers" size={24} />
                </div>
                
                <h4 className="text-lg font-sans font-bold text-white tracking-tight">
                  Briefing Received Successfully!
                </h4>
                
                <p className="text-xs md:text-sm text-white/50 font-sans leading-relaxed max-w-sm">
                  Thank you for writing. {profileData.name || "I"} will reply within 12 operational hours.
                </p>

                <Button onClick={() => setFormSent(false)} variant="outline" size="sm" className="mt-2">
                  Submit Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="e.g. Jean Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      disabled={isSubmitting}
                      className="bg-[#0c0c0d] border border-white/10 rounded-xl px-4.5 py-3.5 text-xs font-sans text-white placeholder-white/20 focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/10 transition shadow-inner disabled:opacity-50"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="e.g. jean@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      disabled={isSubmitting}
                      className="bg-[#0c0c0d] border border-white/10 rounded-xl px-4.5 py-3.5 text-xs font-sans text-white placeholder-white/20 focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/10 transition shadow-inner disabled:opacity-50"
                    />
                  </div>
                </div>

                {/* Row 2: Subject */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest">
                    Subject / Project Category
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="e.g. Hardware Diagnostics / Graphic Layout"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    disabled={isSubmitting}
                    className="bg-[#0c0c0d] border border-white/10 rounded-xl px-4.5 py-3.5 text-xs font-sans text-white placeholder-white/20 focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/10 transition shadow-inner disabled:opacity-50"
                  />
                </div>

                {/* Row 3: Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest">
                    Message Detail
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Provide a summary of your requirements, timelines, or diagnostic query..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    disabled={isSubmitting}
                    className="bg-[#0c0c0d] border border-white/10 rounded-xl px-4.5 py-3.5 text-xs font-sans text-white placeholder-white/20 focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/10 transition shadow-inner resize-none disabled:opacity-50"
                  />
                </div>

                {/* Submit button */}
                <Button
                  type="submit"
                  variant="primary"
                  disabled={isSubmitting}
                  iconName="Mail"
                  className="w-full mt-2"
                >
                  {isSubmitting ? "Syncing details..." : "Send Message"}
                </Button>

              </form>
            )}
          </Card>
        </div>

      </div>

      {/* ==========================================
         EMBEDDED LOCATION MAP PLACEHOLDER
         ========================================== */}
      <section className="border-t border-white/5 pt-16">
        <h4 className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest mb-4">
          Headquarters Location Matrix
        </h4>
        
        {!profileData.location ? (
          <div className="p-12 border border-dashed border-white/10 rounded-3xl bg-white/[0.01] text-center font-sans max-w-lg mx-auto">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 border border-white/10 mb-3 mx-auto">
              <LucideIcon name="MapPin" size={16} />
            </div>
            <h4 className="text-sm font-semibold text-white/80 mb-1">Location Unconfigured</h4>
            <p className="text-xs text-white/40 max-w-sm mx-auto">
              {/* To display your map or operational area, configure the location field inside src/data/profile.ts */}
              No operational headquarters location has been set.
            </p>
          </div>
        ) : (
          /* Visual Map Backdrop Mock */
          <div className="relative aspect-video max-h-[360px] w-full rounded-2xl overflow-hidden border border-white/10 bg-[#070708] group">
            {/* Symmetrical dark background grid texture */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

            {/* Symmetrical rings around marker */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-64 h-64 border border-white/5 rounded-full animate-ping duration-3000" />
              <div className="absolute w-32 h-32 border border-white/10 rounded-full animate-pulse" />
              
              {/* Custom Marker Node */}
              <div className="relative flex flex-col items-center">
                <div className="w-12 h-12 rounded-2xl bg-white border border-white/10 flex items-center justify-center text-black shadow-xl shadow-white/5 scale-100 group-hover:scale-105 transition-transform duration-300">
                  <LucideIcon name="MapPin" size={18} className="animate-bounce text-black" />
                </div>
                <span className="mt-3 px-3 py-1 bg-black/90 border border-white/10 rounded-lg text-[10px] font-mono tracking-wider text-white/80 shadow">
                  {profileData.location}
                </span>
              </div>
            </div>

            {/* Top-left locator badge */}
            <div className="absolute top-4 left-4 p-3 bg-black/80 backdrop-blur border border-white/10 rounded-xl flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
              <span className="text-[10px] font-mono text-white/70 uppercase">OPERATIONAL REGION: {profileData.location}</span>
            </div>

          </div>
        )}
      </section>

    </div>
  );
}
