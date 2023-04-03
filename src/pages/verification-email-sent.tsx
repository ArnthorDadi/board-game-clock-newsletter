import { type NextPage } from "next";
import { Button } from "@src/components/buttons/Button";
import { FormEvent, useCallback } from "react";
import { validateEmail } from "@src/utils/validateEmail";
import { Page } from "@src/pages/_app";

const VerificationEmailSent: NextPage = () => {
  return (
    <div className={"flex flex-1 flex-col items-center justify-center gap-12"}>
      <h1
        className={"mb-8 text-center text-3xl font-extrabold sm:text-[2.5rem] md:text-[3rem]"}
      >
        Thank You for Subscribing to the{" "}
        <span className={"text-primary"}>Board Game Clock</span> Newsletter!
      </h1>
      <div className={"flex max-w-[50rem] flex-col gap-4"}>
        <p className={"text-center text-xl text-gray-300"}>
          You're now signed up to receive updates on our progress and new
          releases related to board games. You can expect to receive periodic
          emails from us with all the latest updates.
        </p>
        <p className={"text-center text-xl text-gray-300"}>
          Before we can start sending you emails, we just need to confirm that
          you want to hear from us. We've sent a confirmation email to the
          address you provided. Please click the link in that email to confirm
          your subscription.
        </p>
        <p className={"text-center text-xl text-white"}>
          If you do not receive a verification email, please check your spam
          folder or contact us for assistance.
        </p>
      </div>
    </div>
  );
};

export default VerificationEmailSent;
