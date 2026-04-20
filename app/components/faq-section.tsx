import { FaqItem } from "../lib/content";

export function FaqSection({ faqs }: { faqs: FaqItem[] }) {
  return (
    <section
      style={{
        background: "#000",
        paddingBlock: "clamp(80px,10vw,160px)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-site" style={{ paddingInline: "clamp(24px,5vw,80px)" }}>
        <p className="label" style={{ marginBottom: 16 }}>FAQ</p>
        <h2 className="h2" style={{ color: "#fff", marginBottom: "clamp(40px,5vw,64px)" }}>
          Frequently Asked Questions
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
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
                  color: "#fff",
                  lineHeight: 1.3,
                  letterSpacing: "-0.01em",
                  marginBottom: 12,
                }}
              >
                {faq.question}
              </h3>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.65 }}>
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
