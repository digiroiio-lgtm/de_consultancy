import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you requested could not be found.",
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-[#0A2540]">404</p>
      <h1 className="mt-4 text-4xl font-bold text-zinc-900">Page not found</h1>
      <p className="mt-4 text-zinc-600">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Link
          href="/"
          className="rounded-full bg-[#0A2540] px-6 py-3 text-sm font-semibold text-white"
        >
          Go to homepage
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-800"
        >
          Book Strategy Call
        </Link>
      </div>
      <nav className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-zinc-600">
        <Link href="/management-consulting" className="hover:text-[#0A2540]">Management Consulting</Link>
        <Link href="/export-consulting" className="hover:text-[#0A2540]">Export Consulting</Link>
        <Link href="/industries" className="hover:text-[#0A2540]">Industries</Link>
        <Link href="/case-studies" className="hover:text-[#0A2540]">Case Studies</Link>
        <Link href="/about" className="hover:text-[#0A2540]">About</Link>
      </nav>
    </div>
  );
}
