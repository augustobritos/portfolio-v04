import { EmailTemplate } from "@/components/email/email-template";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL_ADDRESS;
const toEmail = process.env.TO_EMAIL_ADDRESS;
const emailSubject = process.env.EMAIL_SUBJECT;

interface EmailSendRequest {
  from: string;
  to: string;
  subject: string;
  react: React.ReactElement;
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  console.log("POST REQUEST...");
  const note = await req.body;

  console.log("NOTE...", note);

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: emailSubject,
      react: EmailTemplate(note),
    } as EmailSendRequest);

    if (error) {
      console.error("ERROR: ", error);

      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("ERROR: ", error);

    return NextResponse.json({ error }, { status: 500 });
  }
}
