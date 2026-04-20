import Link from "next/link";

const links = [
  { href: "/management-consulting", label: "Management Consulting" },
  { href: "/export-consulting", label: "Export Consulting" },
  { href: "/industries", label: "Industries" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold tracking-tight text-[#0A2540]">
          DE Consultancy
        </Link>
        <nav aria-label="Primary" className="hidden gap-5 text-sm font-medium text-zinc-700 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-[#0A2540]">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
