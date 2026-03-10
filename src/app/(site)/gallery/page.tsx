"use client";

import Link from "next/link";

export default function GalleryPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative w-full min-h-[30vh] flex items-center justify-center text-white sitepage-banner">

        <div className="relative z-10 text-center px-8">
          <p className="uppercase tracking-[4px] text-sm opacity-80 mb-6">
            School Life
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Moments at Royal Public School
          </h1>
          <div className="w-24 h-0.75 bg-[#C49A3B] mx-auto"></div>
        </div>
      </section>

      {/* CATEGORY GRID */}
      <section className="w-full bg-white py-28">
        <div className="max-w-6xl mx-auto px-8">

          <h2 className="text-3xl font-bold text-center mb-20">
            Explore Gallery
          </h2>

          <div className="grid md:grid-cols-3 gap-12">

            {[
              {
                title: "Events",
                link: "/gallery/events",
                desc: "Cultural programs, annual functions, celebrations."
              },
              {
                title: "Campus",
                link: "/gallery/campus",
                desc: "Infrastructure, classrooms, laboratories."
              },
              {
                title: "Achievements",
                link: "/gallery/achievements",
                desc: "Academic results, awards, competitions."
              }
            ].map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="bg-[#F8FAFC] p-10 rounded-3xl shadow-lg hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-600">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {item.desc}
                </p>

                <span className="text-[#C49A3B] font-medium text-sm mt-6 inline-block">
                  View →
                </span>
              </Link>
            ))}

          </div>
        </div>
      </section>
    </>
  );
}