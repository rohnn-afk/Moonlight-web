export default function CheckoutPage() {
  const summary = [
    ["Secure payment", "Card, wallet, and gift-card ready checkout."],
    ["Delivery", "Tracked premium delivery with dispatch updates."],
    ["Exchanges", "Size exchanges accepted on eligible unworn pieces."],
  ];

  return (
    <main className="mx-auto max-w-5xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <p className="text-xs uppercase tracking-[0.32em] text-[#c8b68a]">Checkout</p>
      <div className="mt-4 grid gap-8 lg:grid-cols-[0.75fr_0.25fr] lg:items-start">
        <div>
          <h1 className="editorial-serif text-6xl leading-none">Calm, secure checkout.</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#dde6f2]/68">
            Review your pieces, confirm delivery details, and complete payment
            through a focused checkout experience designed for premium orders.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {summary.map(([title, copy]) => (
              <div key={title} className="rounded-lg border border-white/12 bg-white/[0.035] p-5">
                <h2 className="text-sm font-medium text-[#f7f1e8]">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-[#dde6f2]/62">{copy}</p>
              </div>
            ))}
          </div>
        </div>
        <aside className="rounded-lg border border-[#c8b68a]/18 bg-[#c8b68a]/10 p-5">
          <p className="text-xs uppercase tracking-[0.22em] text-[#c8b68a]">Order care</p>
          <p className="mt-3 text-sm leading-6 text-[#dde6f2]/70">
            Stock is reserved when an item is added to checkout. Taxes and
            delivery options are finalized before payment.
          </p>
        </aside>
      </div>
    </main>
  );
}
