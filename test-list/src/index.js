import { QueryCommand } from "@aws-sdk/lib-dynamodb";
async function ___DATABASE_OPERATION___() {
  try {
    const pk = "___PK___";
    const sk = "___SK___";
    const params = {
      TableName: DYNAMODB_TABLE_NAME,
      ExpressionAttributeValues: {
        ":pk": pk,
        ":sk": sk
      },
      KeyConditionExpression: `pk = :pk and  sk = :sk`
    };
    const response = await ddbDocClient.send(new QueryCommand(params));
    return response;
  } catch (error) {
    console.log(error);
    return {
      error,
      message: error["__type"].split("#")[1]
    };
  }
}