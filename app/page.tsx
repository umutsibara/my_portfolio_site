import Navbar from "@/components/layout/Navbar";
import MeshBackground from "@/components/layout/MeshBackground";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TechStackSection from "@/components/sections/TechStackSection";
import TimelineSection from "@/components/sections/TimelineSection";
import HRSection from "@/components/sections/HRSection";
import AIResumeButton from "@/components/ui/AIResumeButton";

export default function Home() {
  return (
    <>
      {/* Global animated mesh background */}
      <MeshBackground />

      {/* Fixed elements */}
      <Navbar />
      <AIResumeButton />

      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <ProjectsSection />
        <TechStackSection />
        <TimelineSection />
        <HRSection />
      </main>

      <Footer />
    </>
  );
}
