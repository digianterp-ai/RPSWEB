"use client";

import Image from "next/image";

export default function ManagementPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="relative w-full min-h-[50vh] flex items-center justify-center text-white overflow-hidden sitepage-banner">
        

        <div className="relative z-10 text-center px-8">
          <p className="uppercase tracking-[4px] text-sm opacity-80 mb-6">
            Governance & Leadership
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Structured Leadership.
            <br />
            Strategic Direction.
          </h1>

          <div className="w-24 h-0.75 bg-[#C49A3B] mx-auto"></div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="w-full bg-white py-28">
        <div className="max-w-5xl mx-auto px-8 lg:px-20 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Institutional Governance
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Royal Public School operates under a structured management system
            designed to ensure academic excellence, operational clarity,
            and long-term institutional stability.
          </p>

          <p className="text-gray-600 mt-6 leading-relaxed">
            Leadership at Royal focuses on strategic growth, faculty
            development, infrastructure advancement, and measurable academic performance.
          </p>
        </div>
      </section>

      {/* ================= MANAGEMENT TEAM ================= */}
      <section className="w-full bg-[#F8FAFC] py-28">
        <div className="max-w-6xl mx-auto px-8 lg:px-20">

          <h2 className="text-3xl font-bold text-center mb-20">
            Leadership Team
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">

            {/* Chairman */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden text-center">
              <div className="relative h-75">
                <Image
                  src="/images/chairman.jpg"
                  alt="Chairman"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  Chairman
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  Strategic Governance & Institutional Oversight
                </p>

                <p className="text-gray-600 text-sm leading-relaxed">
                  Provides long-term strategic direction and ensures
                  institutional alignment with educational vision.
                </p>
              </div>
            </div>

            {/* Director */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden text-center">
              <div className="relative h-75">
                <Image
                  src="/images/director.jpg"
                  alt="Director"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8">
                <h3 className="text-xl font-semibold text-[#C49A3B] mb-2">
                  Director
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  Institutional Development & Operations
                </p>

                <p className="text-gray-600 text-sm leading-relaxed">
                  Oversees infrastructure growth, policy execution,
                  and institutional expansion initiatives.
                </p>
              </div>
            </div>

            {/* Academic Head */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden text-center">
              <div className="relative h-75">
                <Image
                  src="/images/academic-head.jpg"
                  alt="Academic Head"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  Academic Head
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  Academic Supervision & Curriculum Planning
                </p>

                <p className="text-gray-600 text-sm leading-relaxed">
                  Ensures structured curriculum delivery, assessment
                  standards, and faculty mentoring systems.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= GOVERNANCE STRUCTURE ================= */}
      <section className="w-full bg-white py-24">
        <div className="max-w-4xl mx-auto px-8 text-center">

          <h2 className="text-3xl font-bold mb-8">
            Governance Philosophy
          </h2>

          <p className="text-gray-600 leading-relaxed">
            The management structure at Royal Public School is built upon
            clarity, accountability, and strategic foresight.
            Decisions are guided by measurable outcomes, academic benchmarks,
            and long-term institutional sustainability.
          </p>

          <div className="mt-10 text-[#C49A3B] font-medium text-lg">
            Structured Systems. Responsible Leadership. Measurable Excellence.
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="w-full bg-blue-600 text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-8">

          <h3 className="text-3xl font-bold mb-6">
            Committed to Institutional Growth
          </h3>

          <p className="opacity-90 leading-relaxed">
            Royal Public School continues to strengthen its governance,
            academic leadership, and strategic planning to ensure
            sustainable excellence.
          </p>

        </div>
      </section>
    </>
  );
}