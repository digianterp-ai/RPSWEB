"use client";

export default function HigherSecondaryPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="relative w-full min-h-[55vh] flex items-center justify-center text-white overflow-hidden sitepage-banner">

        <div className="relative z-10 text-center px-8">
          <p className="uppercase tracking-[4px] text-sm opacity-80 mb-6">
            Academic Stage
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Higher Secondary
          </h1>

          <div className="w-24 h-0.75 bg-[#C49A3B] mx-auto"></div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="w-full bg-white py-28">
        <div className="max-w-5xl mx-auto px-8 text-center">

          <h2 className="text-3xl font-bold mb-8">
            Focused Academic Excellence
          </h2>

          <p className="text-gray-600 leading-relaxed">
            The Higher Secondary stage at Royal Public School is designed
            to provide focused academic preparation aligned with board
            examination standards and competitive readiness.
          </p>

          <p className="text-gray-600 mt-6 leading-relaxed">
            Students are guided through structured study plans,
            regular testing systems, and strategic academic mentoring.
          </p>

        </div>
      </section>

      {/* ================= STREAM STRUCTURE ================= */}
      <section className="w-full bg-[#F8FAFC] py-28">
        <div className="max-w-6xl mx-auto px-8">

          <h2 className="text-3xl font-bold text-center mb-20">
            Academic Streams
          </h2>

          <div className="grid md:grid-cols-3 gap-12 text-center">

            <div className="bg-white p-10 rounded-3xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">
                Science
              </h3>
              <p className="text-gray-600 text-sm">
                Physics, Chemistry, Mathematics / Biology
                with structured conceptual strengthening
                and competitive foundation support.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#C49A3B]">
                Commerce
              </h3>
              <p className="text-gray-600 text-sm">
                Accountancy, Business Studies, Economics,
                and foundational financial literacy.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">
                Humanities
              </h3>
              <p className="text-gray-600 text-sm">
                Social Sciences, analytical thinking,
                and structured subject depth development.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= BOARD & COMPETITIVE PREP ================= */}
      <section className="w-full bg-white py-28">
        <div className="max-w-5xl mx-auto px-8 text-center">

          <h2 className="text-3xl font-bold mb-8">
            Board & Competitive Preparation
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Royal Public School integrates structured board examination
            preparation with NEET / JEE foundation support to ensure
            long-term academic success.
          </p>

          <p className="text-gray-600 mt-6 leading-relaxed">
            Regular test series, performance analysis, and doubt-clearing
            sessions help students strengthen exam temperament
            and conceptual mastery.
          </p>

        </div>
      </section>

      {/* ================= STRUCTURED SYSTEM ================= */}
      <section className="w-full bg-[#F8FAFC] py-28">
        <div className="max-w-6xl mx-auto px-8">

          <h2 className="text-3xl font-bold text-center mb-20">
            Academic Monitoring & Discipline
          </h2>

          <div className="grid md:grid-cols-3 gap-12 text-center">

            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-600">
                Weekly Planning
              </h3>
              <p className="text-gray-600 text-sm">
                Structured lesson schedules and performance tracking.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#C49A3B]">
                Monthly Analysis
              </h3>
              <p className="text-gray-600 text-sm">
                Performance review and corrective academic guidance.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-600">
                Mentor Supervision
              </h3>
              <p className="text-gray-600 text-sm">
                Dedicated academic mentoring and structured accountability.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CLOSING STRIP ================= */}
      <section className="w-full bg-blue-600 text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-8">

          <h3 className="text-3xl font-bold mb-6">
            Preparing for National & Global Excellence
          </h3>

          <p className="opacity-90">
            The Higher Secondary stage equips students with academic depth,
            exam discipline, and competitive readiness
            for future academic and professional success.
          </p>

        </div>
      </section>
    </>
  );
}