import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { api } from "@src/utils/api";
import { Page } from "@src/pages/_app";

enum VerifyStep {
  GettingEmail = "GettingEmail",
  VerifyingEmail = "VerifyingEmail",
  EmailNotFound = "EmailNotFound",
  SavingEmail = "SavingEmail",
  EmailIsSubscribed = "EmailIsSubscribed",
}

const VerifiedEmail: NextPage = () => {
  const subscribeEmail = api.subscription.subscribe.useMutation({
    onSuccess: (data) => {
      setVerifyStep(VerifyStep.EmailIsSubscribed);
    },
    onError: (error) => {
      setVerifyStep(VerifyStep.EmailNotFound);
    },
  });
  const router = useRouter();
  const { email: routerEmail } = router.query ?? {};

  const [verifyStep, setVerifyStep] = useState(VerifyStep.GettingEmail);
  const [email, setEmail] = useState<string>(routerEmail as string);

  const haveSendVerificationEmailToEmailResponse =
    api.subscription.haveSendVerificationEmailToEmail.useQuery({
      email,
    });
  /* Have we sent verification email to that email? */
  const isRouterEmailInBackend =
    !!haveSendVerificationEmailToEmailResponse.data
      ?.haveSendVerificationEmailToEmail;
  const isRouterEmail = !!routerEmail;

  useEffect(() => {
    if (!email) {
      setEmail(routerEmail as string);
    }
  }, [routerEmail]);

  useEffect(() => {
    const subscribeVerifiedEmail = async () => {
      await subscribeEmail.mutate({ email });
      setVerifyStep(VerifyStep.EmailIsSubscribed);
      await router.push(Page.EmailSubscribed);
    };
    if (!isRouterEmail || !isRouterEmailInBackend) {
      setVerifyStep(VerifyStep.EmailNotFound);
    } else if (isRouterEmail && isRouterEmailInBackend) {
      setVerifyStep(VerifyStep.SavingEmail);
      subscribeVerifiedEmail();
    }
  }, [isRouterEmail, isRouterEmailInBackend]);

  return (
    <div className={"flex flex-1 items-center justify-center"}>
      {verifyStep === VerifyStep.GettingEmail ? (
        <h1 className={"text-center text-[5rem]"}>Getting email...</h1>
      ) : null}
      {verifyStep === VerifyStep.EmailNotFound ? (
        <div>
          <h1 className={"text-center text-[5rem]"}>Email not found!</h1>
          <p className={"text-center text-xl"}>
            Some text saying that the email was not found.
          </p>
        </div>
      ) : null}
      {verifyStep === VerifyStep.VerifyingEmail ? (
        <h1 className={"text-center text-[5rem]"}>Verifying email...</h1>
      ) : null}
      {verifyStep === VerifyStep.SavingEmail ? (
        <h1 className={"text-center text-[5rem]"}>Saving email...</h1>
      ) : null}
      {verifyStep === VerifyStep.EmailIsSubscribed ? (
        <h1 className={"text-center text-[5rem]"}>Subscribed!</h1>
      ) : null}
    </div>
  );
};

export default VerifiedEmail;
