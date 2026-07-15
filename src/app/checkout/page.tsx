export default function CheckoutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <p className="text-xs uppercase tracking-[0.32em] text-[#c8b68a]">Checkout</p>
      <h1 className="editorial-serif mt-4 text-6xl">Calm, secure checkout.</h1>
      <p className="mt-6 text-base leading-8 text-[#dde6f2]/68">
        In production this route redirects to Shopify Checkout after creating or
        updating the Storefront API cart. The visual system stays boutique-like,
        while payment, tax, shipping, and discounts remain reliable.
      </p>
    </main>
  );
}
