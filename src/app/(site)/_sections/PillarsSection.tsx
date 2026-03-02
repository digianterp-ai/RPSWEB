"use client";

import { Flame, Leaf, Rocket } from "lucide-react";

const pillars = [
  {
    icon: Flame,
    title: "VIDYA",
    subtitle: "Academic Excellence",
    description:
      "Strong conceptual foundation, structured curriculum, regular assessments, and continuous performance tracking.",
  },
  {
    icon: Leaf,
    title: "SANSKAR",
    subtitle: "Character & Discipline",
    description:
      "Value-based education, leadership development, responsibility, and ethical growth.",
  },
  {
    icon: Rocket,
    title: "DRISHTI",
    subtitle: "Future Vision",
    description:
      "Competitive readiness, communication skills, analytical thinking, and technology integration.",
  },
];

export default function PillarsSection() {
  return (
    <section className="w-full bg-[#F8FAFC] py-28">
      <div className="max-w-7xl mx-auto px-12 lg:px-20">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-widest text-sm text-gray-500 mb-4">
            Our Three Pillars of Excellence
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Intellectual Framework of Royal
          </h2>

          <div className="w-24 h-1 bg-[#C49A3B] mx-auto" />
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-12">

          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <div
                key={index}
                className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-lg transition duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6">
                  <Icon size={26} />
                </div>

                <h3 className="text-2xl font-bold mb-2">
                  {pillar.title}
                </h3>

                <p className="text-[#C49A3B] font-medium mb-4">
                  {pillar.subtitle}
                </p>

                <p className="text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}