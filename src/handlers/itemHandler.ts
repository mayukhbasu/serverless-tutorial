import { APIGatewayProxyHandler } from "aws-lambda";
import { ItemService } from "../services/itemService";

const itemService = new ItemService();
let warmInvocationCount = 0;

export const handler: APIGatewayProxyHandler = async (event) => {
  console.log(`Lambda function invoked ${++warmInvocationCount} times`);

  try {
    // Fetch items from the DynamoDB table using the service
    const items = await itemService.fetchItems();

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Function executed successfully!",
        warmInvocationCount,
        items,
      }),
    };
  } catch (error:any) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Error retrieving items from DynamoDB",
        error: error.message,
      }),
    };
  }
};
