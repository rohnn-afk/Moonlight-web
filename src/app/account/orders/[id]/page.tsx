export const dynamicParams = false;

export function generateStaticParams() {
  return [{ id: "sample" }];
}

export default function OrderDetailPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <p className="text-xs uppercase tracking-[0.32em] text-[#c8b68a]">Order detail</p>
      <h1 className="editorial-serif mt-4 text-6xl">Your night ritual is on its way.</h1>
    </main>
  );
}
