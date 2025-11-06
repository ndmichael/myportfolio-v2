export default function CaseResults({ results }: { results: string[] }) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Results</h2>
      <ul className="list-disc list-inside text-gray-400 space-y-2">
        {results.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>
    </section>
  );
}
