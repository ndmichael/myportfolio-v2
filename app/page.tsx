import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SelectedProjects from "@/components/SelectedProjects";
import SkillsSection from "@/components/SkillsSection";
import WhatIBuild from "@/components/WhatIBuild";


export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WhatIBuild />
        <SelectedProjects />
        <SkillsSection />
        {/* Later: <ProjectsPreview />, <Testimonials />, etc. */}
      </main>
      
    </>
  );
}
