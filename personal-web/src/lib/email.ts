"use server";

import { Resend } from "resend";
import { z } from "zod";
import { formSchema } from "./schemas";

const resend = new Resend(process.env.RESEND_API_KEY);

export const send = async (emailFormData: z.infer<typeof formSchema>) => {
  try {
    
    const emailBody = `
      <p><strong>Name:</strong> ${emailFormData.firstName} ${emailFormData.lastName}</p>
      <p><strong>Email:</strong> ${emailFormData.email}</p>
      <p><strong>Message:</strong></p>
      <p>${emailFormData.message}</p>
    `;

    const { error: internalError } = await resend.emails.send({
      from: `Fauzan Personal Web <${process.env.RESEND_FROM_EMAIL}>`,
      to: ["fauzansiswantoro@gmail.com"],
      subject: "New Message from Contact Form",
      html: emailBody,
      replyTo: emailFormData.email,
    });

    if (internalError) {
      return { success: false, message: "Failed to send your message. Please try again later." };
    }

    return { success: true, message: "Your message was successfully sent!" };

  } catch (e) {
    console.error("Email sending failed:", e);

    return {
      success: false,
      message: "Something went wrong while sending your message. Please try again later.",
    };
  }
};
