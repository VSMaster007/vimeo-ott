import Link from "next/link";
import { MediaCard } from "@/components/shared/media-card";
import { SafeImage } from "@/components/shared/safe-image";
import { Button } from "@/components/ui/button";
import { photos } from "@/lib/placeholders";

const titles = [
  {
    href: "/stream/browse",
    title: "The Art of Slow Living",
    category: "Essays",
    duration: "42 min",
    description: "A sample feature about heat, silence, and the pace of a wooden room.",
    year: "2024",
    imageUrl: photos.lake,
    featured: true,
  },
  {
    href: "/stream/browse",
    title: "Steam Over the Lake",
    category: "Places",
    duration: "28 min",
    description: "Dawn light on water, and the first firing of a lakeside stove.",
    year: "2023",
    imageUrl: photos.dawn,
  },
  {
    href: "/stream/browse",
    title: "Timber, Stone, Heat",
    category: "Architecture",
    duration: "36 min",
    description: "How a small building holds warmth without raising its voice.",
    year: "2022",
    imageUrl: photos.timber,
  },
  {
    href: "/stream/browse",
    title: "The Night Firing",
    category: "Ritual",
    duration: "19 min",
    description: "A short portrait of the hours after the benches have gone quiet.",
    year: "2025",
    imageUrl: photos.forest,
  },
];

export default function StreamHomePage() {
  return (
    <div>
      <section className="relative isolate min-h-[70vh] overflow-hidden">
        <SafeImage
          src={photos.stones}
          alt=""
          aspectClassName=""
          className="absolute inset-0 h-full min-h-[70vh] w-full rounded-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/10" />
        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-end px-4 pb-12 sm:px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">Featured title</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-medium tracking-tight sm:text-6xl">
            The Art of Slow Living
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-6 text-foreground/85 sm:text-base">
            A cinematic sample for the channel hero. The picture is a fixed photograph, and
            playback will use a public placeholder film.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/stream/browse">Browse the library</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/stream/browse">All titles</Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="mx-auto flex max-w-6xl items-end justify-between gap-4 px-4 sm:px-6">
          <h2 className="text-sm uppercase tracking-[0.18em] text-muted">In the heat</h2>
        </div>
        <div className="mt-4 flex max-w-full gap-4 overflow-x-auto px-4 pb-4 sm:px-6">
          {titles.map((title) => (
            <div key={title.title} className="w-64 shrink-0 sm:w-72">
              <MediaCard {...title} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
