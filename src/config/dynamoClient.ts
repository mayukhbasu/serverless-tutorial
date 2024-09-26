import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

let cachedDynamoDBClient: DynamoDBClient | null = null;

export const getDynamoDBClient = (): DynamoDBClient  => {
  if(cachedDynamoDBClient) {
    console.log("Reusing cached DynamoDB client");
    return cachedDynamoDBClient;
  }

  console.log("Creating a new DynamoDB client");
  cachedDynamoDBClient = new DynamoDBClient({ region: process.env.AWS_REGION || "us-east-1" });
  return cachedDynamoDBClient;
}