"use client";

import Link from "next/link";
export default function AdmissionsPage() {
  return (
    <>
      {/* HERO */}
      <section
      className="relative w-full h-105 flex items-center justify-center text-center text-white overflow-hidden sitepage-banner">

        <div className="relative z-10 text-center px-8">
          <p className="uppercase tracking-[4px] text-sm opacity-80 mb-6">
            Admissions 2026–27
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Join Royal Public School
          </h1>
          <div className="w-24 h-0.75 bg-[#C49A3B] mx-auto"></div>
        </div>
      </section>

      {/* INTRO */}
      <section className="w-full bg-white py-28">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Structured Admission Process
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Royal Public School follows a transparent and systematic
            admission process to ensure academic readiness
            and alignment with institutional standards.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="w-full bg-[#F8FAFC] py-28">
        <div className="max-w-6xl mx-auto px-8">

          <h2 className="text-3xl font-bold text-center mb-20">
            Admission Information
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

            {[
              { title: "Admission Process", link: "/admissions/process" },
              { title: "Eligibility Criteria", link: "/admissions/eligibility" },
              { title: "Fee Structure", link: "/admissions/fees" },
              { title: "Enquiry Form", link: "/admissions/enquiry" }
            ].map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition text-center"
              >
                <h3 className="text-lg font-semibold text-blue-600 mb-4">
                  {item.title}
                </h3>

                <span className="text-[#C49A3B] font-medium text-sm">
                  View →
                </span>
              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="w-full bg-blue-600 text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-8">
          <h3 className="text-3xl font-bold mb-6">
            Admissions Open 2026–27
          </h3>
          <p className="opacity-90 mb-8">
            Limited seats available. Early application is recommended.
          </p>

          <Link
            href="/admissions/enquiry"
            className="inline-block px-8 py-4 bg-[#C49A3B] text-black rounded-lg font-semibold hover:opacity-90 transition"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </>
  );
}