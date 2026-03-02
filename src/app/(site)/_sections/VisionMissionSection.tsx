"use client";

export default function VisionMissionSection() {
  return (
    <section className="w-full bg-white py-28">
      <div className="max-w-6xl mx-auto px-12 lg:px-20">

        <div className="text-center mb-20">
          <p className="uppercase tracking-widest text-sm text-gray-500 mb-4">
            Vision & Mission
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Direction & Commitment
          </h2>
          <div className="w-24 h-1 bg-[#C49A3B] mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* VISION */}
          <div className="bg-[#F8FAFC] p-12 rounded-3xl shadow-sm">
            <h3 className="text-2xl font-bold text-blue-500 mb-6">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To nurture disciplined, knowledgeable, and future-ready learners 
              grounded in values and empowered by structured modern education.
            </p>
          </div>

          {/* MISSION */}
          <div className="bg-[#F8FAFC] p-12 rounded-3xl shadow-sm">
            <h3 className="text-2xl font-bold text-[#C49A3B] mb-6">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To deliver measurable academic excellence through mentorship, 
              systematic assessment, technology integration, and holistic development.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}