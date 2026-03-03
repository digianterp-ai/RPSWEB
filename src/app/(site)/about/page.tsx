import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* HERO WITH FULL IMAGE */}
        <section
        className="relative w-full min-h-[80vh] flex items-center text-white"
        style={{
            backgroundImage: "url('/images/about-institution.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
        >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-12 lg:px-20 text-center py-32">

            <p className="uppercase tracking-widest text-sm opacity-80 mb-6">
            Institutional Overview
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            A Structured Institution
            <br />
            Built for Long-Term Excellence
            </h1>

            <p className="max-w-3xl mx-auto text-lg md:text-xl opacity-90 leading-relaxed">
            Royal Public School operates on a systematic academic framework,
            guided by mentorship, accountability, and measurable development.
            </p>

        </div>
        </section>

      {/* INSTITUTIONAL POSITIONING */}
      <section className="w-full bg-white py-28">
        <div className="max-w-5xl mx-auto px-12 lg:px-20">

          <h2 className="text-3xl font-bold mb-8">
            Our Institutional Commitment
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Royal Public School was established with a clear objective —
            to create a disciplined academic environment that blends
            value-based education with structured modern systems.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Every academic process at Royal is guided by planning,
            evaluation, mentorship, and measurable progress tracking.
            We believe clarity in structure produces clarity in outcomes.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Our approach ensures students develop intellectual strength,
            ethical grounding, and confidence in execution.
          </p>

        </div>
      </section>

      {/* WHAT MAKES ROYAL DIFFERENT */}
      <section className="w-full bg-[#F8FAFC] py-28">
        <div className="max-w-6xl mx-auto px-12 lg:px-20">

          <h2 className="text-3xl font-bold mb-16 text-center">
            What Distinguishes Royal Public School
          </h2>

          <div className="grid md:grid-cols-3 gap-12 text-center">

            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-500">
                Structured Academic Framework
              </h3>
              <p className="text-gray-600">
                Weekly planning, monthly review systems,
                and continuous assessment ensure measurable progress.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#C49A3B]">
                Mentorship-Based Guidance
              </h3>
              <p className="text-gray-600">
                Teachers operate as academic mentors,
                ensuring discipline, support, and accountability.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-500">
                Digital Transparency
              </h3>
              <p className="text-gray-600">
                Integrated digital systems provide clarity to parents,
                students, and faculty.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* LEADERSHIP & GOVERNANCE */}
      <section className="w-full bg-white py-28">
        <div className="max-w-5xl mx-auto px-12 lg:px-20">

          <h2 className="text-3xl font-bold mb-8">
            Governance & Academic Leadership
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Royal Public School operates under structured management
            and academic supervision to ensure clarity in decision-making
            and long-term institutional stability.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Leadership at Royal focuses on strategic development,
            faculty growth, infrastructure enhancement,
            and continuous academic improvement.
          </p>

        </div>
      </section>

      {/* READ MORE BLOCK */}
      <section className="w-full bg-white py-28">
        <div className="max-w-7xl mx-auto px-12 lg:px-20">

            <h2 className="text-3xl font-bold text-center mb-20">
            Explore More About Royal
            </h2>

            <div className="space-y-24">

            {/* VISION */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="h-96 rounded-3xl bg-gray-200 bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/about-vision.png')" }}>
                </div>

                <div>
                <h3 className="text-3xl font-bold mb-6 text-blue-500">
                    Vision & Mission
                </h3>

                <p className="text-gray-600 mb-8 leading-relaxed">
                    Discover Royal Public School’s long-term educational vision
                    and mission to create disciplined, future-ready learners
                    through structured academic systems.
                </p>

                <Link
                    href="/about/vision"
                    className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:opacity-90 transition"
                >
                    Read More →
                </Link>
                </div>
            </div>

            {/* PRINCIPAL MESSAGE */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                <h3 className="text-3xl font-bold mb-6 text-[#C49A3B]">
                    Principal’s Message
                </h3>

                <p className="text-gray-600 mb-8 leading-relaxed">
                    A message from the academic leadership outlining our
                    commitment to mentorship, discipline, and measurable excellence.
                </p>

                <Link
                    href="/about/principal"
                    className="inline-block px-6 py-3 bg-[#C49A3B] text-black rounded-lg font-medium hover:opacity-90 transition"
                >
                    Read More →
                </Link>
                </div>

                <div className="order-1 lg:order-2 h-96 rounded-3xl bg-gray-200 bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/about-principal.jpg')" }}>
                </div>
            </div>

            {/* HISTORY */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="h-96 rounded-3xl bg-gray-200 bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/about-history.jpg')" }}>
                </div>

                <div>
                <h3 className="text-3xl font-bold mb-6 text-blue-500">
                    School History
                </h3>

                <p className="text-gray-600 mb-8 leading-relaxed">
                    Learn about the foundation, growth journey, and institutional
                    milestones that shaped Royal Public School.
                </p>

                <Link
                    href="/about/history"
                    className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:opacity-90 transition"
                >
                    Read More →
                </Link>
                </div>
            </div>

            {/* MANAGEMENT */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                <h3 className="text-3xl font-bold mb-6 text-[#C49A3B]">
                    Management
                </h3>

                <p className="text-gray-600 mb-8 leading-relaxed">
                    Meet the governance and academic leadership team responsible
                    for strategic direction and institutional development.
                </p>

                <Link
                    href="/about/management"
                    className="inline-block px-6 py-3 bg-[#C49A3B] text-black rounded-lg font-medium hover:opacity-90 transition"
                >
                    Read More →
                </Link>
                </div>

                <div className="order-1 lg:order-2 h-96 rounded-3xl bg-gray-200 bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/about-management.jpg')" }}>
                </div>
            </div>

            </div>

        </div>
        </section>

      {/* CLOSING STATEMENT */}
      <section className="w-full bg-blue-500 text-white py-24">
        <div className="max-w-4xl mx-auto px-12 lg:px-20 text-center">

          <p className="text-lg opacity-90 leading-relaxed">
            Royal Public School stands committed to disciplined
            academic systems, ethical values, and structured excellence.
          </p>

        </div>
      </section>
    </>
  );
}