import HeroSection from "../components/HeroSection";
import { BackgroundRippleEffect } from "../components/ui/background-ripple-effect";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full relative min-h-screen">
      <div className="fixed inset-0 z-0">
        <BackgroundRippleEffect />
      </div>
      <div className="relative z-10 w-full pointer-events-none">
        <div>
          <HeroSection />
        </div>
        <div>
          <SkillsSection />
        </div>
        <div>
          <ProjectsSection />
        </div>
        <div>
          <ContactSection />
        </div>
      </div>
    </main>
  );
}
