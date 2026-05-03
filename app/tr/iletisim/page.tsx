import type { Metadata } from "next";
import { ContactMultistepForm } from "../../components/contact-multistep-form";
import { FaqSection } from "../../components/faq-section";
import { SchemaScript } from "../../components/schema-script";
import { company } from "../../lib/content";
import { breadcrumbSchema, faqSchema } from "../../lib/schema";
import { buildAlternatesTr, localeRoutes } from "../../lib/i18n";
import type { FaqItem } from "../../lib/content";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Strateji görüşmesi ayırtın. Form veya e-posta yoluyla Advisera Global ile iletişime geçin: office@adviseraglobal.com",
  alternates: buildAlternatesTr(localeRoutes.contact),
};

const faqs: FaqItem[] = [
  {
    question: "Form gönderdikten sonra ne olur?",
    answer: "Hedeflerinizi inceleyip 90 günlük aksiyon yönlendirmesiyle odaklı bir strateji görüşmesi planlıyoruz.",
  },
];

export default function TrContactPage() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

  return (
    <div>
      <SchemaScript
        data={[
          breadcrumbSchema([
            { name: "Ana Sayfa", path: "/tr" },
            { name: "İletişim", path: "/tr/iletisim" },
          ]),
          faqSchema(faqs),
        ]}
      />

      {/* Hero */}
      <section
        style={{
          paddingBlock: "clamp(120px,14vw,200px) clamp(80px,10vw,120px)",
          paddingInline: "clamp(24px,5vw,80px)",
          borderBottom: "1px solid var(--border)",
        }}
        className="max-w-site"
      >
        <p className="label" style={{ marginBottom: 20 }}>İletişime Geçin</p>
        <h1 className="h1" style={{ color: "var(--fg)", maxWidth: 640, marginBottom: 24 }}>
          Strateji Görüşmesi Planlayın
        </h1>
        <p className="body-lg" style={{ color: "var(--muted)", maxWidth: 480 }}>
          Hedefinizi paylaşın, 90 günlük odaklı bir aksiyon planıyla geri dönelim — genel slaytlar değil.
        </p>
      </section>

      {/* Form + sidebar */}
      <section
        style={{
          paddingBlock: "clamp(64px,8vw,120px)",
          paddingInline: "clamp(24px,5vw,80px)",
          borderBottom: "1px solid var(--border)",
        }}
        className="max-w-site"
      >
        <div
          className="two-col-grid"
          style={{
            gap: "clamp(32px,5vw,80px)",
            alignItems: "start",
          }}
        >
          <ContactMultistepForm locale="tr" />

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {/* Email */}
            <a
              href={`mailto:${company.email}`}
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
                  background: "rgba(161,0,255,0.1)",
                  border: "1px solid rgba(161,0,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a100ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <p style={{ fontSize: 15, fontWeight: 700, color: "var(--fg)", marginBottom: 4 }}>E-posta</p>
                <p style={{ fontSize: 13, color: "var(--fg-weaker)" }}>{company.email}</p>
              </div>
            </a>

            {/* Calendly embed or placeholder */}
            {calendlyUrl ? (
              <div
                style={{
                  borderRadius: 16,
                  overflow: "hidden",
                  border: "1px solid var(--border)",
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
                  border: "1px dashed var(--border)",
                  padding: "28px 24px",
                  background: "var(--card-bg)",
                }}
              >
                <p style={{ fontSize: 14, color: "var(--fg-dim)", lineHeight: 1.65 }}>
                  Calendly entegrasyonu yapılandırılmamış.{" "}
                  <code style={{ color: "#a100ff", fontSize: 12 }}>NEXT_PUBLIC_CALENDLY_URL</code>{" "}
                  değişkenini ayarlayın.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} locale="tr" />
    </div>
  );
}
