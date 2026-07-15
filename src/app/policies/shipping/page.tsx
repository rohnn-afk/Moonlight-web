import { PolicyContent } from "@/app/policies/policy-content";

export default function ShippingPolicyPage() {
  return (
    <PolicyContent
      title="Shipping"
      sections={[
        {
          title: "Dispatch",
          body: "In-stock pieces are prepared within one business day, with tracking shared as soon as the parcel leaves the studio.",
        },
        {
          title: "Delivery",
          body: "Premium tracked delivery is available on every order, with complimentary thresholds shown before checkout.",
        },
        {
          title: "Packaging",
          body: "Each order is packed in protective, gift-ready materials suitable for silk, lace, and delicate finishes.",
        },
      ]}
    />
  );
}
