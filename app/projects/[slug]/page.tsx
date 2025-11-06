import { caseStudies } from "@/data/caseStudies";
import HeroCaseStudy from "@/components/case-studies/HeroCaseStudy";
import CaseContext from "@/components/case-studies/CaseContext";
import CaseApproach from "@/components/case-studies/CaseApproach";
import CaseResults from "@/components/case-studies/CaseResults";
import CaseStacks from "@/components/case-studies/CaseStacks";

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const data = caseStudies[params.slug];

  if (!data) return <div className="p-10 text-center">Case study not found.</div>;

  return (
    <div className="space-y-20">
      <HeroCaseStudy title={data.title} tagline={data.tagline} media={data.media} />

      <CaseContext role={data.role} overview={data.overview} context={data.context} />

      <CaseStacks stack={data.stack} />

      <CaseApproach approach={data.approach} features={data.features} />

      <CaseResults results={data.results} />

      {/* optional: links */}
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
