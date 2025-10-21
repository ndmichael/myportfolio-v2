import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SelectedProjects from "@/components/SelectedProjects";
import WhatIBuild from "@/components/WhatIBuild";


export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WhatIBuild />
        <SelectedProjects />
        {/* Later: <ProjectsPreview />, <Testimonials />, etc. */}
      </main>
      
    </>
  );
}
