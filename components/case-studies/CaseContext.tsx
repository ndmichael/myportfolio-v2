// /components/case-studies/CaseContext.tsx

export default function CaseContext({
  overview,
  role,
  context,
}: {
  overview: string;
  role: string;
  context: string;
}) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Project Context</h2>

      <p className="text-gray-300">{overview}</p>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-medium text-gray-100">Your Role</h3>
          <p className="text-gray-400">{role}</p>
        </div>

        <div>
          <h3 className="font-medium text-gray-100">Background</h3>
          <p className="text-gray-400">{context}</p>
        </div>
      </div>
    </section>
  );
}
