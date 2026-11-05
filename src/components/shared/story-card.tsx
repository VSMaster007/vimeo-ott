import Link from "next/link";
import { SafeImage } from "@/components/shared/safe-image";

export type StoryCardProps = {
  href: string;
  kicker: string;
  title: string;
  excerpt: string;
  meta: string;
  imageUrl?: string | null;
};

export function StoryCard({ href, kicker, title, excerpt, meta, imageUrl }: StoryCardProps) {
  return (
    <article className="grid gap-4">
      <SafeImage src={imageUrl} alt="" aspectClassName="aspect-[4/5] sm:aspect-[5/4]" className="rounded-2xl" />
      <p className="text-[11px] uppercase tracking-[0.18em] text-accent-secondary">{kicker}</p>
      <h3 className="font-serif text-2xl leading-tight">
        <Link href={href} className="hover:text-accent">
          {title}
        </Link>
      </h3>
      <p className="text-sm leading-7 text-muted">{excerpt}</p>
      <p className="text-xs uppercase tracking-[0.14em] text-muted">{meta}</p>
    </article>
  );
}
