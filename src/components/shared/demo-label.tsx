import { cn } from "@/lib/utils";

export function DemoLabel({ className }: { className?: string }) {
  return (
    <p className={cn("text-[11px] uppercase tracking-[0.18em] text-muted", className)}>
      Concept demonstration · sample content
    </p>
  );
}
