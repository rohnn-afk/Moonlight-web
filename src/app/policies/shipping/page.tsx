export default function ShippingPolicyPage() {
  return <Policy title="Shipping" body="Complimentary premium delivery thresholds, dispatch windows, and tracking details will live here." />;
}

function Policy({ title, body }: { title: string; body: string }) {
  return (
    <main className="mx-auto max-w-3xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <p className="text-xs uppercase tracking-[0.32em] text-[#c8b68a]">Policy</p>
      <h1 className="editorial-serif mt-4 text-6xl">{title}</h1>
      <p className="mt-6 text-base leading-8 text-[#dde6f2]/68">{body}</p>
    </main>
  );
}
