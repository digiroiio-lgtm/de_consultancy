"use client";

import { FormEvent, useMemo, useState } from "react";
import { company } from "../lib/content";
import type { Locale } from "../lib/i18n";

const MIN_GOAL_LENGTH = 10;

const copy = {
  en: {
    title: "Strategy Call Request",
    name: "Full Name",
    namePlaceholder: "Your full name",
    email: "Work Email",
    emailPlaceholder: "you@company.com",
    companyLabel: "Company",
    companyPlaceholder: "Your company name",
    serviceLabel: "Primary Service Need",
    serviceManagement: "Management Consulting",
    serviceExport: "Export Consulting",
    goalLabel: "What is your biggest outcome goal in the next 90 days?",
    goalPlaceholder: "Describe your key challenge or goal...",
    back: "Back",
    continue: "Continue →",
    submitting: "Submitting...",
    submit: "Book Strategy Call →",
    success: "✓ Thank you. We will contact you within one business day.",
    errorDefault: "Submission failed. Please try again or email us directly.",
    errorValidation: "Please complete all required fields with valid business contact details.",
    emailDirect: "Email us directly.",
  },
  tr: {
    title: "Strateji Görüşmesi Talebi",
    name: "Ad Soyad",
    namePlaceholder: "Ad ve soyadınız",
    email: "İş E-postası",
    emailPlaceholder: "siz@sirket.com",
    companyLabel: "Şirket",
    companyPlaceholder: "Şirket adınız",
    serviceLabel: "Birincil Hizmet İhtiyacı",
    serviceManagement: "Yönetim Danışmanlığı",
    serviceExport: "İhracat Danışmanlığı",
    goalLabel: "Önümüzdeki 90 günde en önemli hedefiniz nedir?",
    goalPlaceholder: "Temel zorluğunuzu veya hedefinizi açıklayın...",
    back: "Geri",
    continue: "Devam →",
    submitting: "Gönderiliyor...",
    submit: "Strateji Görüşmesi Ayırt →",
    success: "✓ Teşekkürler. En geç bir iş günü içinde sizinle iletişime geçeceğiz.",
    errorDefault: "Gönderim başarısız. Lütfen tekrar deneyin veya bize doğrudan e-posta gönderin.",
    errorValidation: "Lütfen tüm zorunlu alanları geçerli iş iletişim bilgileriyle doldurun.",
    emailDirect: "Bize doğrudan e-posta gönderin.",
  },
} as const;

const initial = {
  name: "",
  email: "",
  company: "",
  serviceInterest: "Management Consulting",
  goal: "",
};

const labelStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 8,
  fontSize: 13,
  fontWeight: 600,
  color: "var(--muted)",
  letterSpacing: "0.06em",
  textTransform: "uppercase",
};

export function ContactMultistepForm({ locale = "en" }: { locale?: Locale }) {
  const t = copy[locale];
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>(t.errorDefault);
  const [values, setValues] = useState(initial);

  const canContinue = useMemo(() => {
    if (step === 1) {
      return values.name.trim().length > 1 && values.email.includes("@");
    }
    if (step === 2) {
      return values.company.trim().length > 1;
    }
    return values.goal.trim().length >= MIN_GOAL_LENGTH;
  }, [step, values]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage(t.errorDefault);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        if (response.status === 400) {
          setErrorMessage(t.errorValidation);
        }
        throw new Error(`Request failed with status ${response.status}`);
      }

      setStatus("success");
      setValues(initial);
      setStep(1);
    } catch (error) {
      console.error("Contact form submission failed", error);
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "var(--card-bg)",
        border: "1px solid var(--border)",
        borderRadius: 16,
        padding: "clamp(28px,4vw,48px)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: "var(--fg)", letterSpacing: "-0.01em" }}>{t.title}</h2>
        <span style={{ fontSize: 13, color: "var(--fg-dim)", fontWeight: 600 }}>
          {step} / 3
        </span>
      </div>

      {/* Progress bar */}
      <div style={{ height: 2, background: "var(--border)", borderRadius: 1, marginBottom: 32, overflow: "hidden" }}>
        <div
          style={{
            height: "100%",
            width: `${(step / 3) * 100}%`,
            background: "linear-gradient(90deg,#a100ff,#c850ff)",
            borderRadius: 1,
            transition: "width 0.4s ease",
          }}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {step === 1 && (
          <>
            <label style={labelStyle}>
              {t.name}
              <input
                className="input-dark"
                value={values.name}
                onChange={(event) => setValues({ ...values, name: event.target.value })}
                placeholder={t.namePlaceholder}
                required
              />
            </label>
            <label style={labelStyle}>
              {t.email}
              <input
                type="email"
                className="input-dark"
                value={values.email}
                onChange={(event) => setValues({ ...values, email: event.target.value })}
                placeholder={t.emailPlaceholder}
                required
              />
            </label>
          </>
        )}

        {step === 2 && (
          <>
            <label style={labelStyle}>
              {t.companyLabel}
              <input
                className="input-dark"
                value={values.company}
                onChange={(event) => setValues({ ...values, company: event.target.value })}
                placeholder={t.companyPlaceholder}
                required
              />
            </label>
            <label style={labelStyle}>
              {t.serviceLabel}
              <select
                className="input-dark"
                value={values.serviceInterest}
                onChange={(event) => setValues({ ...values, serviceInterest: event.target.value })}
                style={{ cursor: "pointer" }}
              >
                <option value="Management Consulting">{t.serviceManagement}</option>
                <option value="Export Consulting">{t.serviceExport}</option>
              </select>
            </label>
          </>
        )}

        {step === 3 && (
          <label style={labelStyle}>
            {t.goalLabel}
            <textarea
              className="input-dark"
              rows={5}
              value={values.goal}
              onChange={(event) => setValues({ ...values, goal: event.target.value })}
              placeholder={t.goalPlaceholder}
              required
              style={{ resize: "vertical" }}
            />
          </label>
        )}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 28 }}>
        {step > 1 && (
          <button
            type="button"
            onClick={() => setStep((prev) => prev - 1)}
            className="btn-outline"
            style={{ padding: "10px 20px", fontSize: 13 }}
          >
            {t.back}
          </button>
        )}

        {step < 3 ? (
          <button
            type="button"
            onClick={() => setStep((prev) => prev + 1)}
            disabled={!canContinue}
            className="btn-primary"
            style={{ padding: "10px 24px", fontSize: 13, opacity: canContinue ? 1 : 0.4 }}
          >
            {t.continue}
          </button>
        ) : (
          <button
            type="submit"
            disabled={!canContinue || status === "submitting"}
            className="btn-primary"
            style={{ padding: "10px 24px", fontSize: 13, opacity: !canContinue || status === "submitting" ? 0.4 : 1 }}
          >
            {status === "submitting" ? t.submitting : t.submit}
          </button>
        )}
      </div>

      {status === "success" && (
        <p style={{ marginTop: 20, fontSize: 14, fontWeight: 600, color: "#22c55e" }}>
          {t.success}
        </p>
      )}
      {status === "error" && (
        <p style={{ marginTop: 20, fontSize: 14, color: "#ef4444" }}>
          {errorMessage}{" "}
          <a href={`mailto:${company.email}`} style={{ color: "#a100ff", textDecoration: "underline" }}>
            {t.emailDirect}
          </a>
        </p>
      )}
    </form>
  );
}
