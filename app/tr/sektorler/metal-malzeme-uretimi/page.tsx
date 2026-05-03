import type { Metadata } from "next";
import { FaqSection } from "../../../components/faq-section";
import { SchemaScript } from "../../../components/schema-script";
import { FaqItem } from "../../../lib/content";
import { breadcrumbSchema, faqSchema } from "../../../lib/schema";
import { buildAlternatesTr, localeRoutes } from "../../../lib/i18n";

export const metadata: Metadata = {
  title: "Metal ve Malzeme Üretimi Danışmanlığı",
  description:
    "Bakır, alüminyum, çelik ve demir dışı metal üreticileri için yönetim ve ihracat danışmanlığı. Marj koruma ve küresel büyüme odaklı.",
  alternates: buildAlternatesTr(localeRoutes.metalMaterialsProduction),
};

const faqs: FaqItem[] = [
  {
    question: "Bakır ve alüminyum gibi demir dışı metal üreticileriyle çalışıyor musunuz?",
    answer:
      "Evet. Bakır, alüminyum ve diğer demir dışı metal üreticilerinin kendine özgü maliyet yapıları, emtia risklerine maruziyeti ve ihracat karmaşıklığı konusunda uzmanlaşmış danışmanlık sunuyoruz.",
  },
  {
    question: "Metal üretiminde emtia fiyat oynaklığını nasıl yönetiyorsunuz?",
    answer:
      "Hammadde dalgalanmalarından marjları koruyan tedarik kontrolleri ve üretim maliyeti modelleri kuruyoruz; fiyatlandırma mimarisini gerçekleşen değere göre hizalıyoruz.",
  },
];

export default function MetalMalzemeUretimiPage() {
  return (
    <div>
      <SchemaScript
        data={[
          breadcrumbSchema([
            { name: "Ana Sayfa", path: "/tr" },
            { name: "Metal ve Malzeme Üretimi", path: "/tr/sektorler/metal-malzeme-uretimi" },
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
        <p className="label" style={{ marginBottom: 20 }}>Sektörler</p>
        <h1 className="h1" style={{ color: "var(--fg)", maxWidth: 720, marginBottom: 16 }}>
          Metal ve Malzeme Üretimi Danışmanlığı
        </h1>
        <p className="body-lg" style={{ color: "var(--muted)", maxWidth: 560, marginBottom: 48 }}>
          Bakır, alüminyum, çelik ve demir dışı metal üretim süreçleri. Ambalaj, gıda üretimi ve
          bakır gibi demir dışı metal işleme dahil olmak üzere karmaşık üretim sektörlerinde
          çalışıyoruz.
        </p>

        <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--fg)", marginTop: 32, marginBottom: 10 }}>
          Zorluklar
        </h2>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: 12,
            marginTop: 10,
          }}
        >
          <li style={{ fontSize: 15, color: "var(--muted)", paddingLeft: 0, display: "flex", gap: 10 }}>
            <span style={{ color: "#a100ff" }}>→</span>Emtia fiyat oynaklığı ve marj baskısı
          </li>
          <li style={{ fontSize: 15, color: "var(--muted)", paddingLeft: 0, display: "flex", gap: 10 }}>
            <span style={{ color: "#a100ff" }}>→</span>Enerji maliyeti riski ve üretim verimliliği açıkları
          </li>
          <li style={{ fontSize: 15, color: "var(--muted)", paddingLeft: 0, display: "flex", gap: 10 }}>
            <span style={{ color: "#a100ff" }}>→</span>İhracat uyumu ve küresel fiyatlandırma karmaşıklığı
          </li>
        </ul>

        <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--fg)", marginTop: 28, marginBottom: 10 }}>
          Çözümler
        </h3>
        <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.65 }}>
          Üretim maliyeti modellemesi, tedarik kontrolleri, fabrika düzeyinde verimlilik optimizasyonu
          ve demir dışı piyasalar için özelleştirilmiş fiyatlandırma mimarisine sahip ihracat kanalı
          geliştirme.
        </p>
        <p style={{ fontSize: 15, color: "var(--fg-weaker)", marginTop: 16 }}>
          Ambalaj, gıda üretimi ve bakır gibi demir dışı metal işleme dahil olmak üzere karmaşık
          üretim sektörlerinde çalışıyoruz.
        </p>
      </section>
      <FaqSection faqs={faqs} locale="tr" />
    </div>
  );
}
