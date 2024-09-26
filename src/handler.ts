// src/handler.ts
import axios from 'axios';
import { APIGatewayProxyHandler } from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async (event) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Successfully fetched data from Axios",
        data: response.data,
      }),
    };
  } catch (error: any) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Error fetching data",
        error: error.message,
      }),
    };
  }
};
