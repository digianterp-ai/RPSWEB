"use client";

export default function PrePrimaryPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="relative w-full min-h-[50vh] flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: "url('/images/pre-primary.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-blue-900/80 via-black/60 to-black/70"></div>

        <div className="relative z-10 text-center px-8">
          <p className="uppercase tracking-[4px] text-sm opacity-80 mb-6">
            Academic Stage
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Pre-Primary Education
          </h1>

          <div className="w-24 h-0.75 bg-[#C49A3B] mx-auto"></div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="w-full bg-white py-28">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Foundation for Lifelong Learning
          </h2>

          <p className="text-gray-600 leading-relaxed">
            The Pre-Primary stage at Royal Public School focuses on building
            strong early learning foundations through structured activities,
            communication development, and disciplined routines.
          </p>

          <p className="text-gray-600 mt-6 leading-relaxed">
            Our approach ensures that children develop curiosity,
            confidence, and positive learning habits from the very beginning.
          </p>
        </div>
      </section>

      {/* ================= KEY FOCUS AREAS ================= */}
      <section className="w-full bg-[#F8FAFC] py-28">
        <div className="max-w-6xl mx-auto px-8">

          <h2 className="text-3xl font-bold text-center mb-20">
            Key Development Areas
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">

            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-600">
                Communication Skills
              </h3>
              <p className="text-gray-600 text-sm">
                Focus on spoken English, vocabulary development,
                and confident expression.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#C49A3B]">
                Cognitive Development
              </h3>
              <p className="text-gray-600 text-sm">
                Early numeracy, pattern recognition,
                and logical thinking activities.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-600">
                Social & Emotional Growth
              </h3>
              <p className="text-gray-600 text-sm">
                Discipline, teamwork, respect,
                and positive behavioral habits.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#C49A3B]">
                Motor Skills
              </h3>
              <p className="text-gray-600 text-sm">
                Structured physical activities
                and creative classroom exercises.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= STRUCTURED APPROACH ================= */}
      <section className="w-full bg-white py-28">
        <div className="max-w-5xl mx-auto px-8 text-center">

          <h2 className="text-3xl font-bold mb-8">
            Structured Learning Approach
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Royal Public School follows a planned activity-based learning model
            supported by trained faculty, structured routines,
            and continuous developmental observation.
          </p>

          <p className="text-gray-600 mt-6 leading-relaxed">
            Regular parent communication ensures transparency
            and collaborative student development.
          </p>

        </div>
      </section>

      {/* ================= CLOSING STRIP ================= */}
      <section className="w-full bg-blue-600 text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-8">
          <h3 className="text-3xl font-bold mb-6">
            Building Strong Foundations Since 2007
          </h3>
          <p className="opacity-90">
            Our Pre-Primary program lays the groundwork for disciplined,
            confident, and future-ready learners.
          </p>
        </div>
      </section>
    </>
  );
}