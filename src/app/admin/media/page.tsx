import { RouteFallback } from "@/components/shared/route-fallback";

export default function AdminMediaPage() {
  return (
    <RouteFallback
      title="Media"
      description="Media rows store a URL, preview, alt text, caption, and type. There is no file upload."
    />
  );
}
