"use client";

import Link from "next/link";

export default function AcademicsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative w-full min-h-[50vh] flex items-center justify-center text-white overflow-hidden sitepage-banner">

        <div className="relative z-10 text-center px-8">
          <p className="uppercase tracking-[4px] text-sm opacity-80 mb-6">
            Academic Structure
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Structured Learning.
            <br />
            Measurable Excellence.
          </h1>

          <div className="w-24 h-0.75 bg-[#C49A3B] mx-auto"></div>
        </div>
      </section>

      {/* INTRO */}
      <section className="w-full bg-white py-28">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Academic Framework
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Royal Public School follows a structured academic progression
            designed to build conceptual clarity, disciplined study habits,
            and long-term academic excellence.
          </p>
        </div>
      </section>

      {/* ACADEMIC STAGES */}
      <section className="w-full bg-[#F8FAFC] py-28">
        <div className="max-w-6xl mx-auto px-8">

          <h2 className="text-3xl font-bold text-center mb-20">
            Academic Stages
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

            {[
              {
                title: "Pre-Primary",
                link: "/academics/pre-primary",
                desc: "Foundation stage focused on early learning, discipline, and communication development."
              },
              {
                title: "Primary",
                link: "/academics/primary",
                desc: "Concept building stage emphasizing core subjects and structured habits."
              },
              {
                title: "Middle School",
                link: "/academics/middle",
                desc: "Strengthening analytical thinking and subject depth."
              },
              {
                title: "Higher Secondary",
                link: "/academics/higher-secondary",
                desc: "Focused preparation for board exams and competitive foundations."
              }
            ].map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-600">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm mb-6">
                  {item.desc}
                </p>

                <span className="text-[#C49A3B] font-medium text-sm">
                  Explore →
                </span>
              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* CURRICULUM SECTION */}
      <section className="w-full bg-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl font-bold mb-8">
            Curriculum Design
          </h2>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Our curriculum integrates MP Board standards with structured
            lesson planning, periodic evaluation, and long-term academic tracking.
          </p>

          <Link
            href="/academics/curriculum"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:opacity-90 transition"
          >
            View Curriculum →
          </Link>
        </div>
      </section>
    </>
  );
}