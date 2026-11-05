import { SiteFooter } from "@/components/shared/site-footer";
import { SiteNav } from "@/components/shared/site-nav";

const items = [
  { href: "/stream/browse", label: "Browse" },
  { href: "/stream/categories", label: "Categories" },
  { href: "/stream/search", label: "Search" },
  { href: "/stream/membership", label: "Membership" },
];

export default function StreamLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-background">
      <SiteNav homeHref="/stream" brand="Sauna Channel" items={items} variant="stream" />
      <div className="min-w-0 flex-1">{children}</div>
      <SiteFooter
        links={[
          { href: "/", label: "Intro" },
          { href: "/website", label: "Journal" },
          ...items,
        ]}
        note="Streaming shell for the concept demo. Titles and playback here are sample placeholders."
      />
    </div>
  );
}
