import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { SafeImage } from "@/components/shared/safe-image";

export type MediaCardProps = {
  href: string;
  title: string;
  category: string;
  duration: string;
  description: string;
  year: string;
  imageUrl?: string | null;
  featured?: boolean;
};

export function MediaCard({
  href,
  title,
  category,
  duration,
  description,
  year,
  imageUrl,
  featured = false,
}: MediaCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card">
      <SafeImage src={imageUrl} alt="" aspectClassName="aspect-video" />
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary">{category}</Badge>
          {featured ? <Badge>Featured</Badge> : null}
        </div>
        <h3 className="text-base font-medium leading-snug tracking-tight">{title}</h3>
        <p className="line-clamp-2 text-sm leading-6 text-muted">{description}</p>
        <p className="text-xs uppercase tracking-[0.14em] text-muted">
          {year}
          <span aria-hidden="true"> · </span>
          {duration}
        </p>
        <Link
          href={href}
          className="mt-auto text-sm font-medium text-accent underline-offset-4 hover:underline"
        >
          Watch
        </Link>
      </div>
    </article>
  );
}
