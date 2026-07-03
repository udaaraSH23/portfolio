import { NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactPayload {
  name?: string;
  email?: string;
  projectType?: string;
  message?: string;
}

// Basic email shape check — good enough for a contact form.
const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const escapeHtml = (value: string) =>
  value.replace(
    /[&<>"']/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        char
      ] as string,
  );

export async function POST(request: Request) {
  let data: ContactPayload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const name = data.name?.trim();
  const email = data.email?.trim();
  const projectType = data.projectType?.trim();
  const message = data.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }
  if (!isEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !toEmail || !fromEmail) {
    return NextResponse.json({ error: "not_configured" }, { status: 501 });
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New project inquiry — ${projectType || "General"}`,
      text: `Name: ${name}\nEmail: ${email}\nProject type: ${projectType || "Not specified"}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${escapeHtml(name)}</p>
<p><strong>Email:</strong> ${escapeHtml(email)}</p>
<p><strong>Project type:</strong> ${escapeHtml(projectType || "Not specified")}</p>
<p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>`,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Error sending email via Resend:", err);
    return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
  }
}
