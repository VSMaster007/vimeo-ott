import { RouteFallback } from "@/components/shared/route-fallback";

export default function ContactPage() {
  return (
    <RouteFallback
      title="Contact"
      description="A validated form will post to the contact route and store the submission locally."
    />
  );
}
