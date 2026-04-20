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
    <div>
      <SchemaScript
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
          faqSchema(faqs),
        ]}
      />

      {/* Hero */}
      <section
        style={{
          paddingBlock: "clamp(120px,14vw,200px) clamp(80px,10vw,120px)",
          paddingInline: "clamp(24px,5vw,80px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
        className="max-w-site"
      >
        <p className="label" style={{ marginBottom: 20 }}>Get In Touch</p>
        <h1 className="h1" style={{ color: "#fff", maxWidth: 640, marginBottom: 24 }}>
          Book a Strategy Call
        </h1>
        <p className="body-lg" style={{ color: "rgba(255,255,255,0.55)", maxWidth: 480 }}>
          Tell us your goal and we will return with a focused 90-day action plan — no generic slides.
        </p>
      </section>

      {/* Form + sidebar */}
      <section
        style={{
          paddingBlock: "clamp(64px,8vw,120px)",
          paddingInline: "clamp(24px,5vw,80px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
        className="max-w-site"
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(32px,5vw,80px)",
            alignItems: "start",
          }}
        >
          <ContactMultistepForm />

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {/* WhatsApp */}
            <a
              href={company.whatsapp}
              className="card"
              style={{
                padding: "28px 28px",
                display: "flex",
                alignItems: "center",
                gap: 16,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: "rgba(37,211,102,0.1)",
                  border: "1px solid rgba(37,211,102,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontSize: 22,
                }}
              >
                💬
              </div>
              <div>
                <p style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 4 }}>WhatsApp</p>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>Direct message — fastest response</p>
              </div>
            </a>

            {/* Calendly embed or placeholder */}
            {calendlyUrl ? (
              <div
                style={{
                  borderRadius: 16,
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <iframe
                  title="Calendly"
                  src={calendlyUrl}
                  style={{ width: "100%", height: 420, border: "none" }}
                  loading="lazy"
                />
              </div>
            ) : (
              <div
                style={{
                  borderRadius: 16,
                  border: "1px dashed rgba(255,255,255,0.15)",
                  padding: "28px 24px",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", lineHeight: 1.65 }}>
                  Calendly embed is not configured. Set{" "}
                  <code style={{ color: "#a100ff", fontSize: 12 }}>NEXT_PUBLIC_CALENDLY_URL</code>{" "}
                  to enable inline scheduling.
                </p>
              </div>
            )}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            section > div[style*="grid-template-columns: 1fr 1fr"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      <FaqSection faqs={faqs} />
    </div>
  );
}
