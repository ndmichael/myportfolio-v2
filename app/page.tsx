import HeroSection from "@/components/Hero";
import SampleCaseStudy from "@/components/SampleCaseStudy";

import SelectedProjects from "@/components/SelectedProjects";
import SkillsSection from "@/components/SkillsSection";
import Testimonials from "@/components/Testimonials";
import WhatIBuild from "@/components/WhatIBuild";


export default function Home() {
  return (
    <>
        <HeroSection />
        <WhatIBuild />
        <SelectedProjects />
        <SkillsSection />    
        <SampleCaseStudy />
        <Testimonials />
    </>
  );
}
