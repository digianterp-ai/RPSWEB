import Hero from "@/components/layout/Hero";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Hero />
        <Header />
      </div>

      {/* Next sections */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Structured Academic Framework
          </h2>
        </div>
      </section>
    </>
  );
}