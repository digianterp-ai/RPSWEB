"use client";

import Image from "next/image";

export default function PrincipalPage() {
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
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-rrom-blue-900/85 via-black/70 to-black/80"></div>

        <div className="relative z-10 text-center px-8">
          <p className="uppercase tracking-[4px] text-sm opacity-80 mb-6">
            Principal’s Message
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Leadership Through Discipline.
            <br />
            Excellence Through Structure.
          </h1>

          <div className="w-24 h-0.75 bg-[#C49A3B] mx-auto"></div>
        </div>
      </section>

      {/* ================= MESSAGE CONTENT ================= */}
      <section className="w-full bg-white py-28">
        <div className="max-w-6xl mx-auto px-8 lg:px-20">

          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Principal Image */}
            <div className="relative h-130 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/principal.jpg"
                alt="Principal Rashmi Tiwari"
                fill
                className="object-cover"
              />
            </div>

            {/* Message Content */}
            <div>

              {/* Heading + Animated Line */}
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-blue-600">
                  A Message from the Principal
                </h2>

                <div className="mt-4 h-1 w-44 rounded-full 
                                bg-linear-to-r 
                                from-blue-500 
                                via-[#C49A3B] 
                                to-blue-900 
                                bg-size-[200%_100%] 
                                animate-gradientMove">
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                At Royal Public School, education extends beyond textbooks
                and examinations. It is a disciplined and structured journey
                of intellectual growth, character formation, and measurable
                academic progress.
              </p>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Our institutional framework ensures that every student
                receives clarity in expectations, mentorship in development,
                and accountability in performance. We believe that systems
                create stability, and stability produces excellence.
              </p>

              <p className="text-gray-600 mb-6 leading-relaxed">
                With dedicated faculty, transparent academic tracking,
                and structured evaluation, we are building confident,
                future-ready individuals prepared for national
                and global challenges.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Together, we are shaping disciplined minds and responsible
                citizens who will contribute meaningfully to society.
              </p>

              <div className="mt-12 border-l-4 border-[#C49A3B] pl-6">
                <p className="font-semibold text-lg text-gray-900">
                  — Rashmi Tiwari
                </p>
                <p className="text-gray-500 text-sm">
                  Principal, Royal Public School
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= LEADERSHIP PHILOSOPHY ================= */}
      <section className="w-full bg-[#F8FAFC] py-24">
        <div className="max-w-5xl mx-auto px-8 lg:px-20 text-center">

          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Academic Leadership Philosophy
          </h2>

          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Leadership at Royal Public School focuses on clarity of systems,
            measurable academic benchmarks, faculty mentorship,
            and continuous institutional growth to ensure long-term excellence.
          </p>

          <div className="mt-10 text-[#C49A3B] font-medium text-lg">
            सा विद्या या विमुक्तये
          </div>

        </div>
      </section>

      {/* ================= CLOSING CTA ================= */}
      <section className="w-full bg-blue-600 text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-8">

          <h3 className="text-3xl font-bold mb-6">
            Committed to Structured Excellence
          </h3>

          <p className="opacity-90 leading-relaxed">
            Royal Public School continues to strengthen academic systems,
            faculty mentorship, and student accountability for
            long-term institutional excellence.
          </p>

        </div>
      </section>
    </>
  );
}