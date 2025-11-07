import { caseStudies } from "@/data/caseStudies";
import HeroCaseStudy from "@/components/case-studies/HeroCaseStudy";
import CaseContext from "@/components/case-studies/CaseContext";
import CaseApproach from "@/components/case-studies/CaseApproach";
import CaseResults from "@/components/case-studies/CaseResults";
import CaseStacks from "@/components/case-studies/CaseStacks";

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    

  const { slug } = await params; 
  const data = caseStudies.find((item) => item.slug === slug);

  if (!data) return <div className="p-10 text-center">
    <p className="my-32">Case study not found.</p>
  </div>;

  return (
    <div className="space-y-20">
      <HeroCaseStudy 
        title={data.title} 
        tagline={data.tagline} 
        media={data.media.hero}
        />

        <CaseContext 
        role={data.role} 
        overview={data.overview} 
        context={data.context}
        media={data.media.context}
        />

        <CaseStacks stack={data.stack} />

        <CaseApproach
            approach={data.approach}
            features={data.features}
            media={data.media.approach}          // ✅ Single image
            featureMedia={data.media.features}   // ✅ Array
            />

        <CaseResults 
        results={data.results} 
        media={data.media.results}
        />


      <div className="flex gap-4 pt-6">
        {data.github && (
          <a href={data.github} target="_blank" className="primary-button">
            View GitHub
          </a>
        )}
        {data.live && (
          <a href={data.live} target="_blank" className="primary-button-secondary">
            View Live Project
          </a>
        )}
      </div>
    </div>
  );
}
