import HeroSection from "@/components/Hero";

import SelectedProjects from "@/components/SelectedProjects";
import SkillsSection from "@/components/SkillsSection";
import WhatIBuild from "@/components/WhatIBuild";


export default function Home() {
  return (
    <>
        <HeroSection />
        <WhatIBuild />
        <SelectedProjects />
        <SkillsSection />    
    </>
  );
}
