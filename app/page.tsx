import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";
import WhatIBuild from "@/components/WhatIBuild";


export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WhatIBuild />
        {/* Later: <ProjectsPreview />, <Testimonials />, etc. */}
      </main>
      
    </>
  );
}
