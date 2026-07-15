export default function OrdersPage() {
  const states = [
    ["Order placed", "Confirmation and receipt sent immediately."],
    ["In preparation", "Pieces are checked, wrapped, and packed."],
    ["Dispatched", "Tracking is sent as soon as the parcel leaves."],
  ];

  return (
    <main className="mx-auto max-w-4xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <p className="text-xs uppercase tracking-[0.32em] text-[#c8b68a]">Orders</p>
      <h1 className="editorial-serif mt-4 text-6xl">Order history</h1>
      <p className="mt-5 max-w-2xl text-base leading-8 text-[#dde6f2]/68">
        Track current purchases, review previous orders, and access exchange
        support from one private wardrobe view.
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {states.map(([title, copy]) => (
          <div key={title} className="rounded-lg border border-white/12 bg-white/[0.035] p-5">
            <h2 className="text-sm font-medium text-[#f7f1e8]">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-[#dde6f2]/62">{copy}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
