"use client";

import {
  GraduationCap,
  MonitorSmartphone,
  Brain,
  ShieldCheck,
  BookOpenCheck,
  Users,
} from "lucide-react";

const highlights = [
  { icon: GraduationCap, title: "Structured Academic System" },
  { icon: MonitorSmartphone, title: "Digital Parent & Student Portal" },
  { icon: Brain, title: "NEET / JEE Foundation Support" },
  { icon: ShieldCheck, title: "Safe & Secure Campus" },
  { icon: BookOpenCheck, title: "Smart Classrooms" },
  { icon: Users, title: "Experienced Faculty" },
];

export default function HighlightsSection() {
  return (
    <section className="bg-[#F5F7FA] py-28 w-full items-center justify-between px-12 lg:px-20">
      <div className="px-8 lg:px-20">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Royal Public School?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A structured academic environment designed for measurable progress,
            transparency, and disciplined development.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <Icon size={24} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}