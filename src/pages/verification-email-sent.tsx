import { type NextPage } from "next";
import { Button } from "@src/components/buttons/Button";
import { FormEvent, useCallback } from "react";
import { validateEmail } from "@src/utils/validateEmail";
import { Page } from "@src/pages/_app";

const VerificationEmailSent: NextPage = () => {
  return (
    <div className={"flex flex-1 flex-col items-center justify-center gap-12"}>
      <h1 className={"text-center text-5xl font-extrabold  sm:text-[3rem]"}>
        Email has been sent!
      </h1>
      <p className={"text-center text-base"}>
        If you do not receive a verification email, please check your spam
        folder or contact us for assistance.
      </p>
    </div>
  );
};

export default VerificationEmailSent;
