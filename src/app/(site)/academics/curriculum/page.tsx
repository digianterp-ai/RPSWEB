"use client";

export default function CurriculumPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="relative w-full min-h-[55vh] flex items-center justify-center text-white overflow-hidden sitepage-banner">

        <div className="relative z-10 text-center px-8">
          <p className="uppercase tracking-[4px] text-sm opacity-80 mb-6">
            Academic Framework
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Structured Curriculum Design
          </h1>

          <div className="w-24 h-0.75 bg-[#C49A3B] mx-auto"></div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="w-full bg-white py-28">
        <div className="max-w-5xl mx-auto px-8 text-center">

          <h2 className="text-3xl font-bold mb-8">
            Curriculum Philosophy
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Royal Public School follows the MP Board curriculum
            integrated with structured lesson planning, periodic assessment,
            and long-term academic monitoring systems.
          </p>

          <p className="text-gray-600 mt-6 leading-relaxed">
            Our curriculum is designed to ensure conceptual clarity,
            disciplined study habits, and measurable academic progress
            across all stages.
          </p>

        </div>
      </section>

      {/* ================= CURRICULUM STRUCTURE ================= */}
      <section className="w-full bg-[#F8FAFC] py-28">
        <div className="max-w-6xl mx-auto px-8">

          <h2 className="text-3xl font-bold text-center mb-20">
            Structured Academic Components
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-blue-600">
                Annual Academic Planning
              </h3>
              <p className="text-gray-600 text-sm">
                Yearly syllabus mapping aligned with board requirements
                and academic milestones.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-[#C49A3B]">
                Weekly Lesson Plans
              </h3>
              <p className="text-gray-600 text-sm">
                Structured classroom planning ensuring syllabus completion
                with clarity and consistency.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-blue-600">
                Continuous Assessment
              </h3>
              <p className="text-gray-600 text-sm">
                Periodic tests, assignments, and performance reviews
                to track academic progress.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-[#C49A3B]">
                Performance Analysis
              </h3>
              <p className="text-gray-600 text-sm">
                Monthly evaluation and corrective guidance
                based on measurable outcomes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-blue-600">
                Digital Integration
              </h3>
              <p className="text-gray-600 text-sm">
                Academic ERP system for tracking attendance,
                assignments, and academic records.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-[#C49A3B]">
                Competitive Foundation
              </h3>
              <p className="text-gray-600 text-sm">
                Integrated support for NEET / JEE foundation
                and analytical skill development.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= BOARD ALIGNMENT ================= */}
      <section className="w-full bg-white py-28">
        <div className="max-w-5xl mx-auto px-8 text-center">

          <h2 className="text-3xl font-bold mb-8">
            Board Alignment & Compliance
          </h2>

          <p className="text-gray-600 leading-relaxed">
            The curriculum strictly adheres to MP Board guidelines
            while enhancing classroom delivery through structured
            evaluation and academic transparency.
          </p>

          <p className="text-gray-600 mt-6 leading-relaxed">
            Documentation, academic reporting, and performance tracking
            ensure institutional accountability and clarity for parents
            and students.
          </p>

        </div>
      </section>

      {/* ================= CLOSING STRIP ================= */}
      <section className="w-full bg-blue-600 text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-8">

          <h3 className="text-3xl font-bold mb-6">
            Clarity in Structure. Excellence in Execution.
          </h3>

          <p className="opacity-90">
            Royal Public School’s curriculum framework ensures disciplined
            learning, measurable progress, and long-term academic strength.
          </p>

        </div>
      </section>
    </>
  );
}