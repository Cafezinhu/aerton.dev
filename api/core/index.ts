import { APIGatewayEvent, Context } from 'aws-lambda';
import createAPI from 'lambda-api';

const api = createAPI();

api.register(require("./src/teste"), { prefix: "/teste" });

export async function handler(event: APIGatewayEvent, context: Context, callback: any) {
    return await api.run(event, context);
}