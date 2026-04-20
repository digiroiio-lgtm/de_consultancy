import type { Metadata } from "next";
import Link from "next/link";
import { company } from "../../lib/content";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions governing use of Advisera Global's website and consulting services.",
  alternates: { canonical: "/legal/terms-and-conditions" },
};

const EFFECTIVE_DATE = "April 20, 2026";

export default function TermsAndConditionsPage() {
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
        <h1 className="h2" style={{ color: "var(--fg)", marginBottom: 12 }}>Terms &amp; Conditions</h1>
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
          <LegalSection title="1. Agreement to Terms">
            <p>
              By accessing or using the website at{" "}
              <a href={company.url} style={{ color: "var(--accent)" }}>{company.url}</a>{" "}
              (&ldquo;Site&rdquo;) or engaging the services of {company.name} (&ldquo;Advisera Global,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;),
              you agree to be bound by these Terms &amp; Conditions. If you do not agree, do not use the Site or services.
            </p>
          </LegalSection>

          <LegalSection title="2. Services">
            <p>
              Advisera Global provides management consulting, export consulting, and related advisory services
              to manufacturing and industrial companies. Specific engagement terms, deliverables, timelines,
              and fees are governed by individual consulting agreements signed between Advisera Global and each client.
            </p>
            <p>
              Nothing on this Site constitutes professional legal, financial, or accounting advice. All
              consulting engagements are subject to a separate written agreement.
            </p>
          </LegalSection>

          <LegalSection title="3. Intellectual Property">
            <p>
              All content on this Site — including text, graphics, logos, design elements, and data — is the
              exclusive property of Advisera Global or its licensors and is protected by applicable copyright,
              trademark, and intellectual property laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, or create derivative works of any Site content
              without prior written permission from Advisera Global.
            </p>
          </LegalSection>

          <LegalSection title="4. Use of the Site">
            <p>You agree not to:</p>
            <ul>
              <li>Use the Site for any unlawful purpose or in violation of these Terms;</li>
              <li>Attempt to gain unauthorised access to any part of the Site or its related systems;</li>
              <li>Transmit any harmful, offensive, or disruptive content;</li>
              <li>Use automated tools (scrapers, bots) to access Site content without written permission;</li>
              <li>Misrepresent your affiliation with any person or entity.</li>
            </ul>
          </LegalSection>

          <LegalSection title="5. Disclaimer of Warranties">
            <p>
              The Site and its content are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind,
              express or implied, including but not limited to implied warranties of merchantability,
              fitness for a particular purpose, or non-infringement.
            </p>
            <p>
              Advisera Global does not warrant that the Site will be uninterrupted, error-free, or free of
              viruses or other harmful components.
            </p>
          </LegalSection>

          <LegalSection title="6. Limitation of Liability">
            <p>
              To the fullest extent permitted by applicable law, Advisera Global and its officers, directors,
              employees, and agents shall not be liable for any indirect, incidental, special, consequential,
              or punitive damages arising out of or related to your use of the Site or our services,
              even if advised of the possibility of such damages.
            </p>
            <p>
              Our total liability for any claim arising under these Terms shall not exceed the fees paid
              by you to Advisera Global in the three (3) months preceding the claim.
            </p>
          </LegalSection>

          <LegalSection title="7. Third-Party Links">
            <p>
              The Site may contain links to third-party websites. These links are provided for convenience only.
              Advisera Global does not endorse, control, or assume responsibility for any third-party content,
              privacy practices, or terms of service.
            </p>
          </LegalSection>

          <LegalSection title="8. Privacy">
            <p>
              Your use of the Site is also governed by our{" "}
              <Link href="/legal/privacy-policy" style={{ color: "var(--accent)" }}>Privacy Policy</Link>,
              which is incorporated into these Terms by reference.
            </p>
          </LegalSection>

          <LegalSection title="9. Governing Law">
            <p>
              These Terms are governed by and construed in accordance with the laws of the State of New York,
              USA, without regard to its conflict of law provisions. Any disputes arising under these Terms
              shall be subject to the exclusive jurisdiction of the courts located in New York County, New York.
            </p>
          </LegalSection>

          <LegalSection title="10. Changes to These Terms">
            <p>
              We reserve the right to modify these Terms at any time. Updated Terms will be posted on this page
              with a revised effective date. Continued use of the Site or services after changes constitutes
              your acceptance of the updated Terms.
            </p>
          </LegalSection>

          <LegalSection title="11. Contact">
            <p>
              Questions about these Terms? Contact us at{" "}
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
      <Link href="/legal/cookie-policy" style={{ fontSize: 14, color: "var(--accent)", textDecoration: "none" }}>
        Cookie Policy →
      </Link>
      <Link href="/contact" style={{ fontSize: 14, color: "var(--muted)", textDecoration: "none" }}>
        Contact Us
      </Link>
    </div>
  );
}
