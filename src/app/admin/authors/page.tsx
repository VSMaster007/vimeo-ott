import { RouteFallback } from "@/components/shared/route-fallback";

export default function AdminAuthorsPage() {
  return (
    <RouteFallback
      title="Authors"
      description="Fictional authors, with a name, portrait, bio, and an internal email, will be managed here."
    />
  );
}
