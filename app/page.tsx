import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        {/* Later: <ProjectsPreview />, <Testimonials />, etc. */}
      </main>
      
    </>
  );
}
