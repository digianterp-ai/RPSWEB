"use client";

export default function MiddleSchoolPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="relative w-full min-h-[50vh] flex items-center justify-center text-white overflow-hidden sitepage-banner">

        <div className="relative z-10 text-center px-8">
          <p className="uppercase tracking-[4px] text-sm opacity-80 mb-6">
            Academic Stage
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Middle School
          </h1>

          <div className="w-24 h-0.75 bg-[#C49A3B] mx-auto"></div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="w-full bg-white py-28">
        <div className="max-w-5xl mx-auto px-8 text-center">

          <h2 className="text-3xl font-bold mb-8">
            Transition from Foundations to Depth
          </h2>

          <p className="text-gray-600 leading-relaxed">
            The Middle School stage strengthens subject depth,
            analytical thinking, and independent learning habits.
          </p>

          <p className="text-gray-600 mt-6 leading-relaxed">
            Students are guided to move beyond basic concepts
            toward structured reasoning, application skills,
            and disciplined academic execution.
          </p>

        </div>
      </section>

      {/* ================= SUBJECT FOCUS ================= */}
      <section className="w-full bg-[#F8FAFC] py-28">
        <div className="max-w-6xl mx-auto px-8">

          <h2 className="text-3xl font-bold text-center mb-20">
            Academic Strengthening Areas
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">

            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-600">
                Advanced Mathematics
              </h3>
              <p className="text-gray-600 text-sm">
                Algebra, geometry, logical reasoning,
                and structured problem-solving.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#C49A3B]">
                Science Concepts
              </h3>
              <p className="text-gray-600 text-sm">
                Physics, Chemistry, and Biology fundamentals
                with conceptual clarity.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-600">
                English Communication
              </h3>
              <p className="text-gray-600 text-sm">
                Structured writing, comprehension,
                grammar mastery, and presentation skills.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#C49A3B]">
                Social Sciences
              </h3>
              <p className="text-gray-600 text-sm">
                Analytical understanding of history,
                geography, civics, and economics.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= STRUCTURED SYSTEM ================= */}
      <section className="w-full bg-white py-28">
        <div className="max-w-5xl mx-auto px-8 text-center">

          <h2 className="text-3xl font-bold mb-8">
            Structured Academic Monitoring
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Middle School students follow weekly lesson plans,
            regular subject assessments, and monthly academic reviews.
          </p>

          <p className="text-gray-600 mt-6 leading-relaxed">
            Performance tracking ensures early identification of
            strengths and academic gaps, preparing students
            for higher academic challenges.
          </p>

        </div>
      </section>

      {/* ================= COMPETITIVE FOUNDATION ================= */}
      <section className="w-full bg-[#F8FAFC] py-28">
        <div className="max-w-6xl mx-auto px-8">

          <h2 className="text-3xl font-bold text-center mb-20">
            Competitive Foundation Introduction
          </h2>

          <div className="grid md:grid-cols-3 gap-12 text-center">

            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-600">
                Logical Thinking
              </h3>
              <p className="text-gray-600 text-sm">
                Analytical problem-solving exercises
                and reasoning practice.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#C49A3B]">
                Olympiad Exposure
              </h3>
              <p className="text-gray-600 text-sm">
                Early exposure to competitive examinations
                and advanced problem frameworks.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-600">
                Exam Discipline
              </h3>
              <p className="text-gray-600 text-sm">
                Time management, structured answer writing,
                and performance strategy.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CLOSING STRIP ================= */}
      <section className="w-full bg-blue-600 text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-8">

          <h3 className="text-3xl font-bold mb-6">
            Preparing for Academic Specialization
          </h3>

          <p className="opacity-90">
            Middle School lays the foundation for focused
            Higher Secondary preparation and competitive readiness.
          </p>

        </div>
      </section>
    </>
  );
}