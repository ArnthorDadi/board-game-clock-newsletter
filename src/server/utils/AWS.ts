import AWS, { SES } from "aws-sdk";
import { env } from "@src/env.mjs";

export const REGION = "eu-north-1";

export type TDynamoConfig = {
  region: string;
  accessKeyId: string;
  secretAccessKey: string;
};

export const DYNAMO_CONFIG: TDynamoConfig = {
  region: REGION,
  accessKeyId: env.AWS_ACCESS_KEY_ID,
  secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
};

AWS.config.update({
  region: REGION,
  credentials: {
    accessKeyId: env.AWS_ACCESS_KEY_ID,
    secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
  },
});

export const databaseClient = new AWS.DynamoDB({});
export const emailClient = new AWS.SES({});
