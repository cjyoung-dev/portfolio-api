import {VercelRequest, VercelResponse} from "@vercel/node";
import { Resend} from "resend";
import { sendSuccess, sendError} from "../lib/response";
import {runCors} from "../lib/cors";
import { Contact} from "../types";

const resend = new Resend(process.env.RESEND_API_KEY);

function validatePayload(body: unknown): body is Contact{
  if (!body || typeof body !== "object") return false;
  
  const b = body as Record<string, unknown>;
  return (
    typeof b.name === "string" &&
    b.name.trim().length > 0 &&
    typeof b.company === "string" &&
    b.company.trim().length > 0 &&
    typeof b.email === "string" &&
    b.email.includes("@") &&
    typeof b.message === "string" &&
    b.message.trim().length > 0
  );
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (runCors(req, res)) return;

  if(req.method !== "POST") {
    sendError(res, 405, "Method not allowed");
    return;
  }

  if (!validatePayload(req.body)) {
    sendError(res, 405, "Invalid body. Required field: name, company, email, message");
    return;
  }

  const { name, company, email, message } = req.body as Contact;

  try{
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "carson.young18@gmail.com",
      replyTo: email,
      subject: `Portfolio contact from ${name}`,
      html: `
        <h2>New Portfolio Contact</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    sendSuccess<{message: string}>(res, {message: 'Message sent successfully'});
  } catch (error) {
    console.error("Resend error:", error);
    sendError(res, 500, `Failed to send message`);
  }
}