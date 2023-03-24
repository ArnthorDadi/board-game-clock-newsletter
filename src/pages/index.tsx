import { type NextPage } from "next";
import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/router";
import { api } from "@src/utils/api";
import { Input } from "@src/components/form/Input";
import { Button } from "@src/components/buttons/Button";
import { Page } from "@src/pages/_app";
import { validateEmail } from "@src/utils/validateEmail";
import { ReCaptchaProvider, useReCaptcha } from "next-recaptcha-v3";

const Home: NextPage = () => {
  const sendValidationEmail = api.subscription.sendValidationEmail.useMutation({
    onSuccess: async (asyncData) => {
      const data = await asyncData;
    },
  });

  const { executeRecaptcha } = useReCaptcha();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (emailError) {
      setEmailError("");
    }
    setEmail(e.target.value);
  };

  // Todo: red email alert / validation
  const onSubmitSubscribableEmail = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      setEmailError("Invalid email!");
      return;
    }

    try {
      const token = await executeRecaptcha("validate_email");
      await sendValidationEmail.mutate({ email, token });
      await router.push(Page.VerificationEmailSent);
    } catch (e) {
      console.error("sendValidationEmail", { e });
    }
  };

  return (
    <>
      <div className="flex flex-1 flex-col items-center justify-center gap-24">
        <h1 className="text-center text-5xl font-extrabold sm:text-[3rem]">
          Subscribe to the{"  "}
          <span className="text-primary">Board game clock</span> newsletter!
        </h1>
        <div className={"flex max-w-sm flex-col gap-12"}>
          <p className={"text-center text-base "}>
            Join our community of board game enthusiasts and get weekly updates
            on <span className="text-primary">Board Game Clock</span>!
          </p>
          <form
            onSubmit={onSubmitSubscribableEmail}
            className={"flex flex-col gap-2"}
          >
            <label htmlFor={"email"} className={"text-base"}>
              Email
            </label>
            <div className={"flex w-full flex-col gap-2 sm:flex-row"}>
              <div className={"flex w-full flex-col gap-2"}>
                <Input
                  id={"email"}
                  type="email"
                  placeholder="your-email@email.com"
                  name="email"
                  className={"h-11 py-2 px-4 text-white"}
                  onChange={onEmailChange}
                />

                {emailError ? (
                  <p className="text-sm text-red-400">*{emailError}</p>
                ) : null}
              </div>
              <Button variant={"default"} size={"lg"} fill={"sm"} type="submit">
                Subscribe
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

const ReCaptchaWrapper = () => {
  return (
    <ReCaptchaProvider>
      <Home />
    </ReCaptchaProvider>
  );
};

export default ReCaptchaWrapper;
