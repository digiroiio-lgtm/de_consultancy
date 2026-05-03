import type { Metadata } from "next";
import Link from "next/link";
import { SchemaScript } from "../../components/schema-script";
import { FaqSection } from "../../components/faq-section";
import { breadcrumbSchema, faqSchema } from "../../lib/schema";
import { buildAlternatesTr, localeRoutes } from "../../lib/i18n";
import type { FaqItem } from "../../lib/content";

export const metadata: Metadata = {
  title: "İhracat Danışmanlığı",
  description:
    "Üreticiler için küresel genişleme danışmanlığı: pazar giriş stratejisi, distribütör sistemleri, ihracat fiyatlandırma ve uyum.",
  alternates: buildAlternatesTr(localeRoutes.exportConsulting),
};

const faqs: FaqItem[] = [
  {
    question: "ABD ve AB pazar girişini destekliyor musunuz?",
    answer: "Evet. Fiyatlandırma, uyum, kanal hedefleri ve lansman kilometre taşlarını kapsayan pazara özgü giriş planları geliştiriyoruz.",
  },
  {
    question: "Distribütör bulmamıza yardımcı olabilir misiniz?",
    answer: "Evet. Nitelendirme, müzakere ve işe alım süreci tasarımıyla tekrarlanabilir distribütör bulma sistemleri uyguluyoruz.",
  },
];

const capabilities = [
  ["Pazar Giriş Stratejisi (ABD / AB / KİK)", "Hedef segment seçimi, ürün-pazar uyumu ve lansman sıralama."],
  ["Distribütör Bulma Sistemleri", "Pipeline tasarımı, nitelendirme skorkartları ve kapanış süreci."],
  ["İhracat Piyasaları İçin Fiyatlandırma", "Bölge ve Incoterms'e göre kanal-hazır marj mimarisi."],
  ["Lojistik &amp; Uyum", "Ticaret belgeleri, etiketleme kontrolleri ve risk azaltma rehberleri."],
  ["Özel Marka Stratejisi", "Ölçek ve yinelenen talep için özel marka ortaklık modeli."],
];

export default function TrExportConsultingPage() {
  return (
    <div>
      <SchemaScript
        data={[
          breadcrumbSchema([
            { name: "Ana Sayfa", path: "/tr" },
            { name: "İhracat Danışmanlığı", path: "/tr/ihracat-danismanligi" },
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
            top: -80,
            right: -150,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "#c850ff",
            filter: "blur(120px)",
            opacity: 0.15,
            pointerEvents: "none",
          }}
        />
        <p className="label" style={{ marginBottom: 20 }}>İhracat Danışmanlığı</p>
        <h1 className="h1" style={{ color: "var(--fg)", maxWidth: 720, marginBottom: 24 }}>
          Üreticiler için Küresel Genişleme
        </h1>
        <p className="body-lg" style={{ color: "var(--muted)", maxWidth: 540, marginBottom: 40 }}>
          Yerel üreticiden küresel tedarikçiye — yapılandırılmış pazar giriş uygulaması, distribütör sistemleri ve ihracat fiyatlandırma mimarisiyle.
        </p>
        <Link href="/tr/iletisim" className="btn-primary">
          İhracat Planınızı Alın →
        </Link>
      </section>

      {/* Capabilities */}
      <section
        style={{ paddingBlock: "clamp(64px,8vw,120px)", paddingInline: "clamp(24px,5vw,80px)", borderBottom: "1px solid var(--border)" }}
        className="max-w-site"
      >
        <p className="label" style={{ marginBottom: 16 }}>Yetkinlikler</p>
        <h2 className="h2" style={{ color: "var(--fg)", marginBottom: "clamp(32px,4vw,56px)" }}>Ne Yapıyoruz</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(280px, 100%), 1fr))", gap: 20 }}>
          {capabilities.map(([title, copy]) => (
            <article key={title} className="card" style={{ padding: "28px 28px" }}>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: "var(--fg)", marginBottom: 10, letterSpacing: "-0.01em" }}
                dangerouslySetInnerHTML={{ __html: title }} />
              <p style={{ fontSize: 14, color: "var(--fg-weaker)", lineHeight: 1.65 }}
                dangerouslySetInnerHTML={{ __html: copy }} />
            </article>
          ))}
        </div>
      </section>

      {/* Framework */}
      <section
        style={{
          paddingBlock: "clamp(64px,8vw,120px)",
          paddingInline: "clamp(24px,5vw,80px)",
          borderBottom: "1px solid var(--border)",
          background: "var(--section-dark)",
        }}
        className="max-w-site"
      >
        <h2 className="h2" style={{ color: "var(--fg)", marginBottom: 16 }}>Yerel Üretici → Küresel Tedarikçi</h2>
        <p style={{ fontSize: 17, color: "var(--muted)", maxWidth: 520, marginBottom: 32 }}>
          İhracat hırsınızı disiplinli bir sisteme dönüştürüyoruz: pazar tezi, pazara giriş yolu ve ticari uygulama ritmi.
        </p>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Link href="/tr/ihracat-danismanligi/ureticiler" className="btn-outline" style={{ fontSize: 13 }}>
            Üretici İhracat Çerçevesi →
          </Link>
          <Link href="/tr/ihracat-danismanligi/abd-pazar-girisi" className="btn-outline" style={{ fontSize: 13 }}>
            ABD Pazar Giriş Rehberi →
          </Link>
        </div>
      </section>

      <FaqSection faqs={faqs} locale="tr" />

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
        <h2 className="h2" style={{ color: "var(--fg)", marginBottom: 16 }}>İhracat Planınızı Alın</h2>
        <p style={{ fontSize: 17, color: "var(--muted)", marginBottom: 32, maxWidth: 440 }}>
          Ürününüze ve hedef pazarınıza özel pratik bir pazar giriş yol haritası için strateji görüşmesi ayırtın.
        </p>
        <Link href="/tr/iletisim" className="btn-primary">Strateji Görüşmesi Planlayın →</Link>
      </section>
    </div>
  );
}
