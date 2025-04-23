"use server";

import { Resend } from "resend";
import { z } from "zod";
import { formSchema } from "./schemas";
import { EmailTemplate } from "@/components/ui/email-template";
import { ReactNode } from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const send = async (emailFormData: z.infer<typeof formSchema>) => {
  try {
    
    // Construct the email body for the internal email (for fauzansiswantoro@gmail.com)
    const emailBody = `
      <p><strong>Name:</strong> ${emailFormData.firstName}</p>
      <p><strong>Email:</strong> ${emailFormData.email}</p>
      <p><strong>Message:</strong></p>
      <p>${emailFormData.message}</p>
    `;

    // Send the email to the user with the EmailTemplate (React component)
    const { error: userError } = await resend.emails.send({
      from: `Fauzan <${process.env.RESEND_FROM_EMAIL}>`,
      to: [emailFormData.email],
      subject: "Thank you for reaching out!",
      react: EmailTemplate({ firstName: emailFormData.firstName }) as ReactNode,
      replyTo: emailFormData.email,
    });
    

    if (userError) {
      throw userError;
    }

    // Send a plain email to fauzansiswantoro@gmail.com (internal notification)
    const { error: internalError } = await resend.emails.send({
      from: `Fauzan Personal Web <${process.env.RESEND_FROM_EMAIL}>`,
      to: ["fauzansiswantoro@gmail.com"],
      subject: "New Message from Contact Form",
      html: emailBody,
      replyTo: emailFormData.email,
    });

    if (internalError) {
      throw internalError;
    }

    // Return success message if emails were sent successfully
    return { success: true, message: "Your message was successfully sent!" };

  } catch (e) {
    throw e;
  }
};
