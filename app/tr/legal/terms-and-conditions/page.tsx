import type { Metadata } from "next";
import Link from "next/link";
import { company } from "../../../lib/content";
import { buildAlternatesTr, localeRoutes } from "../../../lib/i18n";

export const metadata: Metadata = {
  title: "Kullanım Koşulları",
  description: "Advisera Global web sitesinin ve danışmanlık hizmetlerinin kullanımını düzenleyen koşullar.",
  alternates: buildAlternatesTr(localeRoutes.termsAndConditions),
};

const EFFECTIVE_DATE = "20 Nisan 2026";

export default function TermsAndConditionsPageTr() {
  return (
    <div>
      <section
        style={{
          paddingBlock: "clamp(120px,14vw,200px) clamp(60px,8vw,80px)",
          paddingInline: "clamp(24px,5vw,80px)",
          borderBottom: "1px solid var(--border)",
        }}
        className="max-w-site"
      >
        <p className="label" style={{ marginBottom: 16 }}>Hukuki</p>
        <h1 className="h2" style={{ color: "var(--fg)", marginBottom: 12 }}>Kullanım Koşulları</h1>
        <p style={{ fontSize: 14, color: "var(--muted)" }}>Yürürlük Tarihi: {EFFECTIVE_DATE}</p>
      </section>

      <section
        style={{
          paddingBlock: "clamp(48px,6vw,80px)",
          paddingInline: "clamp(24px,5vw,80px)",
        }}
        className="max-w-site"
      >
        <div style={{ maxWidth: 720, display: "flex", flexDirection: "column", gap: 40 }}>
          <LegalSection title="1. Koşulların Kabulü">
            <p>
              <a href={company.url} style={{ color: "var(--accent)" }}>{company.url}</a>{" "}
              adresindeki web sitesine (&ldquo;Site&rdquo;) erişerek veya {company.name}&apos;in (&ldquo;Advisera Global,&rdquo;{" "}
              &ldquo;biz,&rdquo; &ldquo;bizim&rdquo; veya &ldquo;şirketimiz&rdquo;) hizmetlerini kullanarak bu Kullanım Koşullarını
              kabul etmiş sayılırsınız. Kabul etmiyorsanız lütfen Siteyi veya hizmetlerimizi kullanmayın.
            </p>
          </LegalSection>

          <LegalSection title="2. Hizmetler">
            <p>
              Advisera Global, üretim ve sanayi şirketlerine yönetim danışmanlığı, ihracat danışmanlığı ve ilgili
              danışmanlık hizmetleri sunmaktadır. Belirli görevlendirme koşulları, teslimables, zaman çizelgeleri ve
              ücretler, Advisera Global ile her müşteri arasında imzalanan bireysel danışmanlık sözleşmeleriyle belirlenir.
            </p>
            <p>
              Bu Sitedeki hiçbir içerik mesleki hukuki, finansal veya muhasebe tavsiyesi niteliği taşımaz. Tüm
              danışmanlık görevlendirmeleri ayrı bir yazılı sözleşmeye tabidir.
            </p>
          </LegalSection>

          <LegalSection title="3. Fikri Mülkiyet">
            <p>
              Bu Sitedeki tüm içerik — metin, grafik, logo, tasarım öğeleri ve veriler dahil — Advisera Global&apos;e
              veya lisans verenlerine aittir ve geçerli telif hakkı, marka ve fikri mülkiyet yasalarıyla korunmaktadır.
            </p>
            <p>
              Advisera Global&apos;in önceden yazılı izni alınmadan Site içeriğinin hiçbir kısmı çoğaltılamaz,
              dağıtılamaz, değiştirilemez veya türev eserler oluşturulamaz.
            </p>
          </LegalSection>

          <LegalSection title="4. Sitenin Kullanımı">
            <p>Aşağıdakileri yapmamayı kabul edersiniz:</p>
            <ul>
              <li>Siteyi herhangi bir yasadışı amaçla veya bu Koşullara aykırı biçimde kullanmak;</li>
              <li>Sitenin herhangi bir bölümüne veya ilgili sistemlere yetkisiz erişim sağlamaya çalışmak;</li>
              <li>Zararlı, saldırgan veya bozucu içerik iletmek;</li>
              <li>Yazılı izin almaksızın Site içeriğine erişmek için otomatik araçlar (botlar, kazıyıcılar) kullanmak;</li>
              <li>Herhangi bir kişi veya kuruluşla bağlantınızı yanlış beyan etmek.</li>
            </ul>
          </LegalSection>

          <LegalSection title="5. Garanti Reddi">
            <p>
              Site ve içeriği, açık veya zımni hiçbir garanti olmaksızın &ldquo;olduğu gibi&rdquo; ve &ldquo;mevcut olduğu
              şekliyle&rdquo; sunulmaktadır; zımni satılabilirlik, belirli bir amaca uygunluk veya ihlal etmeme garantileri
              dahil ancak bunlarla sınırlı olmamak üzere.
            </p>
            <p>
              Advisera Global, Sitenin kesintisiz, hatasız ya da virüs veya diğer zararlı bileşenlerden arınmış
              olacağını garanti etmez.
            </p>
          </LegalSection>

          <LegalSection title="6. Sorumluluk Sınırlaması">
            <p>
              Yürürlükteki yasanın izin verdiği azami ölçüde, Advisera Global ve yöneticileri, direktörleri,
              çalışanları ve temsilcileri; bu tür zararların olasılığından haberdar edilmiş olsalar dahi Siteyi veya
              hizmetlerimizi kullanımınızdan kaynaklanan dolaylı, arızi, özel, sonuçsal veya cezai zararlardan
              sorumlu tutulamaz.
            </p>
            <p>
              Bu Koşullar kapsamında herhangi bir talepten doğan toplam sorumluluğumuz, talebin öncesindeki üç (3) ay
              içinde Advisera Global&apos;e ödediğiniz ücretleri geçemez.
            </p>
          </LegalSection>

          <LegalSection title="7. Üçüncü Taraf Bağlantıları">
            <p>
              Site, üçüncü taraf web sitelerine bağlantılar içerebilir. Bu bağlantılar yalnızca kolaylık amacıyla
              sunulmaktadır. Advisera Global, üçüncü taraf içeriklerini, gizlilik uygulamalarını veya kullanım
              koşullarını onaylamaz, kontrol etmez ya da bunlara ilişkin sorumluluk üstlenmez.
            </p>
          </LegalSection>

          <LegalSection title="8. Gizlilik">
            <p>
              Siteyi kullanımınız, bu Koşullara atıfla dahil edilen{" "}
              <Link href="/tr/legal/privacy-policy" style={{ color: "var(--accent)" }}>Gizlilik Politikamız</Link>{" "}
              tarafından da yönetilmektedir.
            </p>
          </LegalSection>

          <LegalSection title="9. Geçerli Hukuk">
            <p>
              Bu Koşullar, çatışma hukuku hükümleri dikkate alınmaksızın New York Eyaleti, ABD yasalarına göre
              yönetilir ve yorumlanır. Bu Koşullar kapsamında doğacak her türlü anlaşmazlık, New York County,
              New York&apos;ta bulunan mahkemelerin münhasır yargı yetkisine tabidir.
            </p>
          </LegalSection>

          <LegalSection title="10. Bu Koşullardaki Değişiklikler">
            <p>
              Bu Koşulları istediğimiz zaman değiştirme hakkını saklı tutarız. Güncellenen Koşullar, revize edilmiş
              yürürlük tarihiyle bu sayfada yayımlanacaktır. Değişikliklerden sonra Siteyi veya hizmetleri kullanmaya
              devam etmeniz güncellenmiş Koşulları kabul ettiğiniz anlamına gelir.
            </p>
          </LegalSection>

          <LegalSection title="11. İletişim">
            <p>
              Bu Koşullarla ilgili sorularınız için{" "}
              <a href={`mailto:${company.email}`} style={{ color: "var(--accent)" }}>{company.email}</a>{" "}
              adresine e-posta gönderin ya da {company.address.full} adresine yazın.
            </p>
          </LegalSection>

          <LegalNav />
        </div>
      </section>
    </div>
  );
}

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--fg)", marginBottom: 16, letterSpacing: "-0.01em" }}>
        {title}
      </h2>
      <div
        style={{
          fontSize: 15,
          color: "var(--muted)",
          lineHeight: 1.75,
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        {children}
      </div>
    </div>
  );
}

function LegalNav() {
  return (
    <div
      style={{
        borderTop: "1px solid var(--border)",
        paddingTop: 32,
        display: "flex",
        flexWrap: "wrap",
        gap: 24,
        marginTop: 8,
      }}
    >
      <Link href="/tr/legal/privacy-policy" style={{ fontSize: 14, color: "var(--accent)", textDecoration: "none" }}>
        Gizlilik Politikası →
      </Link>
      <Link href="/tr/legal/cookie-policy" style={{ fontSize: 14, color: "var(--accent)", textDecoration: "none" }}>
        Çerez Politikası →
      </Link>
      <Link href="/tr/iletisim" style={{ fontSize: 14, color: "var(--muted)", textDecoration: "none" }}>
        Bize Ulaşın
      </Link>
    </div>
  );
}
