import { GraphQLClient } from 'graphql-request';

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}`;

export const graphqlClient = new GraphQLClient(endpoint, {
    headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_CONTENT_DELIVERY_ACCESS_TOKEN}`,
    },
});