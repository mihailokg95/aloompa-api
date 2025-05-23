import { ApolloServer } from '@apollo/server';
import { startServerAndCreateLambdaHandler, handlers } from '@as-integrations/aws-lambda';
import typeDefs from '../src/graphql/schema.js';
import resolvers from '../src/graphql/resolvers.js';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
});

const apolloHandler = startServerAndCreateLambdaHandler(
  server,
  handlers.createAPIGatewayProxyEventRequestHandler()
);

export const handler = async (event, context) => {
  const method = event?.httpMethod

  if (method === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
      body: '',
    };
  }

  const response = await apolloHandler(event, context);

  return {
    ...response,
    headers: {
      ...(response.headers || {}),
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
    },
  };
};
