import { FaqItem } from "../lib/content";

export function FaqSection({ faqs }: { faqs: FaqItem[] }) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-[#0A2540]">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <article key={faq.question} className="rounded-xl border border-zinc-200 bg-white p-5">
            <h3 className="text-lg font-semibold text-zinc-900">{faq.question}</h3>
            <p className="mt-2 text-zinc-700">{faq.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
