"use client";

import { FormEvent, useMemo, useState } from "react";
import { company } from "../lib/content";

const DEFAULT_ERROR_MESSAGE = "Submission failed. Please try again or contact us on WhatsApp.";
const MIN_GOAL_LENGTH = 10;

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
  color: "rgba(255,255,255,0.55)",
  letterSpacing: "0.06em",
  textTransform: "uppercase",
};

export function ContactMultistepForm() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState(DEFAULT_ERROR_MESSAGE);
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
    setErrorMessage(DEFAULT_ERROR_MESSAGE);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        if (response.status === 400) {
          setErrorMessage("Please complete all required fields with valid business contact details.");
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
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 16,
        padding: "clamp(28px,4vw,48px)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: "#fff", letterSpacing: "-0.01em" }}>Strategy Call Request</h2>
        <span style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", fontWeight: 600 }}>
          {step} / 3
        </span>
      </div>

      {/* Progress bar */}
      <div style={{ height: 2, background: "rgba(255,255,255,0.08)", borderRadius: 1, marginBottom: 32, overflow: "hidden" }}>
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
              Full Name
              <input
                className="input-dark"
                value={values.name}
                onChange={(event) => setValues({ ...values, name: event.target.value })}
                placeholder="Your full name"
                required
              />
            </label>
            <label style={labelStyle}>
              Work Email
              <input
                type="email"
                className="input-dark"
                value={values.email}
                onChange={(event) => setValues({ ...values, email: event.target.value })}
                placeholder="you@company.com"
                required
              />
            </label>
          </>
        )}

        {step === 2 && (
          <>
            <label style={labelStyle}>
              Company
              <input
                className="input-dark"
                value={values.company}
                onChange={(event) => setValues({ ...values, company: event.target.value })}
                placeholder="Your company name"
                required
              />
            </label>
            <label style={labelStyle}>
              Primary Service Need
              <select
                className="input-dark"
                value={values.serviceInterest}
                onChange={(event) => setValues({ ...values, serviceInterest: event.target.value })}
                style={{ cursor: "pointer" }}
              >
                <option>Management Consulting</option>
                <option>Export Consulting</option>
              </select>
            </label>
          </>
        )}

        {step === 3 && (
          <label style={labelStyle}>
            What is your biggest outcome goal in the next 90 days?
            <textarea
              className="input-dark"
              rows={5}
              value={values.goal}
              onChange={(event) => setValues({ ...values, goal: event.target.value })}
              placeholder="Describe your key challenge or goal..."
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
            Back
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
            Continue →
          </button>
        ) : (
          <button
            type="submit"
            disabled={!canContinue || status === "submitting"}
            className="btn-primary"
            style={{ padding: "10px 24px", fontSize: 13, opacity: !canContinue || status === "submitting" ? 0.4 : 1 }}
          >
            {status === "submitting" ? "Submitting..." : "Book Strategy Call →"}
          </button>
        )}
      </div>

      {status === "success" && (
        <p style={{ marginTop: 20, fontSize: 14, fontWeight: 600, color: "#22c55e" }}>
          ✓ Thank you. We will contact you within one business day.
        </p>
      )}
      {status === "error" && (
        <p style={{ marginTop: 20, fontSize: 14, color: "#ef4444" }}>
          {errorMessage}{" "}
          <a href={company.whatsapp} style={{ color: "#a100ff", textDecoration: "underline" }}>
            Contact us on WhatsApp.
          </a>
        </p>
      )}
    </form>
  );
}
