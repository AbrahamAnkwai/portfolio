/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import LucideIcon from "../components/LucideIcon";
import Card from "../components/Card";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import Modal from "../components/Modal";
import { servicesData } from "../data/services";
import { Service } from "../types";

interface ServicesProps {
  onPageChange: (pageId: string) => void;
}

export default function Services({ onPageChange }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleLearnMore = (service: Service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  const handleServiceContact = () => {
    setSelectedService(null);
    onPageChange("contact");
  };

  return (
    <div className="pt-24 flex flex-col gap-12 relative">
      
      {/* Background decoration */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/[0.02] rounded-full blur-3xl pointer-events-none" />

      {/* Title */}
      <SectionTitle
        badge="Offerings"
        title="Professional Services"
        subtitle="Custom, high-fidelity engineering configurations, database operations, and high-end digital media designs."
      />

      {/* SERVICES LIST GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service) => (
          <Card
            key={service.id}
            hoverEffect={true}
            className="flex flex-col justify-between p-6 h-full relative group"
          >
            <div>
              {/* Service Icon Node */}
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-white flex items-center justify-center mb-6 shadow-inner group-hover:scale-105 transition-all">
                <LucideIcon name={service.icon} size={20} />
              </div>

              {/* Header texts */}
              <h3 className="text-xl font-sans font-bold text-white mb-3 tracking-tight group-hover:text-white transition">
                {service.title}
              </h3>
              
              <p className="text-sm text-white/50 font-sans leading-relaxed mb-6">
                {service.shortDescription}
              </p>
            </div>

            {/* Bottom Panel */}
            <div className="flex flex-col gap-4 border-t border-white/5 pt-4">
              <span className="font-mono text-xs font-semibold text-white/70 uppercase tracking-wider block">
                {service.pricingPlaceholder}
              </span>

              <Button
                onClick={() => handleLearnMore(service)}
                variant="outline"
                size="sm"
                iconName="Code"
              >
                Learn More
              </Button>
            </div>

          </Card>
        ))}
      </div>

      {/* ==========================================
         DETAILED SERVICE MODAL POPUP
         ========================================== */}
      <Modal
        isOpen={selectedService !== null}
        onClose={handleCloseModal}
        title={selectedService?.title}
        size="lg"
      >
        {selectedService && (
          <div className="flex flex-col gap-8">
            
            {/* 1. DETAILED EXPLANATION */}
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-mono font-bold text-white/50 uppercase tracking-widest">
                Service Synopsis
              </h4>
              <p className="text-sm md:text-base text-white/75 font-sans leading-relaxed">
                {selectedService.detailedExplanation}
              </p>
            </div>

            {/* 2. SPECIFIC TECHNOLOGIES USED */}
            <div>
              <h4 className="text-xs font-mono font-bold text-white/50 uppercase tracking-widest mb-3">
                Technologies & Standards Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedService.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono font-medium text-white/70 bg-white/5 border border-white/10 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* 3. VISUAL ASSETS / EXAMPLES */}
            {selectedService.sampleImages && selectedService.sampleImages.length > 0 && (
              <div>
                <h4 className="text-xs font-mono font-bold text-white/50 uppercase tracking-widest mb-3">
                  Production Previews
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {selectedService.sampleImages.map((imgUrl, idx) => (
                    <div key={idx} className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-[#070708]">
                      <img
                        src={imgUrl}
                        alt="Sample Illustration"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. MODAL CALL TO ACTION */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/5 pt-6">
              <div>
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">
                  Est. Rates / Terms
                </span>
                <span className="text-lg font-sans font-bold text-white">
                  {selectedService.pricingPlaceholder}
                </span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Button onClick={handleServiceContact} variant="primary" className="w-full sm:w-auto">
                  Acquire Service
                </Button>
                <Button onClick={handleCloseModal} variant="outline" className="w-full sm:w-auto">
                  Cancel
                </Button>
              </div>
            </div>

          </div>
        )}
      </Modal>

    </div>
  );
}
