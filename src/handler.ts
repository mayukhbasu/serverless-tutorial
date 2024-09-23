import { SSM } from 'aws-sdk';

// Initialize the SSM client
const ssm = new SSM();

exports.hello = async (event: any) => {
  try {
    // Retrieve the parameter from SSM Parameter Store
    const parameterName = 'db-password';
    const ssmParams = {
      Name: parameterName,
      WithDecryption: true // Enable decryption for SecureString parameters
    };

    const ssmResult = await ssm.getParameter(ssmParams).promise();
    const dbPassword = ssmResult.Parameter?.Value || "No value found";

    // Return the response for a simple GET request
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Hello, world!",
        secretValue: dbPassword
      }),
    };
  } catch (error) {
    console.error("Error occurred:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal Server Error" }),
    };
  }
};
