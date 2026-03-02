"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0B1B34] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-12 lg:px-20">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* ABOUT */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              Royal Public School
            </h3>
            <p className="text-sm opacity-80 leading-relaxed">
              An English Medium institution affiliated to MP Board,
              committed to structured academic excellence, digital
              transparency, and holistic student development.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm opacity-80">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/academics">Academics</Link></li>
              <li><Link href="/facilities">Facilities</Link></li>
              <li><Link href="/admission">Admission</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-3 text-sm opacity-80">
              <li>📍 Deori, Madhya Pradesh</li>
              <li>📞 +91 79873 14617</li>
              <li>📧 info@rpsdeori.org</li>
            </ul>
          </div>

          {/* ADMISSIONS */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Admissions</h3>
            <p className="text-sm opacity-80 mb-6">
              Admissions Open 2026–27
            </p>

            <button className="bg-[#C49A3B] text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition">
              Apply Now
            </button>

            <div className="mt-6 text-sm opacity-70">
              ERP Login Available
            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/20 pt-8 text-center text-sm opacity-70">
          © {new Date().getFullYear()} Royal Public School. All Rights Reserved. <br />
          MP Board Affiliated | CBSE Affiliation Proposed <br />
          EduIntellect™ Pilot Lab – An Inkmatik Invision
        </div>

      </div>
    </footer>
  );
}