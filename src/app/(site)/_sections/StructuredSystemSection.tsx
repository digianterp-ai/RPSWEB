"use client";

import {
  CalendarCheck,
  BarChart3,
  ClipboardCheck,
  HelpCircle,
  Users,
  FileText,
} from "lucide-react";

const systemPoints = [
  {
    icon: CalendarCheck,
    title: "Weekly Lesson Planning",
    desc: "Structured curriculum planning to ensure syllabus clarity and continuity.",
    color: "bg-blue-100 text-blue-600 border-blue-400",
  },
  {
    icon: BarChart3,
    title: "Monthly Performance Analysis",
    desc: "Regular academic reviews to measure progress and identify improvement areas.",
    color: "bg-green-100 text-green-600 border-green-400",
  },
  {
    icon: ClipboardCheck,
    title: "Continuous Assessment",
    desc: "Ongoing evaluation methods beyond traditional examination systems.",
    color: "bg-purple-100 text-purple-600 border-purple-400",
  },
  {
    icon: HelpCircle,
    title: "Doubt-Solving Sessions",
    desc: "Focused academic support to strengthen conceptual understanding.",
    color: "bg-orange-100 text-orange-600 border-orange-400",
  },
  {
    icon: Users,
    title: "Mentor Monitoring System",
    desc: "Dedicated faculty guidance for structured student development.",
    color: "bg-pink-100 text-pink-600 border-pink-400",
  },
  {
    icon: FileText,
    title: "Individual Progress Reports",
    desc: "Transparent reporting for parents with measurable academic indicators.",
    color: "bg-yellow-100 text-yellow-600 border-yellow-400",
  },
];

export default function StructuredSystemSection() {
  return (
    <section className="w-full bg-linear-to-b from-white to-[#F8FAFC] py-28">
      <div className="max-w-7xl mx-auto px-12 lg:px-20">

        {/* TOP CONTENT */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-widest text-sm text-gray-500 mb-4">
            Structured Academic System
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            A Framework Designed for{" "}
            <span className="text-blue-500">
              Measurable Excellence
            </span>
          </h2>

          <div className="w-24 h-1 bg-[#C49A3B] mx-auto mb-8" />

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Royal Public School, academic growth is guided through a
            systematic structure integrating planning, monitoring, assessment,
            and mentorship to ensure measurable and continuous improvement.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {systemPoints.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`border-t-4 rounded-2xl p-8 shadow-sm hover:shadow-lg transition duration-300 ${item.color.split(" ")[2]} bg-white`}
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${item.color.split(" ")[0]} ${item.color.split(" ")[1]}`}
                >
                  <Icon size={24} />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}