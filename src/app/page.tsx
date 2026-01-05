import HeroSection from "../components/HeroSection";
import TechMarquee from "../components/TechMarquee";
import { BackgroundRippleEffect } from "../components/ui/background-ripple-effect";
import { ScrollArea } from "../components/ui/scroll-area";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full relative min-h-screen">
      <div className="fixed inset-0 z-0">
        <BackgroundRippleEffect />
      </div>
      <ScrollArea className="h-screen w-full">
        <div className="relative z-10 w-full pointer-events-none">
          <div className="pointer-events-auto">
            <HeroSection />
          </div>
          <div className="pointer-events-auto">
            <TechMarquee />
          </div>
          <div className="pointer-events-auto">
            <SkillsSection />
          </div>
          <div className="pointer-events-auto">
            <ProjectsSection />
          </div>
          <div className="pointer-events-auto">
            <ContactSection />
          </div>
        </div>
      </ScrollArea>
    </main>
  );
}
