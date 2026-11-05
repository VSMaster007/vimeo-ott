import Link from "next/link";
import { StoryCard } from "@/components/shared/story-card";
import { Button } from "@/components/ui/button";
import { photos } from "@/lib/placeholders";

export default function WebsiteHomePage() {
  return (
    <div className="mx-auto grid w-full max-w-6xl gap-16 px-4 py-12 sm:px-6 lg:grid-cols-12 lg:py-20">
      <div className="lg:col-span-7">
        <p className="text-xs uppercase tracking-[0.2em] text-accent-secondary">The journal</p>
        <h1 className="mt-4 max-w-xl font-serif text-5xl leading-[1.05] sm:text-7xl">
          Heat, timber, and the long exhale.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-8 text-muted">
          The journal is the editorial half of Sauna Channel. These pages use the same palette as
          the streaming library, with serif headlines and more room for a paragraph. The writing
          is illustrative. It is not a verified company history.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/website/stories">Read stories</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/stream">Watch the channel</Link>
          </Button>
        </div>
      </div>
      <div className="lg:col-span-4 lg:col-start-9 lg:pt-24">
        <StoryCard
          href="/website/stories"
          kicker="Featured essay"
          title="A bench that remembers the weather"
          excerpt="Sample opening for a longer piece about wood, steam, and the way a room keeps the day after you leave it."
          meta="Sample essay · 12 min read"
          imageUrl={photos.forest}
        />
      </div>
    </div>
  );
}
