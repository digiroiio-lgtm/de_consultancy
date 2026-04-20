import type { Metadata } from "next";
import Link from "next/link";
import { company } from "../../lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Advisera Global collects, uses, and protects your personal information.",
  alternates: { canonical: "/legal/privacy-policy" },
};

const EFFECTIVE_DATE = "April 20, 2026";

export default function PrivacyPolicyPage() {
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
        <p className="label" style={{ marginBottom: 16 }}>Legal</p>
        <h1 className="h2" style={{ color: "var(--fg)", marginBottom: 12 }}>Privacy Policy</h1>
        <p style={{ fontSize: 14, color: "var(--muted)" }}>Effective: {EFFECTIVE_DATE}</p>
      </section>

      <section
        style={{
          paddingBlock: "clamp(48px,6vw,80px)",
          paddingInline: "clamp(24px,5vw,80px)",
        }}
        className="max-w-site"
      >
        <div style={{ maxWidth: 720, display: "flex", flexDirection: "column", gap: 40 }}>
          <LegalSection title="1. Who We Are">
            <p>
              {company.name} (&ldquo;Advisera Global,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;)
              is a management and export consulting firm located at{" "}
              <strong>{company.address.full}</strong>. We can be reached at{" "}
              <a href={`mailto:${company.email}`} style={{ color: "var(--accent)" }}>{company.email}</a>.
            </p>
          </LegalSection>

          <LegalSection title="2. Information We Collect">
            <p>We may collect the following types of personal information:</p>
            <ul>
              <li><strong>Contact information</strong> — name, business email address, company name, and any details you provide when completing our contact form or emailing us.</li>
              <li><strong>Usage data</strong> — pages visited, time spent on the site, referring URL, and browser type, collected via analytics tools (e.g., Google Analytics 4) if enabled.</li>
              <li><strong>Cookie data</strong> — as described in our Cookie Policy.</li>
            </ul>
            <p>We do not collect sensitive personal data such as financial account information, government identification numbers, or health data.</p>
          </LegalSection>

          <LegalSection title="3. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your enquiries and schedule strategy calls;</li>
              <li>Provide and improve our consulting services;</li>
              <li>Send relevant communications you have requested;</li>
              <li>Analyse site usage to improve user experience;</li>
              <li>Comply with legal obligations.</li>
            </ul>
            <p>We do not sell, rent, or trade your personal information to third parties for marketing purposes.</p>
          </LegalSection>

          <LegalSection title="4. Legal Basis for Processing (GDPR)">
            <p>Where applicable, we rely on the following legal bases:</p>
            <ul>
              <li><strong>Consent</strong> — when you voluntarily submit your details via our contact form;</li>
              <li><strong>Legitimate interests</strong> — to improve our website and services;</li>
              <li><strong>Legal obligation</strong> — where required by law.</li>
            </ul>
          </LegalSection>

          <LegalSection title="5. Data Retention">
            <p>
              We retain contact enquiry data for up to <strong>24 months</strong> or until you request deletion.
              Analytics data is retained per the settings of the analytics provider. You may request erasure
              at any time by emailing{" "}
              <a href={`mailto:${company.email}`} style={{ color: "var(--accent)" }}>{company.email}</a>.
            </p>
          </LegalSection>

          <LegalSection title="6. Data Sharing">
            <p>We share data only with:</p>
            <ul>
              <li><strong>Service providers</strong> — hosting (Vercel), email delivery (Resend), and analytics (Google Analytics), each bound by data processing agreements;</li>
              <li><strong>Legal authorities</strong> — only when required by law or court order.</li>
            </ul>
          </LegalSection>

          <LegalSection title="7. Your Rights">
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you;</li>
              <li>Correct inaccurate data;</li>
              <li>Request erasure of your data;</li>
              <li>Object to or restrict certain processing;</li>
              <li>Data portability.</li>
            </ul>
            <p>
              To exercise any of these rights, contact us at{" "}
              <a href={`mailto:${company.email}`} style={{ color: "var(--accent)" }}>{company.email}</a>.
              We will respond within 30 days.
            </p>
          </LegalSection>

          <LegalSection title="8. International Transfers">
            <p>
              Our servers are located in the United States. If you access our site from outside the US,
              your data may be transferred to and processed in the US. We take appropriate safeguards
              to ensure such transfers comply with applicable data protection laws.
            </p>
          </LegalSection>

          <LegalSection title="9. Security">
            <p>
              We implement industry-standard technical and organisational measures to protect your data
              against unauthorised access, alteration, disclosure, or destruction. However, no internet
              transmission is 100% secure.
            </p>
          </LegalSection>

          <LegalSection title="10. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. The &ldquo;Effective&rdquo; date above will
              reflect the latest revision. Continued use of the site after changes constitutes acceptance.
            </p>
          </LegalSection>

          <LegalSection title="11. Contact">
            <p>
              Questions about this policy? Email us at{" "}
              <a href={`mailto:${company.email}`} style={{ color: "var(--accent)" }}>{company.email}</a>{" "}
              or write to us at {company.address.full}.
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
      <Link href="/legal/terms-and-conditions" style={{ fontSize: 14, color: "var(--accent)", textDecoration: "none" }}>
        Terms & Conditions →
      </Link>
      <Link href="/legal/cookie-policy" style={{ fontSize: 14, color: "var(--accent)", textDecoration: "none" }}>
        Cookie Policy →
      </Link>
      <Link href="/contact" style={{ fontSize: 14, color: "var(--muted)", textDecoration: "none" }}>
        Contact Us
      </Link>
    </div>
  );
}
