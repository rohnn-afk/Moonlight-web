import { ButtonLink } from "@/components/ui/button";

export default function CartPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 pb-24 pt-32 text-center sm:px-6 lg:px-8">
      <p className="text-xs uppercase tracking-[0.32em] text-[#c8b68a]">Cart</p>
      <h1 className="editorial-serif mt-4 text-6xl">Your cart opens as a drawer.</h1>
      <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-[#dde6f2]/68">
        This fallback page exists for accessibility and direct links. The primary
        cart experience is the soft curtain drawer.
      </p>
      <ButtonLink href="/collections/silk-sets" className="mt-8">Continue shopping</ButtonLink>
    </main>
  );
}
