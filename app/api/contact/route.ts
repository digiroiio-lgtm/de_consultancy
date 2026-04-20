import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  serviceInterest?: string;
  goal?: string;
};

function sanitize(input: unknown, max = 600) {
  if (typeof input !== "string") return "";
  return input.trim().slice(0, max);
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as ContactPayload;

  const payload = {
    name: sanitize(body.name, 100),
    email: sanitize(body.email, 120),
    company: sanitize(body.company, 120),
    serviceInterest: sanitize(body.serviceInterest, 80),
    goal: sanitize(body.goal, 1000),
  };

  if (!payload.name || !payload.email.includes("@") || !payload.company || payload.goal.length < 10) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const resendKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (resendKey && toEmail) {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "de-consultancy@resend.dev",
        to: [toEmail],
        subject: `New strategy call lead: ${payload.company}`,
        text: `Name: ${payload.name}\nEmail: ${payload.email}\nCompany: ${payload.company}\nService: ${payload.serviceInterest}\nGoal: ${payload.goal}`,
      }),
    }).catch(() => undefined);
  }

  return NextResponse.json({ ok: true });
}
