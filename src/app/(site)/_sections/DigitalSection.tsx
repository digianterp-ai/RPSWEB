"use client";

import { Monitor, Users, FileText, Video } from "lucide-react";

const digitalFeatures = [
  {
    icon: Monitor,
    title: "Parent Portal",
    desc: "Track attendance, academic performance, homework, and fee updates in real time.",
  },
  {
    icon: Users,
    title: "Teacher Dashboard",
    desc: "Lesson planning, assessments, and performance monitoring in one system.",
  },
  {
    icon: FileText,
    title: "Student Portal",
    desc: "Access study materials, assignments, reports, and schedules digitally.",
  },
  {
    icon: Video,
    title: "Live & Hybrid Learning",
    desc: "Structured online sessions and digital continuity support when required.",
  },
];

export default function DigitalSection() {
  return (
    <section className="w-full bg-white py-28">
      <div className="max-w-7xl mx-auto px-12 lg:px-20">

        <div className="text-center mb-20">
          <p className="uppercase tracking-widest text-sm text-gray-500 mb-4">
            Royal Digital Learning Ecosystem
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transparent. Structured. Connected.
          </h2>
          <div className="w-24 h-1 bg-[#C49A3B] mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {digitalFeatures.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-[#F8FAFC] p-8 rounded-2xl hover:shadow-lg transition">
                <div className="w-14 h-14 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center mb-6">
                  <Icon size={24} />
                </div>
                <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}