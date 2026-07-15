type PolicySection = {
  title: string;
  body: string;
};

export function PolicyContent({
  title,
  sections,
}: {
  title: string;
  sections: PolicySection[];
}) {
  return (
    <main className="mx-auto max-w-3xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <p className="text-xs uppercase tracking-[0.32em] text-[#c8b68a]">Policy</p>
      <h1 className="editorial-serif mt-4 text-6xl">{title}</h1>
      <div className="mt-10 grid gap-4">
        {sections.map((section) => (
          <section key={section.title} className="rounded-lg border border-white/12 bg-white/[0.035] p-5">
            <h2 className="text-sm font-medium text-[#f7f1e8]">{section.title}</h2>
            <p className="mt-2 text-sm leading-7 text-[#dde6f2]/68">{section.body}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
