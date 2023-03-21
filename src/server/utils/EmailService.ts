import { Database } from "@src/server/utils/Database";
import { validateEmail } from "@src/utils/validateEmail";
import { getVerificationEmail } from "@src/server/assets/emails/VerificationEmail";
import { emailClient } from "@src/server/utils/AWS";

export enum EmailState {
  Verifying = "verifying",
  Subscription = "subscription",
  Unsubscribed = "unsubscribed",
}

export class EmailService {
  static database = Database;

  static async sendVerificationEmail(email: string) {
    if (!validateEmail(email)) {
      throw new Error("EmailService - Invalid email!");
    }

    await emailClient
      .sendEmail({
        Destination: {
          ToAddresses: [email],
        },
        Message: {
          Body: {
            Html: {
              Charset: "UTF-8",
              Data: `${getVerificationEmail(email)}`,
            },
          },
          Subject: {
            Charset: "UTF-8",
            Data: "Confirm Your Subscription to the Board Game Clock Newsletter",
          },
        },
        Source: "arnthordj+boardgameclocknewsletter@gmail.com",
      })
      .promise()
      .then(async (data) => {
        console.log("Email sent", { data });
      })
      .catch((err) => {
        console.error(err);
      });
  }
}
