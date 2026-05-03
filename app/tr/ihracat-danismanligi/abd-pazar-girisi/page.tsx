import type { Metadata } from "next";
import Link from "next/link";
import { FaqSection } from "../../../components/faq-section";
import { SchemaScript } from "../../../components/schema-script";
import { breadcrumbSchema, faqSchema } from "../../../lib/schema";
import { buildAlternatesTr, localeRoutes } from "../../../lib/i18n";
import type { FaqItem } from "../../../lib/content";

export const metadata: Metadata = {
  title: "Türk Üreticiler için ABD Pazar Girişi",
  description: "Fabrika zemininden imzalı ABD distribütör sözleşmelerine uzanan yapılandırılmış bir rota.",
  alternates: buildAlternatesTr(localeRoutes.exportUsaMarket),
};

const faqs: FaqItem[] = [
  {
    question: "Türkiye'den ABD'ye nasıl verimli ihracat yapabilirim?",
    answer:
      "Segment düzeyinde hedeflemeyle başlayın, ardından erişimi ölçeklendirmeden önce uyum, fiyatlandırma ve distribütör nitelendirmesini hizalayın.",
  },
  {
    question: "En büyük giriş riski nedir?",
    answer:
      "Başarısızlıkların büyük çoğunluğu yalnızca ürün kalitesinden değil, zayıf kanal seçimi ve fiyatlandırma uyumsuzluğundan kaynaklanır.",
  },
];

const steps = [
  ["Pazar Önceliklendirme", "Değer önerinizin en güçlü olduğu eyaletlere ve segmentlere odaklanın."],
  ["Distribütör Nitelendirme", "Kanal uyumu, finansal istikrar ve uygulama kapasitesine sahip iş ortakları seçin."],
  ["İhracat Fiyatlandırma", "Gümrük vergileri, lojistik ve iskontolar genelinde marjı koruyan fiyatlandırma oluşturun."],
  ["Uyum", "Etiketleme, ürün belgelerini ve gümrük hazırlığını tamamlayın."],
] as const;

export default function TrUsaMarketEntryPage() {
  return (
    <div>
      <SchemaScript
        data={[
          breadcrumbSchema([
            { name: "Ana Sayfa", path: "/tr" },
            { name: "İhracat Danışmanlığı", path: "/tr/ihracat-danismanligi" },
            { name: "ABD Pazar Girişi", path: "/tr/ihracat-danismanligi/abd-pazar-girisi" },
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
          Türk Üreticiler için ABD Pazar Girişi
        </h1>
        <p className="body-lg" style={{ color: "var(--muted)", maxWidth: 540 }}>
          Fabrika zemininden imzalı ABD distribütör sözleşmelerine uzanan pratik bir rota.
        </p>
      </section>
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(280px, 100%), 1fr))",
          gap: 20,
          paddingInline: "clamp(24px,5vw,80px)",
          paddingBlock: "clamp(40px,6vw,80px)",
        }}
      >
        {steps.map(([title, copy]) => (
          <article key={title} className="card" style={{ padding: "28px 28px" }}>
            <h2 style={{ fontSize: 17, fontWeight: 700, color: "var(--fg)", marginBottom: 10, letterSpacing: "-0.01em" }}>{title}</h2>
            <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.65 }}>{copy}</p>
          </article>
        ))}
      </section>
      <p style={{ fontSize: 14, color: "var(--fg-weaker)", marginTop: 16, paddingInline: "clamp(24px,5vw,80px)" }}>
        Yol haritası mı istiyorsunuz?{" "}
        <Link href="/tr/iletisim" className="btn-outline" style={{ fontSize: 13 }}>
          Strateji Görüşmesi Planlayın
        </Link>
        .
      </p>
      <FaqSection faqs={faqs} locale="tr" />
    </div>
  );
}
