import { FaqItem } from "../lib/content";
import type { Locale } from "../lib/i18n";

export function FaqSection({ faqs, locale = "en" }: { faqs: FaqItem[]; locale?: Locale }) {
  const label = locale === "tr" ? "SSS" : "FAQ";
  const heading = locale === "tr" ? "Sıkça Sorulan Sorular" : "Frequently Asked Questions";

  return (
    <section
      style={{
        background: "var(--bg)",
        paddingBlock: "clamp(80px,10vw,160px)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-site" style={{ paddingInline: "clamp(24px,5vw,80px)" }}>
        <p className="label" style={{ marginBottom: 16 }}>{label}</p>
        <h2 className="h2" style={{ color: "var(--fg)", marginBottom: "clamp(40px,5vw,64px)" }}>
          {heading}
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(340px, 100%), 1fr))",
            gap: 24,
          }}
        >
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="card"
              style={{ padding: "28px 32px" }}
            >
              <h3
                style={{
                  fontSize: 17,
                  fontWeight: 700,
                  color: "var(--fg)",
                  lineHeight: 1.3,
                  letterSpacing: "-0.01em",
                  marginBottom: 12,
                }}
              >
                {faq.question}
              </h3>
              <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.65 }}>
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
