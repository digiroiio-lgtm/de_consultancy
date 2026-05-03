import type { Metadata } from "next";
import Link from "next/link";
import { company } from "../../lib/content";
import { buildAlternates, localeRoutes } from "../../lib/i18n";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How Advisera Global uses cookies and similar tracking technologies on its website.",
  alternates: buildAlternates(localeRoutes.cookiePolicy),
};

const EFFECTIVE_DATE = "April 20, 2026";

export default function CookiePolicyPage() {
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
        <h1 className="h2" style={{ color: "var(--fg)", marginBottom: 12 }}>Cookie Policy</h1>
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
          <LegalSection title="1. What Are Cookies">
            <p>
              Cookies are small text files placed on your device by websites you visit. They are widely used
              to make websites work efficiently and to provide reporting information to site owners.
            </p>
          </LegalSection>

          <LegalSection title="2. How We Use Cookies">
            <p>
              {company.name} uses cookies and similar technologies for the following purposes:
            </p>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr>
                  <Th>Category</Th>
                  <Th>Purpose</Th>
                  <Th>Examples</Th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Td><strong>Strictly Necessary</strong></Td>
                  <Td>Enable core site functionality and security. Cannot be disabled.</Td>
                  <Td>Session, CSRF token</Td>
                </tr>
                <tr>
                  <Td><strong>Performance &amp; Analytics</strong></Td>
                  <Td>Collect anonymised data about how visitors use the site to improve performance.</Td>
                  <Td>Google Analytics 4 (_ga, _gid)</Td>
                </tr>
                <tr>
                  <Td><strong>Functional</strong></Td>
                  <Td>Remember your preferences (e.g., dark/light mode).</Td>
                  <Td>advisera-theme (localStorage)</Td>
                </tr>
              </tbody>
            </table>
            <p>
              We do not use advertising or targeting cookies. We do not share cookie data with ad networks.
            </p>
          </LegalSection>

          <LegalSection title="3. Third-Party Cookies">
            <p>
              When Google Analytics 4 is enabled, Google may set its own cookies (<code>_ga</code>, <code>_gid</code>).
              These are subject to{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)" }}>
                Google&apos;s Privacy Policy
              </a>. You can opt out via{" "}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)" }}>
                Google Analytics Opt-out Browser Add-on
              </a>.
            </p>
          </LegalSection>

          <LegalSection title="4. Your Choices">
            <p>You can control cookies in several ways:</p>
            <ul>
              <li>
                <strong>Browser settings</strong> — Most browsers allow you to refuse or delete cookies.
                See your browser&apos;s help documentation for instructions.
              </li>
              <li>
                <strong>Analytics opt-out</strong> — Use the{" "}
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)" }}>
                  Google Analytics Opt-out Add-on
                </a>.
              </li>
              <li>
                <strong>Theme preference</strong> — The <code>advisera-theme</code> key is stored in
                localStorage (not a cookie). You can clear it via your browser&apos;s developer tools.
              </li>
            </ul>
            <p>
              Disabling strictly necessary cookies may impair the functioning of the Site.
            </p>
          </LegalSection>

          <LegalSection title="5. Changes to This Policy">
            <p>
              We may update this Cookie Policy periodically. The &ldquo;Effective&rdquo; date above reflects the
              latest revision. We encourage you to review this page periodically.
            </p>
          </LegalSection>

          <LegalSection title="6. Contact">
            <p>
              Questions? Email us at{" "}
              <a href={`mailto:${company.email}`} style={{ color: "var(--accent)" }}>{company.email}</a>{" "}
              or write to {company.address.full}.
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
      <Link href="/legal/privacy-policy" style={{ fontSize: 14, color: "var(--accent)", textDecoration: "none" }}>
        Privacy Policy →
      </Link>
      <Link href="/legal/terms-and-conditions" style={{ fontSize: 14, color: "var(--accent)", textDecoration: "none" }}>
        Terms & Conditions →
      </Link>
      <Link href="/contact" style={{ fontSize: 14, color: "var(--muted)", textDecoration: "none" }}>
        Contact Us
      </Link>
    </div>
  );
}
