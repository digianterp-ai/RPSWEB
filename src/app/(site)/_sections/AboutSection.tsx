"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-28">
      <div className="max-w-7xl mx-auto px-12 lg:px-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <p className="uppercase tracking-widest text-sm text-gray-500 mb-4">
              About Royal Public School
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              A Modern Gurukul for the 21st Century
            </h2>

            <div className="w-20 h-1 bg-[#C49A3B] mb-8" />

            <p className="text-lg text-gray-600 mb-6">
              Royal Public School blends Bharat’s intellectual heritage with
              structured modern education.
            </p>

            <p className="text-gray-600 mb-6">
              Inspired by the mentorship tradition of the Gurukul and guided
              by timeless wisdom, we nurture students through discipline,
              knowledge, and leadership.
            </p>

            <p className="text-gray-600 mb-8">
              We believe education is not just preparation for exams — it is
              preparation for life.
            </p>

            <div className="text-xl font-semibold text-blue-500">
              सा विद्या या विमुक्तये
            </div>

            <div className="text-gray-500">
              True Knowledge Liberates.
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-105 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/about-campus.png"
              alt="Royal Public School Campus"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}