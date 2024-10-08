import { EmailTemplate } from "@/components/email/email-template";
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

export async function POST(req: Request) {
  const note = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: emailSubject,
      react: EmailTemplate(note),
    } as EmailSendRequest);

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
