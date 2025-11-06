// /components/case-studies/CaseApproach.tsx

export default function CaseApproach({
  approach,
  features,
}: {
  approach: string[];
  features: string[];
}) {
  return (
    <section className="space-y-10">
      <div>
        <h2 className="text-2xl font-semibold">Approach</h2>
        <ul className="list-disc list-inside text-gray-400 space-y-2">
          {approach.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold">Key Features</h2>
        <ul className="list-disc list-inside text-gray-400 space-y-2">
          {features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
