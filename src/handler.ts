exports.hello = async (event: any) => {
  try {
    // Your logic here
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Hello, world!" }),
    };
  } catch (error) {
    console.error("Error occurred:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal Server Error" }),
    };
  }
};
