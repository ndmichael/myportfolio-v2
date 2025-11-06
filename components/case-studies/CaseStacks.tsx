export default function CaseStacks({ stack }: { stack: string[] }) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Tech Stack</h2>
      <div className="flex flex-wrap gap-3">
        {stack.map((item, i) => (
          <span key={i} className="px-3 py-1 bg-gray-800 rounded-full text-sm">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
