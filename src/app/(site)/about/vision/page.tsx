import Image from "next/image";

export default function VisionMissionPage() {
  return (
    <>
      {/* HERO */}
      {/* VISION & MISSION – CINEMATIC HERO */}
        <section
        className="relative w-full min-h-[65vh] flex items-center justify-center text-white overflow-hidden"
        style={{
            backgroundImage: "url('/images/about-vision.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
        >

        {/* Dark + Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-blue-900/80 via-black/60 to-black/70"></div>

        {/* Soft Blur Layer (Premium Depth Effect) */}
        <div className="absolute inset-0 backdrop-blur-[2px]"></div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-10 lg:px-20 text-center">

            <p className="uppercase tracking-[4px] text-sm opacity-80 mb-6">
            Vision & Mission
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            Defining Our Direction.
            <br />
            Designing the Future.
            </h1>

            <div className="w-24 h-0.75 bg-[#C49A3B] mx-auto mb-8"></div>

            <p className="text-lg md:text-xl opacity-90 leading-relaxed max-w-3xl mx-auto">
            Royal Public School is guided by a clear vision and a disciplined
            mission framework to build structured, future-ready learners
            prepared for national and global excellence.
            </p>

        </div>

        </section>

      {/* VISION */}
      <section className="w-full bg-white py-28">
        <div className="max-w-5xl mx-auto px-12 lg:px-20">

          <h2 className="text-3xl font-bold mb-8 text-blue-500">
            Our Vision
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            To establish Royal Public School as a center of structured
            academic excellence where discipline, knowledge, and integrity
            form the foundation of student development.
          </p>

          <p className="text-gray-600 leading-relaxed">
            We envision nurturing intellectually strong, ethically grounded,
            and socially responsible individuals prepared to contribute
            meaningfully to India and the global community.
          </p>

        </div>
      </section>

      {/* MISSION */}
      <section className="w-full bg-[#F8FAFC] py-28">
        <div className="max-w-6xl mx-auto px-12 lg:px-20">

          <h2 className="text-3xl font-bold mb-16 text-center text-[#C49A3B]">
            Our Mission Framework
          </h2>

          <div className="grid md:grid-cols-2 gap-12">

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="font-semibold text-xl mb-4 text-blue-500">
                Academic Structure
              </h3>
              <p className="text-gray-600">
                Implement systematic academic planning, continuous assessment,
                and measurable progress tracking.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="font-semibold text-xl mb-4 text-[#C49A3B]">
                Mentorship & Discipline
              </h3>
              <p className="text-gray-600">
                Foster a disciplined environment guided by dedicated mentors
                who ensure accountability and growth.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="font-semibold text-xl mb-4 text-blue-500">
                Digital Transparency
              </h3>
              <p className="text-gray-600">
                Integrate digital systems for academic clarity,
                parent communication, and operational transparency.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="font-semibold text-xl mb-4 text-[#C49A3B]">
                Holistic Development
              </h3>
              <p className="text-gray-600">
                Encourage intellectual, physical, ethical,
                and leadership development.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* INSTITUTIONAL STATEMENT */}
      <section className="w-full bg-blue-500 text-white py-24">
        <div className="max-w-4xl mx-auto px-12 lg:px-20 text-center">

          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Structured Vision. Measured Progress. Sustainable Excellence.
          </h3>

          <p className="opacity-90 leading-relaxed">
            Royal Public School remains committed to disciplined systems,
            transparent academic processes, and long-term institutional growth.
          </p>

        </div>
      </section>
    </>
  );
}