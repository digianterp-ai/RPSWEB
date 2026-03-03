"use client";

import Image from "next/image";

export default function WelcomeSection() {
  return (
    <section className="w-full ">
      <div className="flex flex-col lg:flex-row w-full min-h-[75vh]">

        {/* LEFT */}
        <div
          className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-24 py-24 text-white"
          style={{
            background:
              "linear-gradient(135deg, var(--color-blue-500), #0B1B34)",
          }}
        >
          <p className="uppercase tracking-widest text-sm opacity-70 mb-4">
            Welcome to Royal Public School
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Nurturing Disciplined Minds <br />
            <span className="text-[#C49A3B]">
              Shaping Responsible Futures
            </span>
          </h2>

          <p className="text-lg opacity-80 mb-8 max-w-lg">
            An English Medium institution affiliated to MP Board, delivering
            structured academic excellence with digital transparency and
            value-based mentorship.
          </p>

          <button className="bg-white text-blue-500 px-6 py-3 rounded-xl font-medium hover:scale-105 transition duration-300 w-fit">
            Admissions Open 2026–27
          </button>
        </div>

        {/* RIGHT */}
        <div className="relative w-full lg:w-1/2 h-[37vh] lg:h-auto">
          <Image
            src="/images/school-building.png"
            alt="Royal Public School Campus"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}