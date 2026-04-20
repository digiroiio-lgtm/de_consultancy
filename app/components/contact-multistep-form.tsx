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
    <form onSubmit={handleSubmit} className="rounded-2xl border border-zinc-200 bg-white p-6">
      <h2 className="text-2xl font-semibold text-[#0A2540]">Multi-step Strategy Call Form</h2>
      <p className="mt-2 text-sm text-zinc-600">Step {step} of 3</p>

      <div className="mt-6 space-y-4">
        {step === 1 && (
          <>
            <label className="block text-sm font-medium text-zinc-700">
              Full Name
              <input
                className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2"
                value={values.name}
                onChange={(event) => setValues({ ...values, name: event.target.value })}
                required
              />
            </label>
            <label className="block text-sm font-medium text-zinc-700">
              Work Email
              <input
                type="email"
                className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2"
                value={values.email}
                onChange={(event) => setValues({ ...values, email: event.target.value })}
                required
              />
            </label>
          </>
        )}

        {step === 2 && (
          <>
            <label className="block text-sm font-medium text-zinc-700">
              Company
              <input
                className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2"
                value={values.company}
                onChange={(event) => setValues({ ...values, company: event.target.value })}
                required
              />
            </label>
            <label className="block text-sm font-medium text-zinc-700">
              Primary Service Need
              <select
                className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2"
                value={values.serviceInterest}
                onChange={(event) => setValues({ ...values, serviceInterest: event.target.value })}
              >
                <option>Management Consulting</option>
                <option>Export Consulting</option>
              </select>
            </label>
          </>
        )}

        {step === 3 && (
          <label className="block text-sm font-medium text-zinc-700">
            What is the biggest outcome you need in the next 90 days?
            <textarea
              className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2"
              rows={4}
              value={values.goal}
              onChange={(event) => setValues({ ...values, goal: event.target.value })}
              required
            />
          </label>
        )}
      </div>

      <div className="mt-6 flex items-center gap-3">
        {step > 1 && (
          <button
            type="button"
            onClick={() => setStep((prev) => prev - 1)}
            className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-800"
          >
            Back
          </button>
        )}

        {step < 3 ? (
          <button
            type="button"
            onClick={() => setStep((prev) => prev + 1)}
            disabled={!canContinue}
            className="rounded-full bg-[#0A2540] px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"
          >
            Continue
          </button>
        ) : (
          <button
            type="submit"
            disabled={!canContinue || status === "submitting"}
            className="rounded-full bg-[#0A2540] px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"
          >
            {status === "submitting" ? "Submitting..." : "Book Strategy Call"}
          </button>
        )}
      </div>

      {status === "success" && (
        <p className="mt-4 text-sm font-medium text-emerald-700">Thanks. We will contact you within one business day.</p>
      )}
      {status === "error" && (
        <p className="mt-4 text-sm font-medium text-red-700">
          {errorMessage}{" "}
          <a href={company.whatsapp} className="underline">
            Contact us on WhatsApp.
          </a>
        </p>
      )}
    </form>
  );
}
