import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
    </main>
  );
}
