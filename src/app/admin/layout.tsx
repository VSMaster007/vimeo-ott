import { SiteFooter } from "@/components/shared/site-footer";
import { SiteNav } from "@/components/shared/site-nav";

const items = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/articles", label: "Articles" },
  { href: "/admin/categories", label: "Categories" },
  { href: "/admin/authors", label: "Authors" },
  { href: "/admin/media", label: "Media" },
  { href: "/admin/settings", label: "Settings" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-background">
      <div className="sticky top-0 z-40 border-b border-accent bg-card px-4 py-3 text-sm leading-6 sm:px-6">
        <span className="font-medium text-accent">Local demonstration.</span> This admin is open
        on this machine and is not production-secured software.
      </div>
      <div className="flex min-h-0 flex-1 flex-col md:flex-row">
        <SiteNav homeHref="/admin" brand="Studio" items={items} variant="admin" />
        <div className="min-w-0 flex-1 px-4 py-8 sm:px-6 lg:px-8">{children}</div>
      </div>
      <SiteFooter
        links={[
          { href: "/", label: "Intro" },
          { href: "/stream", label: "Watch" },
          { href: "/website", label: "Journal" },
        ]}
      />
    </div>
  );
}
