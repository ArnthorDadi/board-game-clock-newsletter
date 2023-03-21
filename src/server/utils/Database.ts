import { validateEmail } from "@src/utils/validateEmail";
import { EmailState } from "@src/server/utils/EmailService";
import { databaseClient } from "@src/server/utils/AWS";
import { DynamoDB } from "aws-sdk";

const tableName = "board-game-clock-newsletter";

export class Database {
  static async getEmailItem(email: string) {
    const getEmailPromise = databaseClient
      .getItem({
        TableName: tableName,
        Key: {
          pk: { S: `${EmailState.Verifying}|${email}` },
          sk: { S: `${EmailState.Verifying}|${email}` },
        },
      })
      .promise();
    return await getEmailPromise
      .then((data) => {
        return { emailItem: data.Item };
      })
      .catch((err) => {
        return { emailItem: undefined };
      });
  }

  static async saveEmail(email: string, state: EmailState) {
    if (!validateEmail(email)) {
      throw new Error(`Database - Invalid email: ${email}`);
    } else if (!state) {
      throw new Error(`Database - Invalid email state: ${state}`);
    }

    return databaseClient
      .putItem({
        TableName: tableName,
        Item: {
          pk: { S: `${state}|${email}` },
          sk: { S: `${state}|${email}` },
          email: { S: email },
        },
      })
      .promise()
      .then((data) => {
        return data;
      })
      .catch((err) => {
        return err;
      });
  }
}
