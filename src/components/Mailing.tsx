import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

import { Paragraph } from "./Paragraph";

interface Props {
  text: string;
}

interface FormProps {
  subscribe: any;
  status: any;
  message: any;
}

export const Form: React.FC<FormProps> = ({ subscribe, status, message }) => {
  const [email, setEmail] = React.useState("");

  return (
    <form
      className="flex flex-row items-center gap-2"
      onSubmit={(e) => {
        e.preventDefault();

        if (!email) return;

        subscribe({
          MERGE0: email,
        });
      }}
    >
      <input
        className="px-6 py-4 text-black rounded-full lg:w-96"
        type="email"
        placeholder="Get on the list! (email)"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        {...(status === "success" ? { readOnly: true } : {})}
      />

      {status === "success" ? (
        <span className="font-semibold">{message}</span>
      ) : (
        <button
          className="bg-[#e41388] px-6 py-4 space-x-2 rounded-full hover:opacity-70 transition-all"
          type="submit"
        >
          <span className="font-semibold">Join</span>
        </button>
      )}
    </form>
  );
};

export const Mailing = React.forwardRef<HTMLDivElement, Props>(
  ({ text }, ref) => {
    const postUrl = `https://gmail.us11.list-manage.com/subscribe/post?u=${"6199c04658e592bafab08cbd8"}&id=${"5a8cb64ae9"}`;

    return (
      <div className="flex flex-col items-center gap-2 p-2 lg:justify-center lg:flex-row lg:gap-4">
        <Paragraph className="font-semibold">{text}</Paragraph>

        <MailchimpSubscribe
          url={postUrl}
          render={({ subscribe, status, message }) => (
            <Form subscribe={subscribe} status={status} message={message} />
          )}
        />
      </div>
    );
  }
);
