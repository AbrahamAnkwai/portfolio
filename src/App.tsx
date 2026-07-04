/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import LoadingScreen from "./components/LoadingScreen";
import Toast, { ToastMessage } from "./components/Toast";
import Modal from "./components/Modal";
import ImageViewer from "./components/ImageViewer";
import VideoPlayer from "./components/VideoPlayer";
import Button from "./components/Button";

// Views/Pages imports
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Gallery from "./pages/Gallery";
import Videos from "./pages/Videos";
import Experience from "./pages/Experience";
import Certificates from "./pages/Certificates";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import { Project, VideoItem } from "./types";
import { videosData } from "./data/videos";

export default function App() {
  const [activePage, setActivePage] = useState<string>("home");
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Global Modals State (triggered from Home or other parts)
  const [homeProject, setHomeProject] = useState<Project | null>(null);
  
  const [lightboxData, setLightboxData] = useState<{
    images: string[];
    index: number;
    titles: string[];
    descs: string[];
    cats: string[];
  } | null>(null);

  const [homeVideo, setHomeVideo] = useState<VideoItem | null>(null);

  // 1. TOAST NOTIFICATION HELPERS
  const handleAddToast = (type: "success" | "error" | "info", message: string) => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 7);
    setToasts((prev) => [...prev, { id, type, message }]);
  };

  const handleRemoveToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // 2. PAGE TRANSITION AND MOUNT RENDERING
  const renderPage = () => {
    switch (activePage) {
      case "home":
        return (
          <Home
            onPageChange={setActivePage}
            onOpenProjectDetails={setHomeProject}
            onOpenLightbox={(images, idx, titles, descs, cats) => 
              setLightboxData({ images, index: idx, titles, descs, cats })
            }
            onOpenVideoPlayer={setHomeVideo}
          />
        );
      case "about":
        return <About onPageChange={setActivePage} />;
      case "skills":
        return <Skills />;
      case "services":
        return <Services onPageChange={setActivePage} />;
      case "projects":
        return <Projects />;
      case "gallery":
        return <Gallery />;
      case "videos":
        return <Videos />;
      case "experience":
        return <Experience />;
      case "certificates":
        return <Certificates />;
      case "contact":
        return <Contact onAddToast={handleAddToast} />;
      default:
        return <NotFound onGoHome={() => setActivePage("home")} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#f5f5f7] relative flex flex-col justify-between overflow-x-hidden selection:bg-white/20 selection:text-white">
      {/* BACKGROUND AMBIENT GLOWS */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none select-none z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none select-none z-0" />

      {/* 1. VISUAL PRELOADER */}
      <LoadingScreen />

      {/* 2. TOAST SYSTEM INLET */}
      <Toast toasts={toasts} onRemove={handleRemoveToast} />

      {/* 3. STICKY NAVBAR NAVIGATION */}
      <Navbar activePage={activePage} onPageChange={setActivePage} />

      {/* 4. MAIN BODY WRAPPER */}
      <main className="flex-1 max-w-7xl mx-auto px-6 w-full pb-20 pt-10 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 5. SITE FOOTER */}
      <Footer onPageChange={setActivePage} />

      {/* 6. FLOATING SCROLL BACK TO TOP */}
      <ScrollToTop />

      {/* ==========================================
         GLOBAL MODALS LAYER (For Home Page Triggers)
         ========================================== */}

      {/* Project Details Modal (from Home) */}
      <Modal
        isOpen={homeProject !== null}
        onClose={() => setHomeProject(null)}
        title={homeProject?.title}
        size="xl"
      >
        {homeProject && (
          <div className="flex flex-col gap-8">
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <img
                src={homeProject.coverImage}
                alt={homeProject.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <span className="px-2.5 py-1 text-[10px] font-mono tracking-widest text-white/80 bg-white/10 border border-white/15 rounded-full backdrop-blur">
                  {homeProject.category}
                </span>
                <span className="font-mono text-xs text-white/60">
                  Completed: {homeProject.completionDate}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-mono font-bold text-white/50 uppercase tracking-widest">
                Case Study Overview
              </h4>
              <p className="text-sm md:text-base text-white/80 font-sans leading-relaxed">
                {homeProject.longDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/[0.02] p-5 rounded-2xl border border-white/10">
                <h5 className="text-sm font-sans font-bold text-white flex items-center gap-1.5 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  Key Challenge
                </h5>
                <p className="text-xs text-white/60 leading-relaxed font-sans">{homeProject.challenges}</p>
              </div>

              <div className="bg-white/[0.02] p-5 rounded-2xl border border-white/10">
                <h5 className="text-sm font-sans font-bold text-white flex items-center gap-1.5 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Engineered Solution
                </h5>
                <p className="text-xs text-white/60 leading-relaxed font-sans">{homeProject.solutions}</p>
              </div>
            </div>

            <div className="flex justify-end gap-3 border-t border-white/10 pt-6">
              <Button onClick={() => setHomeProject(null)} variant="outline">
                Close details
              </Button>
              {homeProject.liveUrl && (
                <a
                  href={homeProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-2xl bg-white text-black text-xs font-semibold hover:bg-gray-200 transition-all duration-300 active:scale-95 shadow"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        )}
      </Modal>

      {/* Fullscreen Lightbox Modal (from Home) */}
      {lightboxData && (
        <ImageViewer
          isOpen={lightboxData !== null}
          onClose={() => setLightboxData(null)}
          images={lightboxData.images}
          currentIndex={lightboxData.index}
          titles={lightboxData.titles}
          descriptions={lightboxData.descs}
          categories={lightboxData.cats}
          onIndexChange={(idx) => setLightboxData((prev) => prev ? { ...prev, index: idx } : null)}
        />
      )}

      {/* Fullscreen Video Player Modal (from Home) */}
      <Modal
        isOpen={homeVideo !== null}
        onClose={() => setHomeVideo(null)}
        size="xl"
      >
        {homeVideo && (
          <VideoPlayer
            video={homeVideo}
            relatedVideos={videosData.filter((v) => v.id !== homeVideo.id)}
            onSelectRelatedVideo={setHomeVideo}
            onClose={() => setHomeVideo(null)}
          />
        )}
      </Modal>

    </div>
  );
}
