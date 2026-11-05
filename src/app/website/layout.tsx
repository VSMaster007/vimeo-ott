import { SiteFooter } from "@/components/shared/site-footer";
import { SiteNav } from "@/components/shared/site-nav";

const items = [
  { href: "/website/stories", label: "Stories" },
  { href: "/website/about", label: "About" },
  { href: "/website/contact", label: "Contact" },
];

export default function WebsiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-background">
      <SiteNav homeHref="/website" brand="Sauna Channel Journal" items={items} variant="website" />
      <div className="min-w-0 flex-1">{children}</div>
      <SiteFooter
        links={[
          { href: "/", label: "Intro" },
          { href: "/stream", label: "Watch" },
          ...items,
        ]}
        note="Editorial shell for the concept demo. The essays are illustrative, not a verified history."
      />
    </div>
  );
}
