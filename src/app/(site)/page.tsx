import Hero from "@/components/layout/Hero";
import Header from "@/components/layout/Header";
import WelcomeSection from "./_sections/WelcomeSection";
import HighlightsSection from "./_sections/HighlightsSection";
import AboutSection from "./_sections/AboutSection";
import PillarsSection from "./_sections/PillarsSection";
import StructuredSystemSection from "./_sections/StructuredSystemSection";
import DigitalSection from "./_sections/DigitalSection";
import CompetitiveSection from "./_sections/CompetitiveSection";
import FacilitiesSection from "./_sections/FacilitiesSection";
import VisionMissionSection from "./_sections/VisionMissionSection";
import FinalCTASection from "./_sections/FinalCTASection";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Hero />
        <Header />
      </div>

      {/* Next sections */}
      <section className=" bg-white">
          <WelcomeSection />
          <HighlightsSection />
          <AboutSection />
          <PillarsSection />
          <StructuredSystemSection />
          <DigitalSection />
          <CompetitiveSection />
          <FacilitiesSection />
          <VisionMissionSection />
          <FinalCTASection />
      </section>
    </>
  );
}