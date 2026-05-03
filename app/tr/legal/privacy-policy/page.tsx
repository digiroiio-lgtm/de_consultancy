import type { Metadata } from "next";
import Link from "next/link";
import { company } from "../../../lib/content";
import { buildAlternatesTr, localeRoutes } from "../../../lib/i18n";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: "Advisera Global'in kişisel bilgilerinizi nasıl topladığı, kullandığı ve koruduğu.",
  alternates: buildAlternatesTr(localeRoutes.privacyPolicy),
};

const EFFECTIVE_DATE = "20 Nisan 2026";

export default function PrivacyPolicyPageTr() {
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
        <h1 className="h2" style={{ color: "var(--fg)", marginBottom: 12 }}>Gizlilik Politikası</h1>
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
          <LegalSection title="1. Biz Kimiz?">
            <p>
              {company.name} (&ldquo;Advisera Global,&rdquo; &ldquo;biz,&rdquo; &ldquo;bizim&rdquo; veya &ldquo;şirketimiz&rdquo;),{" "}
              <strong>{company.address.full}</strong> adresinde faaliyet gösteren bir yönetim ve ihracat danışmanlığı firmasıdır.
              İletişim adresimiz:{" "}
              <a href={`mailto:${company.email}`} style={{ color: "var(--accent)" }}>{company.email}</a>.
            </p>
          </LegalSection>

          <LegalSection title="2. Hangi Bilgileri Topluyoruz?">
            <p>Aşağıdaki türde kişisel bilgileri toplayabiliriz:</p>
            <ul>
              <li><strong>İletişim bilgileri</strong> — iletişim formumuzu doldururken ya da bize e-posta gönderirken paylaştığınız ad, iş e-posta adresi, şirket adı ve diğer ayrıntılar.</li>
              <li><strong>Kullanım verileri</strong> — ziyaret edilen sayfalar, sitede geçirilen süre, yönlendiren URL ve tarayıcı türü; etkinleştirilmişse analitik araçlar (ör. Google Analytics 4) aracılığıyla toplanır.</li>
              <li><strong>Çerez verileri</strong> — Çerez Politikamızda açıklandığı şekilde.</li>
            </ul>
            <p>Finansal hesap bilgileri, kimlik numaraları veya sağlık verileri gibi hassas kişisel veriler toplamıyoruz.</p>
          </LegalSection>

          <LegalSection title="3. Bilgilerinizi Nasıl Kullanıyoruz?">
            <p>Topladığımız bilgileri şu amaçlarla kullanırız:</p>
            <ul>
              <li>Sorularınıza yanıt vermek ve strateji görüşmeleri planlamak;</li>
              <li>Danışmanlık hizmetlerimizi sunmak ve geliştirmek;</li>
              <li>Talep ettiğiniz iletişimleri göndermek;</li>
              <li>Kullanıcı deneyimini iyileştirmek amacıyla site kullanımını analiz etmek;</li>
              <li>Yasal yükümlülükleri yerine getirmek.</li>
            </ul>
            <p>Kişisel bilgilerinizi pazarlama amacıyla üçüncü taraflara satmıyor, kiralamıyor veya devretmiyoruz.</p>
          </LegalSection>

          <LegalSection title="4. İşlemenin Hukuki Dayanağı (GDPR)">
            <p>Uygulanabilir olduğu durumlarda aşağıdaki hukuki dayanakları kullanıyoruz:</p>
            <ul>
              <li><strong>Rıza</strong> — iletişim formumuzu gönüllü olarak doldurduğunuzda;</li>
              <li><strong>Meşru menfaatler</strong> — web sitemizi ve hizmetlerimizi iyileştirmek amacıyla;</li>
              <li><strong>Hukuki yükümlülük</strong> — yasanın gerektirdiği durumlarda.</li>
            </ul>
          </LegalSection>

          <LegalSection title="5. Veri Saklama">
            <p>
              İletişim başvurularına ait verileri silme talebinize kadar veya en fazla <strong>24 ay</strong> boyunca saklarız.
              Analitik veriler, analitik sağlayıcısının ayarlarına göre saklanır. Herhangi bir zamanda{" "}
              <a href={`mailto:${company.email}`} style={{ color: "var(--accent)" }}>{company.email}</a>{" "}
              adresine e-posta göndererek silme talebinde bulunabilirsiniz.
            </p>
          </LegalSection>

          <LegalSection title="6. Veri Paylaşımı">
            <p>Verileri yalnızca şu taraflarla paylaşıyoruz:</p>
            <ul>
              <li><strong>Hizmet sağlayıcılar</strong> — barındırma (Vercel), e-posta iletimi (Resend) ve analitik (Google Analytics); her biri veri işleme sözleşmesiyle bağlıdır;</li>
              <li><strong>Yasal makamlar</strong> — yalnızca yasanın veya mahkeme kararının gerektirdiği durumlarda.</li>
            </ul>
          </LegalSection>

          <LegalSection title="7. Haklarınız">
            <p>Yetki alanınıza bağlı olarak aşağıdaki haklara sahip olabilirsiniz:</p>
            <ul>
              <li>Hakkınızdaki kişisel verilere erişim;</li>
              <li>Yanlış verilerin düzeltilmesi;</li>
              <li>Verilerinizin silinmesini talep etme;</li>
              <li>Belirli işlemlere itiraz etme veya bunları kısıtlama;</li>
              <li>Veri taşınabilirliği.</li>
            </ul>
            <p>
              Bu haklardan herhangi birini kullanmak için{" "}
              <a href={`mailto:${company.email}`} style={{ color: "var(--accent)" }}>{company.email}</a>{" "}
              adresinden bize ulaşın. 30 gün içinde yanıt vereceğiz.
            </p>
          </LegalSection>

          <LegalSection title="8. Uluslararası Veri Aktarımları">
            <p>
              Sunucularımız Amerika Birleşik Devletleri&apos;nde bulunmaktadır. ABD dışından sitemize erişiyorsanız
              verileriniz ABD&apos;ye aktarılıp işlenebilir. Bu tür aktarımların geçerli veri koruma yasalarına
              uygunluğunu sağlamak için gerekli önlemleri alıyoruz.
            </p>
          </LegalSection>

          <LegalSection title="9. Güvenlik">
            <p>
              Verilerinizi yetkisiz erişim, değiştirme, ifşa veya imhaya karşı korumak için sektör standardı
              teknik ve organizasyonel önlemler uyguluyoruz. Ancak hiçbir internet iletimi %100 güvenli değildir.
            </p>
          </LegalSection>

          <LegalSection title="10. Bu Politikadaki Değişiklikler">
            <p>
              Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Yukarıdaki &ldquo;Yürürlük Tarihi&rdquo;
              en son revizyonu yansıtır. Değişikliklerden sonra siteyi kullanmaya devam etmeniz güncellenmiş
              koşulları kabul ettiğiniz anlamına gelir.
            </p>
          </LegalSection>

          <LegalSection title="11. İletişim">
            <p>
              Bu politikayla ilgili sorularınız için{" "}
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
      <Link href="/tr/legal/terms-and-conditions" style={{ fontSize: 14, color: "var(--accent)", textDecoration: "none" }}>
        Kullanım Koşulları →
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
