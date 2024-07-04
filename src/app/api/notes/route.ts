import { EmailTemplate } from "@/components/email/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY); //OK
const fromEmail = process.env.FROM_EMAIL_ADDRESS; //OK
const toEmail = process.env.TO_EMAIL_ADDRESS; //OK
const emailSubject = process.env.EMAIL_SUBJECT; //OK

interface EmailSendRequest {
  from: string;
  to: string;
  subject: string;
  react: React.ReactElement;
}

export async function POST(req: Request) {
  
  if (req.method === 'POST') {
    console.log("POST REQUEST...");
  }
  

  const note = await req.json();

  console.log("NOTE...");

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: emailSubject,
      react: EmailTemplate(note),
    } as EmailSendRequest);

    if (error) {
      console.error("ERROR: ", error);

      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.error("ERROR: ", error);

    return Response.json({ error }, { status: 500 });
  }
}
