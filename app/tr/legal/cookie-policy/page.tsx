import type { Metadata } from "next";
import Link from "next/link";
import { company } from "../../../lib/content";
import { buildAlternatesTr, localeRoutes } from "../../../lib/i18n";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description: "Advisera Global'in web sitesinde çerezleri ve benzer izleme teknolojilerini nasıl kullandığı.",
  alternates: buildAlternatesTr(localeRoutes.cookiePolicy),
};

const EFFECTIVE_DATE = "20 Nisan 2026";

export default function CookiePolicyPageTr() {
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
        <h1 className="h2" style={{ color: "var(--fg)", marginBottom: 12 }}>Çerez Politikası</h1>
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
          <LegalSection title="1. Çerez Nedir?">
            <p>
              Çerezler, ziyaret ettiğiniz web siteleri tarafından cihazınıza yerleştirilen küçük metin dosyalarıdır.
              Web sitelerinin verimli çalışmasını sağlamak ve site sahiplerine raporlama bilgisi sunmak amacıyla
              yaygın biçimde kullanılır.
            </p>
          </LegalSection>

          <LegalSection title="2. Çerezleri Nasıl Kullanıyoruz?">
            <p>
              {company.name} aşağıdaki amaçlarla çerezler ve benzer teknolojiler kullanmaktadır:
            </p>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr>
                  <Th>Kategori</Th>
                  <Th>Amaç</Th>
                  <Th>Örnekler</Th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Td><strong>Zorunlu</strong></Td>
                  <Td>Sitenin temel işlevselliğini ve güvenliğini sağlar. Devre dışı bırakılamaz.</Td>
                  <Td>Oturum, CSRF token</Td>
                </tr>
                <tr>
                  <Td><strong>Performans &amp; Analitik</strong></Td>
                  <Td>Siteyi iyileştirmek amacıyla ziyaretçi kullanımına ilişkin anonimleştirilmiş veri toplar.</Td>
                  <Td>Google Analytics 4 (_ga, _gid)</Td>
                </tr>
                <tr>
                  <Td><strong>İşlevsel</strong></Td>
                  <Td>Tercihlerinizi hatırlar (ör. açık/koyu mod).</Td>
                  <Td>advisera-theme (localStorage)</Td>
                </tr>
              </tbody>
            </table>
            <p>
              Reklam veya hedefleme çerezi kullanmıyoruz. Çerez verilerini reklam ağlarıyla paylaşmıyoruz.
            </p>
          </LegalSection>

          <LegalSection title="3. Üçüncü Taraf Çerezleri">
            <p>
              Google Analytics 4 etkin olduğunda Google kendi çerezlerini (<code>_ga</code>, <code>_gid</code>) ayarlayabilir.
              Bu çerezler{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)" }}>
                Google Gizlilik Politikası
              </a>{" "}
              kapsamındadır. Devre dışı bırakmak için{" "}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)" }}>
                Google Analytics Devre Dışı Bırakma Tarayıcı Eklentisi
              </a>{" "}
              kullanabilirsiniz.
            </p>
          </LegalSection>

          <LegalSection title="4. Tercihleriniz">
            <p>Çerezleri birkaç şekilde kontrol edebilirsiniz:</p>
            <ul>
              <li>
                <strong>Tarayıcı ayarları</strong> — Çoğu tarayıcı çerezleri reddetmenize veya silmenize izin verir.
                Talimatlar için tarayıcınızın yardım belgelerine başvurun.
              </li>
              <li>
                <strong>Analitik devre dışı bırakma</strong> —{" "}
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)" }}>
                  Google Analytics Devre Dışı Bırakma Eklentisi
                </a>{" "}
                kullanın.
              </li>
              <li>
                <strong>Tema tercihi</strong> — <code>advisera-theme</code> anahtarı localStorage&apos;da tutulur (çerez değildir).
                Tarayıcınızın geliştirici araçları üzerinden silebilirsiniz.
              </li>
            </ul>
            <p>
              Zorunlu çerezlerin devre dışı bırakılması sitenin işlevselliğini olumsuz etkileyebilir.
            </p>
          </LegalSection>

          <LegalSection title="5. Bu Politikadaki Değişiklikler">
            <p>
              Bu Çerez Politikasını periyodik olarak güncelleyebiliriz. Yukarıdaki &ldquo;Yürürlük Tarihi&rdquo;
              en son revizyonu yansıtır. Bu sayfayı düzenli aralıklarla incelemenizi öneririz.
            </p>
          </LegalSection>

          <LegalSection title="6. İletişim">
            <p>
              Sorularınız için{" "}
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

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th
      style={{
        textAlign: "left",
        padding: "10px 12px",
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: "var(--muted)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      {children}
    </th>
  );
}

function Td({ children }: { children: React.ReactNode }) {
  return (
    <td
      style={{
        padding: "10px 12px",
        color: "var(--muted)",
        borderBottom: "1px solid var(--border)",
        verticalAlign: "top",
        lineHeight: 1.6,
      }}
    >
      {children}
    </td>
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
      <Link href="/tr/legal/terms-and-conditions" style={{ fontSize: 14, color: "var(--accent)", textDecoration: "none" }}>
        Kullanım Koşulları →
      </Link>
      <Link href="/tr/iletisim" style={{ fontSize: 14, color: "var(--muted)", textDecoration: "none" }}>
        Bize Ulaşın
      </Link>
    </div>
  );
}
