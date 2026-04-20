import type { Metadata } from "next";
import Link from "next/link";
import { SchemaScript } from "../../components/schema-script";
import { FaqSection } from "../../components/faq-section";
import { breadcrumbSchema, faqSchema } from "../../lib/schema";
import { buildAlternatesTr, localeRoutes } from "../../lib/i18n";
import type { FaqItem } from "../../lib/content";

export const metadata: Metadata = {
  title: "Advisera Global Hakkında",
  description:
    "Uygulama odaklı danışmanlık ortağınız. Ölçülebilir karlılık ve ihracat büyümesi arayan üreticiler için.",
  alternates: buildAlternatesTr(localeRoutes.about),
};

const faqs: FaqItem[] = [
  {
    question: "Danışmanlık süreçlerini kim yürütüyor?",
    answer: "Kurucu liderliğinde, deneyimli danışmanlık operatörlerin uygulamalı desteğiyle yürütülen hizmetler.",
  },
  {
    question: "Hangi sektörlerde çalışıyorsunuz?",
    answer:
      "Üretim, ambalaj, gıda üretimi ve endüstriyel sektörlerde faaliyet gösteriyoruz.",
  },
];

const values = [
  {
    title: "Tavsiye Değil, Uygulama",
    desc: "Slayt sunumları değil, sistemler kuruyoruz. Her proje, ekibinizin sahiplendiği çalışan süreçlerle tamamlanır.",
  },
  {
    title: "Yalnızca Ölçülebilir",
    desc: "Temel, hedef ve gerçekleşen değer takibi olmadan hiçbir projeye başlamıyoruz. ROI tartışılmazdır.",
  },
  {
    title: "Üretici Odaklı",
    desc: "Yalnızca üretim, ambalaj, gıda üretimi ve endüstriyel sektörlerde çalışıyoruz.",
  },
  {
    title: "Küresel Hırs",
    desc: "Türk fabrikalarından ABD raflarına — kalıcı ihracat altyapısı kuruyoruz.",
  },
];

export default function TrAboutPage() {
  return (
    <div>
      <SchemaScript
        data={[
          breadcrumbSchema([
            { name: "Ana Sayfa", path: "/tr" },
            { name: "Hakkımızda", path: "/tr/hakkimizda" },
          ]),
          faqSchema(faqs),
        ]}
      />

      {/* Hero */}
      <section
        style={{
          paddingBlock: "clamp(120px,14vw,200px) clamp(80px,10vw,160px)",
          paddingInline: "clamp(24px,5vw,80px)",
          borderBottom: "1px solid var(--border)",
          position: "relative",
          overflow: "hidden",
        }}
        className="max-w-site"
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: -100,
            left: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "#a100ff",
            filter: "blur(120px)",
            opacity: 0.12,
            pointerEvents: "none",
          }}
        />
        <p className="label" style={{ marginBottom: 20 }}>Biz Kimiz</p>
        <h1 className="h1" style={{ color: "var(--fg)", maxWidth: 680, marginBottom: 32 }}>
          Advisera Global Hakkında
        </h1>
        <p className="body-lg" style={{ color: "var(--muted)", maxWidth: 620, marginBottom: 16 }}>
          Kurucumuz bu firmayı üreticiler için strateji ile uygulama arasındaki boşluğu kapatmak için kurdu. Biz önce operatörüz — her proje gerçekleşen FAVÖK iyileştirmesi, nakit akışı etkisi ve ihracat geliri büyümesiyle ölçülür.
        </p>
        <p className="body-lg" style={{ color: "var(--fg-weaker)", maxWidth: 580 }}>
          Akademik bir danışmanlık firması değiliz. Ekibinizin sürdürebileceği sistemler kurmak için ticari ve operasyonel ritminizin içinde çalışıyoruz.
        </p>
      </section>

      {/* Values */}
      <section
        style={{
          paddingBlock: "clamp(64px,8vw,120px)",
          paddingInline: "clamp(24px,5vw,80px)",
          borderBottom: "1px solid var(--border)",
        }}
        className="max-w-site"
      >
        <p className="label" style={{ marginBottom: 16 }}>İlkelerimiz</p>
        <h2 className="h2" style={{ color: "var(--fg)", marginBottom: "clamp(32px,4vw,56px)" }}>Nasıl Çalışıyoruz</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(280px, 100%), 1fr))", gap: 20 }}>
          {values.map((v) => (
            <article key={v.title} className="card" style={{ padding: "28px 28px" }}>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: "var(--fg)", marginBottom: 10, letterSpacing: "-0.01em" }}>
                {v.title}
              </h3>
              <p style={{ fontSize: 14, color: "var(--fg-weaker)", lineHeight: 1.65 }}>{v.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          paddingBlock: "clamp(64px,8vw,120px)",
          paddingInline: "clamp(24px,5vw,80px)",
          background: "var(--bg)",
          borderTop: "1px solid var(--border)",
        }}
        className="max-w-site"
      >
        <h2 className="h2" style={{ color: "var(--fg)", marginBottom: 16 }}>Birlikte Çalışmaya Hazır mısınız?</h2>
        <p style={{ fontSize: 17, color: "var(--muted)", marginBottom: 32, maxWidth: 440 }}>
          Hedefinizi paylaşın, 90 günlük odaklı bir aksiyon planıyla geri dönelim.
        </p>
        <Link href="/tr/iletisim" className="btn-primary">
          Strateji Görüşmesi Ayırtın →
        </Link>
      </section>

      <FaqSection faqs={faqs} locale="tr" />
    </div>
  );
}
