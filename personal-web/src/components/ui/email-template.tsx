import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Hello, {firstName}!</h1>
    <p>Feel free to contact me using whatsapp at (+62)81296238548</p>
    <p>I will get back to you as soon as possible.</p>

  </div>
);