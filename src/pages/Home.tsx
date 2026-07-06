/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import LucideIcon from "../components/LucideIcon";
import Button from "../components/Button";
import Card from "../components/Card";
import SectionTitle from "../components/SectionTitle";
import { profileData } from "../data/profile";
import { projectsData } from "../data/projects";
import { galleryData } from "../data/gallery";
import { videosData } from "../data/videos";
import { servicesData } from "../data/services";
import { Project, GalleryItem, VideoItem, Service } from "../types";

interface HomeProps {
  onPageChange: (pageId: string) => void;
  onOpenProjectDetails: (project: Project) => void;
  onOpenLightbox: (images: string[], index: number, titles: string[], descs: string[], cats: string[]) => void;
  onOpenVideoPlayer: (video: VideoItem) => void;
}

export default function Home({
  onPageChange,
  onOpenProjectDetails,
  onOpenLightbox,
  onOpenVideoPlayer,
}: HomeProps) {
  
  // 1. TYPING ANIMATION ENGINE
  const [typedText, setTypedText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const currentTitle = profileData.typingTitles[titleIndex] || "";
  
  useEffect(() => {
    if (profileData.typingTitles.length === 0) return;
    
    let timer: NodeJS.Timeout;
    const typingSpeed = isDeleting ? 40 : 100;
    
    if (!isDeleting && typedText === currentTitle) {
      // Pause before deleting
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % profileData.typingTitles.length);
    } else {
      timer = setTimeout(() => {
        setTypedText((prev) =>
          isDeleting
            ? prev.substring(0, prev.length - 1)
            : currentTitle.substring(0, prev.length + 1)
        );
      }, typingSpeed);
    }
    
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, titleIndex, currentTitle]);

  // Handle lightbox open helper
  const handleImageClick = (item: GalleryItem, index: number, items: GalleryItem[]) => {
    const urls = items.map(g => g.url);
    const titles = items.map(g => g.title);
    const descs = items.map(g => g.description);
    const cats = items.map(g => g.category);
    onOpenLightbox(urls, index, titles, descs, cats);
  };

  return (
    <div className="flex flex-col gap-24 relative overflow-hidden">
      
      {/* BACKGROUND DECORATIONS */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/[0.03] rounded-full blur-3xl pointer-events-none animate-pulse duration-[8000ms]" />
      <div className="absolute top-[80vh] -left-20 w-80 h-80 bg-purple-500/[0.03] rounded-full blur-3xl pointer-events-none animate-pulse duration-[10000ms]" />

      {/* ==========================================
         1. HERO SECTION
         ========================================== */}
      <section className="min-h-[85vh] flex flex-col-reverse lg:flex-row items-center justify-between gap-12 pt-28">
        
        {/* TEXT COLUMN */}
        <div className="flex-1 flex flex-col items-start gap-6 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full w-fit shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-white/70 font-bold font-mono">Available for hire</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-sans font-extrabold text-white tracking-tighter leading-[0.95] max-w-2xl">
            {profileData.name ? (
              <>
                {profileData.name.split(" ")[0]} <br/>
                <span className="text-white/40 italic font-serif font-light">
                  {profileData.name.split(" ").slice(1).join(" ")}
                </span>
              </>
            ) : (
              <>
                Systems <br/>
                <span className="text-white/40 italic font-serif font-light">
                  & Creative
                </span>
              </>
            )}
            <br/>Abraham Ankwai.
          </h1>

          {profileData.typingTitles.length > 0 && (
            <div className="h-10 md:h-12 flex items-center">
              <p className="text-lg md:text-xl font-mono text-white/60">
                Specialized in <span className="text-white font-semibold border-r-2 border-white pr-1.5 animate-pulse">{typedText}</span>
              </p>
            </div>
          )}

          {(profileData.shortIntro || profileData.bio) && (
            <p className="text-sm md:text-base text-white/50 leading-relaxed font-sans max-w-xl">
              {profileData.shortIntro} {profileData.bio}
            </p>
          )}

          {/* Call-to-actions row */}
          <div className="flex flex-wrap gap-3 mt-4">
            <Button
              onClick={() => onPageChange("projects")}
              variant="primary"
              iconName="Code"
            >
              View Projects
            </Button>
            <Button
              onClick={() => onPageChange("gallery")}
              variant="outline"
              iconName="Camera"
            >
              View Gallery
            </Button>
            <Button
              onClick={() => onPageChange("videos")}
              variant="glass"
              iconName="Video"
            >
              Watch Videos
            </Button>
            <Button
              onClick={() => onPageChange("contact")}
              variant="secondary"
              iconName="Mail"
            >
              Contact Me
            </Button>
          </div>
        </div>

        {/* IMAGE PORTRAIT COLUMN */}
        <div className="flex-shrink-0 w-72 h-72 md:w-96 md:h-96 relative group">
          {/* Subtle back glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
          
          <div className="w-full h-full rounded-3xl overflow-hidden border border-white/10 bg-white/5 p-2.5 relative z-10 shadow-2xl transition-all duration-300 group-hover:border-white/20">
            {profileData.avatar ? (
              <img
                src={profileData.avatar}
                alt={profileData.name || "Portrait"}
                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.01]"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="w-full h-full bg-white/[0.02] rounded-2xl border border-dashed border-white/10 flex flex-col items-center justify-center p-6 text-center text-white/40">
                <LucideIcon name="Camera" size={32} className="mb-2" />
                <span className="text-xs font-mono">
                  {/* Fill in your photo URL inside avatar in src/data/profile.ts */}
                  Add profile image in src/data/profile.ts
                </span>
              </div>
            )}
          </div>
        </div>

      </section>

      {/* ==========================================
         2. STATISTICS ENGINE - Rendered only if positive values exist
         ========================================== */}
      {(profileData.stats.projectsCompleted > 0 || profileData.stats.yearsOfLearning > 0) && (
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Projects Completed", value: profileData.stats.projectsCompleted, icon: "Code", color: "text-white" },
            { label: "Technical Skills", value: profileData.stats.technicalSkills, icon: "Cpu", color: "text-white" },
            { label: "Creative Skills", value: profileData.stats.creativeSkills, icon: "PenTool", color: "text-white" },
            { label: "Years of Learning", value: profileData.stats.yearsOfLearning, icon: "Briefcase", color: "text-white" },
          ].map((stat) => (
            <Card key={stat.label} hoverEffect={true} className="flex flex-col items-center justify-center text-center p-6 relative">
              <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 mb-3.5 ${stat.color}`}>
                <LucideIcon name={stat.icon} size={16} />
              </div>
              <span className="text-3xl md:text-4xl font-sans font-extrabold text-white tracking-tighter">
                {stat.value}+
              </span>
              <span className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest mt-1.5">
                {stat.label}
              </span>
            </Card>
          ))}
        </section>
      )}

      {/* ==========================================
         3. ABOUT PREVIEW
         ========================================== */}
      {(profileData.longBio || profileData.title) && (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="px-3 py-1 text-[10px] font-mono font-bold tracking-widest text-white/70 uppercase bg-white/5 rounded-full border border-white/10 mb-4 inline-block shadow-sm">
              Who am I
            </span>
            <h2 className="text-3xl md:text-4xl font-sans font-extrabold tracking-tighter text-white mb-6">
              Pioneering a unified aesthetic in engineering & design.
            </h2>
            <p className="text-sm md:text-base text-white/50 leading-relaxed font-sans mb-6">
              {profileData.longBio}
            </p>

            <Button onClick={() => onPageChange("about")} variant="outline" iconName="Users">
              Read My Full Story
            </Button>
          </div>

          <Card hoverEffect={true} className="p-8 border-white/10 bg-white/5">
            <h3 className="text-lg font-sans font-bold text-white mb-4">Core Principles</h3>
            <ul className="flex flex-col gap-4">
              {[
                { title: "Architectural Precision", desc: "No guess-work. Every component is structured to achieve strict efficiency boundaries." },
                { title: "Story-Driven Visuals", desc: "Content should evoke emotion. Photos, branding, and video cuts tell a targeted narrative." },
                { title: "Extreme Customization", desc: "Clean codebase architectures designed so others can build on top of them seamlessly." },
              ].map((princ, i) => (
                <li key={i} className="flex gap-4">
                  <span className="w-6 h-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/70 flex-shrink-0 font-mono text-xs font-bold">
                    {i + 1}
                  </span>
                  <div>
                    <h4 className="text-sm font-sans font-semibold text-white">{princ.title}</h4>
                    <p className="text-xs font-sans text-white/50 mt-1 leading-relaxed">{princ.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        </section>
      )}

      {/* ==========================================
         4. FEATURED PROJECTS
         ========================================== */}
      <section>
        <SectionTitle
          badge="Latest Work"
          title="Featured Projects"
          subtitle="A showcase of hardware diagnostics, computer engineering configurations, and design systems."
        />

        {projectsData.length === 0 ? (
          <div className="p-12 border border-dashed border-white/10 rounded-3xl bg-white/[0.01] text-center font-sans max-w-lg mx-auto">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 border border-white/10 mb-3 mx-auto">
              <LucideIcon name="Code" size={16} />
            </div>
            <h4 className="text-sm font-semibold text-white/80 mb-1">Projects Showcase Empty</h4>
            <p className="text-xs text-white/40 max-w-sm mx-auto">
              {/* To display your work, populate the projectsData array inside src/data/projects.ts */}
              No projects have been added to your showcase yet.
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projectsData.slice(0, 2).map((proj) => (
                <Card key={proj.id} className="flex flex-col p-0 overflow-hidden border-white/10 group">
                  {/* Cover Image Container */}
                  <div className="relative aspect-video overflow-hidden bg-black">
                    {proj.coverImage ? (
                      <img
                        src={proj.coverImage}
                        alt={proj.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-white/5 text-white/40">
                        <LucideIcon name="Camera" size={24} />
                      </div>
                    )}
                    <span className="absolute top-4 left-4 px-2.5 py-1 text-[10px] font-mono tracking-widest text-white/80 bg-black/80 backdrop-blur rounded-full border border-white/10">
                      {proj.category}
                    </span>
                  </div>

                  {/* Text Padding */}
                  <div className="p-6 md:p-8 flex-1 flex flex-col justify-between gap-6">
                    <div>
                      <h3 className="text-xl md:text-2xl font-sans font-bold text-white tracking-tight mb-2 group-hover:text-white transition">
                        {proj.title}
                      </h3>
                      <p className="text-sm text-white/50 font-sans leading-relaxed line-clamp-3">
                        {proj.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {proj.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="px-2 py-0.5 text-[10px] font-mono text-white/60 bg-white/5 border border-white/10 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Buttons Actions */}
                    <div className="flex items-center gap-2 border-t border-white/10 pt-6">
                      <Button
                        onClick={() => onOpenProjectDetails(proj)}
                        variant="glass"
                        size="sm"
                        iconName="Code"
                      >
                        Details
                      </Button>
                      
                      {proj.liveUrl && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center text-xs font-semibold text-white/60 hover:text-white ml-2 transition cursor-pointer"
                        >
                          Demo <LucideIcon name="Layers" size={12} className="ml-1 rotate-45" />
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <Button onClick={() => onPageChange("projects")} variant="outline">
                Browse All Projects ({projectsData.length})
              </Button>
            </div>
          </>
        )}
      </section>

      {/* ==========================================
         4.5. FEATURED SERVICES
         ========================================== */}
      <section>
        <SectionTitle
          badge="Specialties"
          title="Featured Services"
          subtitle="High-quality professional diagnostics, preventative hardware care, and creative layout designs."
        />

        {servicesData.length === 0 ? (
          <div className="p-12 border border-dashed border-white/10 rounded-3xl bg-white/[0.01] text-center font-sans max-w-lg mx-auto">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 border border-white/10 mb-3 mx-auto">
              <LucideIcon name="Settings" size={16} />
            </div>
            <h4 className="text-sm font-semibold text-white/80 mb-1">Services List Empty</h4>
            <p className="text-xs text-white/40 max-w-sm mx-auto">
              No professional services added to your portfolio yet.
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {servicesData.slice(0, 4).map((service) => (
                <Card
                  key={service.id}
                  hoverEffect={true}
                  onClick={() => onPageChange("services")}
                  className="flex flex-col p-6 border-white/10 bg-white/5 cursor-pointer h-full justify-between"
                >
                  <div className="flex flex-col gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                      <LucideIcon name={service.icon} size={18} />
                    </div>
                    <div>
                      <h3 className="text-base font-sans font-bold text-white tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-xs text-white/50 font-sans leading-relaxed mt-2 line-clamp-3">
                        {service.shortDescription}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-white/40">
                    <span>{service.pricingPlaceholder}</span>
                    <span className="text-white/60 hover:text-white transition flex items-center gap-0.5">
                      View details <LucideIcon name="Layers" size={10} className="rotate-45" />
                    </span>
                  </div>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <Button onClick={() => onPageChange("services")} variant="outline">
                View All Services ({servicesData.length})
              </Button>
            </div>
          </>
        )}
      </section>

      {/* ==========================================
         5. FEATURED GALLERY
         ========================================== */}
      <section>
        <SectionTitle
          badge="Visual Arts"
          title="Featured Gallery"
          subtitle="A curated selection of graphics, illustrations, and digital photography."
        />

        {galleryData.length === 0 ? (
          <div className="p-12 border border-dashed border-white/10 rounded-3xl bg-white/[0.01] text-center font-sans max-w-lg mx-auto">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 border border-white/10 mb-3 mx-auto">
              <LucideIcon name="Camera" size={16} />
            </div>
            <h4 className="text-sm font-semibold text-white/80 mb-1">Gallery Showcase Empty</h4>
            <p className="text-xs text-white/40 max-w-sm mx-auto">
              {/* To display your designs or photographs, populate the galleryData array inside src/data/gallery.ts */}
              No design assets or street snaps added to your gallery yet.
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {galleryData.slice(0, 4).map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => handleImageClick(item, index, galleryData)}
                  className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 group cursor-zoom-in"
                >
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Gradient text cover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                    <span className="text-[9px] font-mono text-white/70 uppercase tracking-widest">{item.category}</span>
                    <h4 className="text-xs font-sans font-bold text-white line-clamp-1 mt-0.5">{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <Button onClick={() => onPageChange("gallery")} variant="outline">
                Open Full Gallery
              </Button>
            </div>
          </>
        )}
      </section>

      {/* ==========================================
         6. FEATURED VIDEOS
         ========================================== */}
      <section>
        <SectionTitle
          badge="Cinematics"
          title="Featured Videos"
          subtitle="Cinematics, video edits, and post-production compilations."
        />

        {videosData.length === 0 ? (
          <div className="p-12 border border-dashed border-white/10 rounded-3xl bg-white/[0.01] text-center font-sans max-w-lg mx-auto">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 border border-white/10 mb-3 mx-auto">
              <LucideIcon name="Video" size={16} />
            </div>
            <h4 className="text-sm font-semibold text-white/80 mb-1">Videos Showcase Empty</h4>
            <p className="text-xs text-white/40 max-w-sm mx-auto">
              {/* To display your video edits, populate the videosData array inside src/data/videos.ts */}
              No video productions or cinematic works added yet.
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videosData.slice(0, 2).map((item) => (
                <Card
                  key={item.id}
                  onClick={() => onOpenVideoPlayer(item)}
                  className="p-0 overflow-hidden border-white/10 group relative cursor-pointer"
                >
                  {/* Thumbnail Play Box */}
                  <div className="relative aspect-video overflow-hidden bg-black">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    />
                    
                    {/* Duration Tag */}
                    <span className="absolute bottom-4 right-4 bg-black/80 backdrop-blur text-[10px] font-mono font-medium text-white px-2 py-0.5 rounded">
                      {item.duration}
                    </span>

                    {/* Central Play Trigger */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition">
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black shadow-lg shadow-white/10 scale-100 group-hover:scale-110 transition-transform">
                        <LucideIcon name="Play" size={16} className="ml-0.5 text-black" />
                      </div>
                    </div>
                  </div>

                  {/* Video titles info */}
                  <div className="p-6">
                    <span className="text-[10px] font-mono tracking-widest text-white/50 uppercase">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-sans font-bold text-white mt-1 mb-2 leading-tight group-hover:text-white transition-all">
                      {item.title}
                    </h3>
                    <p className="text-xs text-white/50 font-sans line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <Button onClick={() => onPageChange("videos")} variant="outline">
                Browse All Videos ({videosData.length})
              </Button>
            </div>
          </>
        )}
      </section>

      {/* ==========================================
         7. CALL TO ACTION (CTA)
         ========================================== */}
      <section className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 p-8 md:p-16 text-center">
        {/* Background glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] via-transparent to-white/[0.02] pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
          <span className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
            <LucideIcon name="Lightbulb" size={20} className="animate-bounce" />
          </span>

          <h2 className="text-3xl md:text-4xl font-sans font-extrabold text-white tracking-tighter">
            Have a project in mind? Let's build it together.
          </h2>

          <p className="text-sm md:text-base text-white/50 font-sans leading-relaxed">
            Whether you need hardware maintenance, computer troubleshooting, professional photography, or an administrative setup, my systems are ready to deploy.
          </p>

          <Button
            onClick={() => onPageChange("contact")}
            variant="primary"
            size="lg"
            iconName="Mail"
          >
            Get In Touch
          </Button>
        </div>
      </section>

    </div>
  );
}
