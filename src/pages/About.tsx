/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import LucideIcon from "../components/LucideIcon";
import Button from "../components/Button";
import Card from "../components/Card";
import SectionTitle from "../components/SectionTitle";
import { profileData } from "../data/profile";

interface AboutProps {
  onPageChange: (pageId: string) => void;
}

export default function About({ onPageChange }: AboutProps) {
  
  const handleDownloadCV = () => {
    // In production, direct to your real PDF document path
    if (profileData.cvUrl && profileData.cvUrl !== "#") {
      window.location.href = profileData.cvUrl;
    }
  };

  return (
    <div className="pt-24 flex flex-col gap-16 relative">
      
      {/* Background glow */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/[0.02] rounded-full blur-3xl pointer-events-none" />

      {/* Title */}
      <SectionTitle
        badge="My Story"
        title="About Me"
        subtitle="A closer look at my professional journey, mission statement, and core credentials."
      />

      {/* ==========================================
         1. BIOGRAPHY & IMAGE GRID
         ========================================== */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Profile Image (4 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 bg-[#070708] p-2 shadow-2xl">
            {profileData.avatar ? (
              <img
                src={profileData.avatar}
                alt={profileData.name || "Profile"}
                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-white/5 border border-dashed border-white/10 rounded-2xl p-6 text-center text-white/40 font-sans">
                <LucideIcon name="Camera" size={24} className="mb-2" />
                <span className="text-xs">
                  {/* Add your profile image path in src/data/profile.ts to display a photo here */}
                  Photo Placeholder
                </span>
              </div>
            )}
          </div>

          {/* Quick Stats Grid - Only shown if real statistics are configured */}
          {(profileData.stats.projectsCompleted > 0 || profileData.stats.yearsOfLearning > 0) && (
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-center shadow-sm">
                <span className="font-mono text-2xl font-bold text-white block">{profileData.stats.projectsCompleted}+</span>
                <span className="text-[10px] font-mono font-medium text-white/40 uppercase tracking-widest">Completed Projects</span>
              </div>
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-center shadow-sm">
                <span className="font-mono text-2xl font-bold text-white block">{profileData.stats.yearsOfLearning}+</span>
                <span className="text-[10px] font-mono font-medium text-white/40 uppercase tracking-widest">Years Experience</span>
              </div>
            </div>
          )}
        </div>

        {/* Bio text (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <h3 className="text-2xl font-sans font-extrabold text-white tracking-tighter leading-tight">
            {profileData.title || "My Profile"}
          </h3>
          
          {profileData.longBio ? (
            <p className="text-sm md:text-base text-white/50 leading-relaxed font-sans">
              {profileData.longBio}
            </p>
          ) : (
            <div className="p-6 border border-dashed border-white/10 rounded-2xl bg-white/[0.01] text-white/40 text-center font-sans">
              <span className="text-xs">
                {/* Populate your detailed biography inside longBio in src/data/profile.ts */}
                Biography empty.
              </span>
            </div>
          )}

          {profileData.careerObjective && (
            <div className="border-t border-white/5 pt-6 flex flex-col gap-4">
              <h4 className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest">
                Career Objectives
              </h4>
              <p className="text-sm text-white/70 leading-relaxed font-sans">
                {profileData.careerObjective}
              </p>
            </div>
          )}

          <div className="flex flex-wrap gap-4 mt-4">
            {profileData.cvUrl && profileData.cvUrl !== "#" && (
              <Button onClick={handleDownloadCV} variant="primary" iconName="Download">
                Download CV (PDF)
              </Button>
            )}
            <Button onClick={() => onPageChange("contact")} variant="outline" iconName="Mail">
              Contact Me
            </Button>
          </div>
        </div>

      </section>

      {/* ==========================================
         2. MISSION & VISION BENTO - Only rendered if configured
         ========================================== */}
      {(profileData.mission || profileData.vision) && (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {profileData.mission && (
            <Card hoverEffect={true} className="p-8 relative">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white flex items-center justify-center mb-4">
                <LucideIcon name="Lightbulb" size={18} />
              </div>
              <h3 className="text-xl font-sans font-bold text-white mb-3">Our Mission</h3>
              <p className="text-sm text-white/50 leading-relaxed font-sans">
                {profileData.mission}
              </p>
            </Card>
          )}

          {profileData.vision && (
            <Card hoverEffect={true} className="p-8 relative">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white flex items-center justify-center mb-4">
                <LucideIcon name="Layers" size={18} />
              </div>
              <h3 className="text-xl font-sans font-bold text-white mb-3">Our Vision</h3>
              <p className="text-sm text-white/50 leading-relaxed font-sans">
                {profileData.vision}
              </p>
            </Card>
          )}
        </section>
      )}

      {/* ==========================================
         3. EDUCATION CHRONOLOGY
         ========================================== */}
      <section className="border-t border-white/5 pt-16">
        <div className="max-w-2xl">
          <span className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest block mb-2">Timeline</span>
          <h3 className="text-2xl md:text-3xl font-sans font-extrabold text-white tracking-tighter mb-8">
            Academic Background & Certifications
          </h3>
        </div>

        {profileData.education.length === 0 ? (
          <div className="p-12 border border-dashed border-white/10 rounded-3xl bg-white/[0.01] text-center max-w-lg mx-auto font-sans">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 border border-white/10 mb-3 mx-auto">
              <LucideIcon name="GraduationCap" size={16} />
            </div>
            <h4 className="text-sm font-semibold text-white/80 mb-1">Academic Timeline Empty</h4>
            <p className="text-xs text-white/40 max-w-sm mx-auto">
              {/* You can add your academic qualifications inside the education array in src/data/profile.ts */}
              No qualifications or education history added yet.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-6 ml-4 border-l border-white/10 pl-6 md:pl-10 relative">
            {profileData.education.map((edu) => (
              <div key={edu.id} className="relative group">
                {/* Dot indicator */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 border-white/10 bg-black group-hover:border-white transition-colors" />
                
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-xs font-semibold text-white/60">{edu.period}</span>
                  <h4 className="text-lg font-sans font-bold text-white group-hover:text-white group-hover:underline decoration-white/20 underline-offset-2 transition">
                    {edu.degree}
                  </h4>
                  <p className="text-sm font-sans font-medium text-white/60">
                    {edu.institution}
                  </p>
                  <p className="text-xs md:text-sm text-white/40 font-sans leading-relaxed mt-1 max-w-2xl">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ==========================================
         4. PERSONAL INTERESTS TAG CLOUD
         ========================================== */}
      <section className="border-t border-white/5 pt-16">
        <h3 className="text-xl font-sans font-extrabold text-white tracking-tighter mb-6">
          Personal Interests & Endeavors
        </h3>

        {profileData.interests.length === 0 ? (
          <div className="p-8 border border-dashed border-white/10 rounded-3xl bg-white/[0.01] text-center max-w-lg mx-auto font-sans">
            <span className="text-xs text-white/40 block">
              {/* Add your interests/hobbies inside the interests array in src/data/profile.ts */}
              No interests added yet.
            </span>
          </div>
        ) : (
          <div className="flex flex-wrap gap-2.5">
            {profileData.interests.map((interest) => (
              <span
                key={interest}
                className="px-4 py-2 text-xs font-mono font-semibold text-white/70 bg-white/5 border border-white/10 rounded-2xl hover:border-white/20 hover:text-white transition duration-300 shadow-md select-none"
              >
                # {interest}
              </span>
            ))}
          </div>
        )}
      </section>

    </div>
  );
}
