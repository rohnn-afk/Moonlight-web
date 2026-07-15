import { PolicyContent } from "@/app/policies/policy-content";

export default function TermsPolicyPage() {
  return (
    <PolicyContent
      title="Terms"
      sections={[
        {
          title: "Orders",
          body: "Orders are accepted subject to stock availability, payment authorization, and accurate delivery information.",
        },
        {
          title: "Pricing",
          body: "Prices, promotions, and delivery costs are shown before checkout and may change between browsing sessions.",
        },
        {
          title: "Product care",
          body: "Clients are responsible for following garment care guidance to preserve silk, lace, and delicate finishes.",
        },
      ]}
    />
  );
}
