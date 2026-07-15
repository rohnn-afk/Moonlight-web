import { PolicyContent } from "@/app/policies/policy-content";

export default function ReturnsPolicyPage() {
  return (
    <PolicyContent
      title="Returns"
      sections={[
        {
          title: "Eligibility",
          body: "Unworn pieces with tags attached may be returned or exchanged within the stated return window shown at checkout.",
        },
        {
          title: "Exchanges",
          body: "Size exchanges are prioritized where stock is available, with reserved inventory released only after the request is confirmed.",
        },
        {
          title: "Care standard",
          body: "Silk and lace items must be returned free of fragrance, marks, and wear so every client receives boutique-grade product.",
        },
      ]}
    />
  );
}
