import { PolicyContent } from "@/app/policies/policy-content";

export default function PrivacyPolicyPage() {
  return (
    <PolicyContent
      title="Privacy"
      sections={[
        {
          title: "Customer data",
          body: "Contact, delivery, and order details are used to fulfill purchases, provide support, and maintain account history.",
        },
        {
          title: "Analytics",
          body: "Store performance signals may be measured to improve browsing, product discovery, and checkout quality.",
        },
        {
          title: "Control",
          body: "Customers can request updates to account information or ask for support with privacy-related questions through client care.",
        },
      ]}
    />
  );
}
