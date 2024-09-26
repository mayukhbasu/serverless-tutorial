import { ScanCommand } from "@aws-sdk/client-dynamodb";
import { getDynamoDBClient } from "../config/dynamoClient";

export class ItemService {
  private dynamoDBClient = getDynamoDBClient();
  private tableName = process.env.DYNAMODB_TABLE_NAME || "YourDynamoDBTableName"; 
  async fetchItems(limit: number = 5) {
    const params = {
      TableName: this.tableName,
      Limit: limit,
    };

    try {
      const command = new ScanCommand(params);
      const result = await this.dynamoDBClient.send(command);
      return result.Items;
    } catch (error) {
      console.error("Error fetching items from DynamoDB:", error);
      throw error;
    }
  }
}