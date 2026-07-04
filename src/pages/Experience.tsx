/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import SectionTitle from "../components/SectionTitle";
import Timeline from "../components/Timeline";
import { experienceData } from "../data/experience";

export default function Experience() {
  return (
    <div className="pt-24 flex flex-col gap-12 relative">
      
      {/* Background glow */}
      <div className="absolute top-40 left-10 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Section Title */}
      <SectionTitle
        badge="My History"
        title="Professional Experience"
        subtitle="A collapsible, interactive vertical timeline tracing my career milestones, key responsibilities, and project artifacts."
      />

      {/* RENDER THE REUSABLE TIMELINE COMPONENT */}
      <div className="max-w-4xl mx-auto w-full">
        <Timeline items={experienceData} />
      </div>

    </div>
  );
}
