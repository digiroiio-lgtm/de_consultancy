import type { Metadata } from "next";
import { ContactMultistepForm } from "../components/contact-multistep-form";
import { FaqSection } from "../components/faq-section";
import { SchemaScript } from "../components/schema-script";
import { company, FaqItem } from "../lib/content";
import { breadcrumbSchema, faqSchema } from "../lib/schema";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book your strategy call via form, WhatsApp, or Calendly.",
  alternates: { canonical: "/contact" },
};

const faqs: FaqItem[] = [
  {
    question: "What happens after form submission?",
    answer: "We review your goals and schedule a focused strategy call with a 90-day action direction.",
  },
];

export default function ContactPage() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

  return (
    <div className="space-y-8">
      <SchemaScript
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <section className="rounded-2xl bg-white p-8">
        <h1 className="text-4xl font-bold text-[#0A2540]">Book a Strategy Call</h1>
        <p className="mt-3 text-zinc-700">Tell us your goal and we will return with a focused 90-day action plan.</p>
      </section>

      <div className="grid gap-6 md:grid-cols-2">
        <ContactMultistepForm />
        <section className="space-y-4 rounded-2xl border border-zinc-200 bg-white p-6">
          <a href={company.whatsapp} className="inline-block rounded-full bg-[#0A2540] px-5 py-3 text-sm font-semibold text-white">
            Contact us on WhatsApp
          </a>
          {calendlyUrl ? (
            <div className="overflow-hidden rounded-xl border border-zinc-200">
              <iframe
                title="Calendly"
                src={calendlyUrl}
                className="h-[420px] w-full"
                loading="lazy"
              />
            </div>
          ) : (
            <p className="rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-4 text-sm text-zinc-600">
              Calendly embed is not configured yet. Set <code>NEXT_PUBLIC_CALENDLY_URL</code> to enable inline booking.
            </p>
          )}
        </section>
      </div>
      <FaqSection faqs={faqs} />
    </div>
  );
}
