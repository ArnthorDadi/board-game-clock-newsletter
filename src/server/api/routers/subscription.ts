import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@src/server/api/trpc";
import { validateEmail } from "@src/utils/validateEmail";
import { EmailService, EmailState } from "@src/server/utils/EmailService";
import { useReCaptcha } from "next-recaptcha-v3";
import { env } from "@src/env.mjs";

export enum SendValidationEmailErrorState {
  InvalidEmail = "Invalid_Email",
  SaveEmailInDatabase = "SAVE_EMAIL_IN_DATABASE",
  SendVerificationEmail = "SEND_VERIFICATION_EMAIL",
  ReCaptchaFailed = "ReCaptcha_Failed",
}

export const subscriptionRouter = createTRPCRouter({
  /* Todo: error catch every api calls for database and email service */
  sendValidationEmail: publicProcedure
    .input(z.object({ email: z.string(), token: z.string() }))
    .mutation<
      Promise<{
        success: boolean;
        errorState?: SendValidationEmailErrorState;
        error?: string | unknown;
      }>
    >(async ({ input }) => {
      const { email, token } = input ?? {};
      if (!validateEmail(email)) {
        return {
          success: false,
          errorState: SendValidationEmailErrorState.InvalidEmail,
          error: undefined,
        };
      }

      try {
        const response = await fetch(
          "https://www.google.com/recaptcha/api/siteverify",
          {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `secret=${env.RECAPTCHA_SECRET_KEY}&response=${token}`,
          }
        );
        console.log("", { response });
        const json = (await response.json()) as { success: boolean };
        if (!json.success) {
          throw new Error("Invalid recaptcha token");
        }
        console.log("", { json });
      } catch (e) {
        console.log("Email failed", { e });
        return {
          success: false,
          errorState: SendValidationEmailErrorState.ReCaptchaFailed,
          error: e,
        };
      }

      try {
        // Save email as verifying email to check if we have sent a verification email
        // to that address later on.
        await EmailService.database.saveEmail(email, EmailState.Verifying);
      } catch (e) {
        console.log(
          "EmailService.database.saveEmail(email, EmailState.Verifying)",
          { e }
        );
        return {
          success: false,
          errorState: SendValidationEmailErrorState.SaveEmailInDatabase,
          error: e,
        };
      }
      try {
        await EmailService.sendVerificationEmail(email);
      } catch (e) {
        return {
          success: false,
          errorState: SendValidationEmailErrorState.SendVerificationEmail,
          error: e,
        };
      }
      return {
        success: true,
      };
    }),
  haveSendVerificationEmailToEmail: publicProcedure
    .input(z.object({ email: z.string().optional() }))
    .query(async ({ input }) => {
      const { email } = input ?? {};
      if (!email) {
        return {
          haveSendVerificationEmailToEmail: false,
        };
      }
      try {
        const emailItem = await EmailService.database.getEmailItem(email);
        return {
          haveSendVerificationEmailToEmail: !!emailItem?.emailItem,
        };
      } catch (e) {
        return {
          haveSendVerificationEmailToEmail: false,
          error: e,
        };
      }
    }),

  subscribe: publicProcedure
    .input(z.object({ email: z.string() }))
    .mutation(async ({ input }) => {
      // Todo: Validate email
      if (!validateEmail(input.email)) {
        return;
      }
      const emailItem = await EmailService.database.getEmailItem(input.email);
      if (!emailItem.emailItem) {
        return;
      }

      await EmailService.database.saveEmail(
        input.email,
        EmailState.Subscription
      );
      // Let the user know that he/she is subscribed to the newsletter
      // await EmailService.sendSubscriptionVerificationEmail();
    }),
});
