"use client";

import Link from "next/link";

export default function FacilitiesPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative w-full min-h-[40vh] flex items-center justify-center text-white overflow-hidden sitepage-banner">

        <div className="relative z-10 text-center px-8">
          <p className="uppercase tracking-[4px] text-sm opacity-80 mb-6">
            Campus Infrastructure
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Modern Facilities
            <br />
            for Holistic Development
          </h1>

          <div className="w-24 h-0.75 bg-[#C49A3B] mx-auto"></div>
        </div>
      </section>

      {/* INTRO */}
      <section className="w-full bg-white py-28">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Supporting Academic Excellence
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Royal Public School provides structured infrastructure
            designed to enhance learning, safety, and student development.
          </p>
        </div>
      </section>

      {/* FACILITY GRID */}
      <section className="w-full bg-[#F8FAFC] py-28">
        <div className="max-w-6xl mx-auto px-8">

          <h2 className="text-3xl font-bold text-center mb-20">
            Our Facilities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

            {[
              {
                title: "Smart Classrooms",
                link: "/facilities/smart",
                desc: "Digitally enabled classrooms for interactive learning."
              },
              {
                title: "Science & Computer Labs",
                link: "/facilities/labs",
                desc: "Well-equipped laboratories for practical exposure."
              },
              {
                title: "Library",
                link: "/facilities/library",
                desc: "Structured reading environment with curated resources."
              },
              {
                title: "Sports & Physical Education",
                link: "/facilities/sports",
                desc: "Encouraging discipline and physical development."
              },
              {
                title: "Transport System",
                link: "/facilities/transport",
                desc: "Safe and reliable school transport network."
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

      {/* CLOSING STRIP */}
      <section className="w-full bg-blue-600 text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-8">
          <h3 className="text-3xl font-bold mb-6">
            Safe, Structured & Future-Ready Campus
          </h3>
          <p className="opacity-90">
            Our facilities support academic strength,
            discipline, and holistic development.
          </p>
        </div>
      </section>
    </>
  );
}