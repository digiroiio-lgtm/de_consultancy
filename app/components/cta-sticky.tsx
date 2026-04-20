import Link from "next/link";
import { company } from "../lib/content";

export function StickyCta() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2">
      <Link
        href="/contact"
        className="rounded-full bg-[#0A2540] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#103760]"
      >
        Book Strategy Call
      </Link>
      <a
        href={company.whatsapp}
        className="rounded-full border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow"
      >
        WhatsApp
      </a>
    </div>
  );
}
