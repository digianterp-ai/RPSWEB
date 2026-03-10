"use client";

export default function PrimaryPage() {
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
            Primary Education
          </h1>

          <div className="w-24 h-0.75 bg-[#C49A3B] mx-auto"></div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="w-full bg-white py-28">
        <div className="max-w-5xl mx-auto px-8 text-center">

          <h2 className="text-3xl font-bold mb-8">
            Strengthening Academic Foundations
          </h2>

          <p className="text-gray-600 leading-relaxed">
            The Primary stage at Royal Public School focuses on
            structured concept development, disciplined study habits,
            and clarity in core academic subjects.
          </p>

          <p className="text-gray-600 mt-6 leading-relaxed">
            Students are guided through systematic lesson planning,
            regular assessments, and continuous mentorship.
          </p>

        </div>
      </section>

      {/* ================= CORE SUBJECTS ================= */}
      <section className="w-full bg-[#F8FAFC] py-28">
        <div className="max-w-6xl mx-auto px-8">

          <h2 className="text-3xl font-bold text-center mb-20">
            Core Academic Areas
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">

            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-600">
                English
              </h3>
              <p className="text-gray-600 text-sm">
                Reading comprehension, grammar,
                vocabulary building, and communication skills.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#C49A3B]">
                Mathematics
              </h3>
              <p className="text-gray-600 text-sm">
                Concept clarity in arithmetic,
                problem-solving, and logical thinking.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-600">
                Science
              </h3>
              <p className="text-gray-600 text-sm">
                Basic scientific principles,
                observation skills, and curiosity development.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#C49A3B]">
                Social Studies
              </h3>
              <p className="text-gray-600 text-sm">
                Understanding society, geography,
                civics, and cultural awareness.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= STRUCTURED SYSTEM ================= */}
      <section className="w-full bg-white py-28">
        <div className="max-w-5xl mx-auto px-8 text-center">

          <h2 className="text-3xl font-bold mb-8">
            Structured Academic System
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Royal Public School ensures weekly lesson planning,
            monthly performance review, and structured academic tracking
            for each student.
          </p>

          <p className="text-gray-600 mt-6 leading-relaxed">
            Continuous assessments help identify strengths and areas
            requiring improvement, ensuring measurable progress.
          </p>

        </div>
      </section>

      {/* ================= DEVELOPMENT FOCUS ================= */}
      <section className="w-full bg-[#F8FAFC] py-28">
        <div className="max-w-6xl mx-auto px-8">

          <h2 className="text-3xl font-bold text-center mb-20">
            Holistic Development
          </h2>

          <div className="grid md:grid-cols-3 gap-12 text-center">

            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-600">
                Discipline & Responsibility
              </h3>
              <p className="text-gray-600 text-sm">
                Developing structured routines and accountability.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#C49A3B]">
                Communication Skills
              </h3>
              <p className="text-gray-600 text-sm">
                Enhancing spoken and written expression.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-600">
                Co-Curricular Exposure
              </h3>
              <p className="text-gray-600 text-sm">
                Sports, cultural activities,
                and creative engagement.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CLOSING STRIP ================= */}
      <section className="w-full bg-blue-600 text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-8">

          <h3 className="text-3xl font-bold mb-6">
            Building Conceptual Strength for Future Stages
          </h3>

          <p className="opacity-90">
            The Primary section lays the groundwork for advanced academic
            preparation in Middle and Higher Secondary stages.
          </p>

        </div>
      </section>
    </>
  );
}