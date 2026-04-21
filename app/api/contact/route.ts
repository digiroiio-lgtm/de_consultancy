import { Resend } from "resend";

const CONTACT_EMAIL = "office@adviseraglobal.com";

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

export async function GET() {
  return Response.json({ status: "API working" });
}

export async function POST(request: Request) {
  console.log("RESEND KEY:", process.env.RESEND_API_KEY ? "OK" : "MISSING");

  const body = (await request.json().catch((error) => {
    console.error("Invalid contact request JSON payload", error);
    return null;
  })) as ContactPayload | null;

  if (!body) {
    return Response.json({ error: "Invalid JSON payload" }, { status: 400 });
  }

  console.log("FORM DATA:", body);

  const payload = {
    name: sanitize(body.name, 100),
    email: sanitize(body.email, 120),
    company: sanitize(body.company, 120),
    serviceInterest: sanitize(body.serviceInterest, 80),
    goal: sanitize(body.goal, 1000),
  };

  if (!payload.name || !payload.email.includes("@") || !payload.company || payload.goal.length < 10) {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  const resendKey = process.env.RESEND_API_KEY;

  if (resendKey) {
    const resend = new Resend(resendKey);
    try {
      await resend.emails.send({
        from: `Advisera <${CONTACT_EMAIL}>`,
        to: [CONTACT_EMAIL],
        reply_to: payload.email,
        subject: `New strategy call lead: ${payload.company}`,
        html: `
          <h3>New Strategy Call Lead</h3>
          <p><b>Name:</b> ${payload.name}</p>
          <p><b>Email:</b> ${payload.email}</p>
          <p><b>Company:</b> ${payload.company}</p>
          <p><b>Service:</b> ${payload.serviceInterest}</p>
          <p><b>Goal:</b> ${payload.goal}</p>
        `,
      });
    } catch (error) {
      console.error("Failed to send lead email via Resend", error);
      return Response.json({ error: "Email failed" }, { status: 500 });
    }
  } else {
    console.warn("RESEND_API_KEY not set — skipping email send");
  }

  return Response.json({ ok: true });
}
