"use client";

export default function HistoryPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="relative w-full min-h-[50vh] flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: "url('/images/about-vision.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-blue-900/85 via-black/70 to-black/80"></div>

        <div className="relative z-10 text-center px-8">
          <p className="uppercase tracking-[4px] text-sm opacity-80 mb-6">
            Our Journey
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Since 2007.
            <br />
            A Journey of Structured Growth.
          </h1>

          <div className="w-24 h-0.75 bg-[#C49A3B] mx-auto"></div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="w-full bg-white py-28">
        <div className="max-w-5xl mx-auto px-8 lg:px-20 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            The Foundation
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Royal Public School was established in 2007 with a clear vision —
            to build a disciplined academic institution rooted in structured
            systems, value-based education, and measurable student development.
          </p>

          <p className="text-gray-600 mt-6 leading-relaxed">
            From its inception, the institution focused on academic clarity,
            faculty mentorship, and systematic evaluation practices.
          </p>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="w-full bg-[#F8FAFC] py-28">
        <div className="max-w-6xl mx-auto px-8 lg:px-20">

          <h2 className="text-3xl font-bold text-center mb-20">
            Milestones of Growth
          </h2>

          <div className="relative border-l-4 border-[#C49A3B] pl-10 space-y-16">

            {/* 2007 */}
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                2007 – Establishment
              </h3>
              <p className="text-gray-600">
                Royal Public School was founded with a mission to create
                a structured academic environment combining discipline,
                mentorship, and measurable excellence.
              </p>
            </div>

            {/* 2012 */}
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                2012 – Infrastructure Expansion
              </h3>
              <p className="text-gray-600">
                Expansion of academic facilities, improved classrooms,
                and enhancement of science laboratories to strengthen
                academic delivery.
              </p>
            </div>

            {/* 2016 */}
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                2016 – Digital Academic Systems
              </h3>
              <p className="text-gray-600">
                Introduction of structured academic tracking systems,
                transparent parent communication, and digital monitoring
                frameworks.
              </p>
            </div>

            {/* 2020 */}
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                2020 – Academic Strengthening
              </h3>
              <p className="text-gray-600">
                Strengthening of NEET / JEE foundation programs and
                structured higher secondary academic focus.
              </p>
            </div>

            {/* Present */}
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                Present – Institutional Consolidation
              </h3>
              <p className="text-gray-600">
                Continued focus on disciplined systems, faculty mentorship,
                structured curriculum planning, and long-term institutional excellence.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="w-full bg-white py-24">
        <div className="max-w-4xl mx-auto px-8 text-center">

          <h2 className="text-3xl font-bold mb-8">
            A Legacy of Discipline & Vision
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Over the years, Royal Public School has evolved not merely
            as an academic institution, but as a structured educational system
            committed to long-term student development and institutional growth.
          </p>

          <div className="mt-10 text-[#C49A3B] font-medium text-lg">
            सा विद्या या विमुक्तये
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="w-full bg-blue-600 text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-8">

          <h3 className="text-3xl font-bold mb-6">
            Continuing the Journey of Excellence
          </h3>

          <p className="opacity-90 leading-relaxed">
            Royal Public School remains committed to structured academic systems,
            institutional discipline, and measurable educational impact.
          </p>

        </div>
      </section>
    </>
  );
}