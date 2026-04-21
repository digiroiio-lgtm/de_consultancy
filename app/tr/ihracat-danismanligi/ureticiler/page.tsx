import type { Metadata } from "next";
import Link from "next/link";
import { FaqSection } from "../../../components/faq-section";
import { SchemaScript } from "../../../components/schema-script";
import { breadcrumbSchema, faqSchema } from "../../../lib/schema";
import { buildAlternatesTr, localeRoutes } from "../../../lib/i18n";
import type { FaqItem } from "../../../lib/content";

export const metadata: Metadata = {
  title: "Üreticiler için İhracat Danışmanlığı",
  description: "CEO, CFO ve ihracat yöneticileri için tekrarlanabilir küresel satış sistemleri kuran B2B ihracat strateji ve uygulama modeli.",
  alternates: buildAlternatesTr(localeRoutes.exportManufacturers),
};

const faqs: FaqItem[] = [
  {
    question: "Bu programdan en çok hangi üreticiler yararlanır?",
    answer:
      "Güçlü üretim kapasitesine sahip ancak tutarsız ihracat pipeline'ı, fiyatlandırma yapısı veya distribütör dönüşümü olan şirketler.",
  },
  {
    question: "Ne kadar sürede başlayabiliriz?",
    answer:
      "Çoğu ekip, strateji, teklif mimarisi ve uyum temelleri tamamlandıktan 30-45 gün sonra pazar erişimine başlar.",
  },
];

export default function TrManufacturersExportPage() {
  return (
    <div>
      <SchemaScript
        data={[
          breadcrumbSchema([
            { name: "Ana Sayfa", path: "/tr" },
            { name: "İhracat Danışmanlığı", path: "/tr/ihracat-danismanligi" },
            { name: "Üreticiler", path: "/tr/ihracat-danismanligi/ureticiler" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <section
        style={{
          paddingBlock: "clamp(120px,14vw,200px) clamp(80px,10vw,120px)",
          paddingInline: "clamp(24px,5vw,80px)",
          borderBottom: "1px solid var(--border)",
        }}
        className="max-w-site"
      >
        <h1 className="h1" style={{ color: "var(--fg)", maxWidth: 720, marginBottom: 16 }}>
          Üreticiler için İhracat Danışmanlığı
        </h1>
        <p className="body-lg" style={{ color: "var(--muted)", maxWidth: 540 }}>
          Tekrarlanabilir küresel satış sistemleri kuran CEO, CFO ve ihracat yöneticileri için tasarlandı.
        </p>
      </section>
      <section className="card" style={{ padding: "clamp(28px,4vw,48px)", marginBlock: "clamp(40px,6vw,80px)" }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: "var(--fg)", marginBottom: 16 }}>Uygulama Planı</h2>
        <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            "Marj potansiyeline göre ülke ve segment önceliklendirmesi",
            "Erişim senaryoları ve nitelendirme kriterleriyle distribütör motoru",
            "İhracat teklif mimarisi (SKU, fiyatlandırma, koşullar, uyum)",
            "Haftalık pipeline yönetimi ve dönüşüm KPI takibi",
          ].map((item) => (
            <li key={item} style={{ fontSize: 15, color: "var(--muted)", display: "flex", gap: 10 }}>
              <span style={{ color: "#a100ff" }}>→</span>
              {item}
            </li>
          ))}
        </ol>
      </section>
      <p style={{ fontSize: 14, color: "var(--fg-weaker)", marginTop: 16, paddingInline: "clamp(24px,5vw,80px)" }}>
        Ayrıca{" "}
        <Link href="/tr/ihracat-danismanligi/abd-pazar-girisi" className="btn-outline" style={{ fontSize: 13 }}>
          ABD pazar giriş danışmanlığı
        </Link>{" "}
        ve{" "}
        <Link href="/tr/referans-calismalar" className="btn-outline" style={{ fontSize: 13 }}>
          referans çalışmalarımıza
        </Link>{" "}
        göz atın.
      </p>
      <FaqSection faqs={faqs} locale="tr" />
    </div>
  );
}
