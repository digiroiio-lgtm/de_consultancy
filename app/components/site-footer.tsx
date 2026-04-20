import Link from "next/link";
import { company } from "../lib/content";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-10 md:grid-cols-3">
        <div>
          <p className="text-sm font-semibold text-[#0A2540]">DE Consultancy</p>
          <p className="mt-2 text-sm text-zinc-600">Scale profitability. Expand globally.</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-zinc-900">Core Services</p>
          <ul className="mt-2 space-y-1 text-sm text-zinc-600">
            <li>
              <Link href="/management-consulting">Management Consulting</Link>
            </li>
            <li>
              <Link href="/export-consulting">Export Consulting</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-zinc-900">Lead Actions</p>
          <ul className="mt-2 space-y-1 text-sm text-zinc-600">
            <li>
              <Link href="/contact">Book Strategy Call</Link>
            </li>
            <li>
              <a href={company.whatsapp}>WhatsApp</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
