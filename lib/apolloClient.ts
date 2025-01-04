// lib/apolloClient.ts
import { ApolloClient, InMemoryCache, HttpLink, split } from '@apollo/client'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws'
import { getMainDefinition } from '@apollo/client/utilities'

// HTTPリンク (Query/Mutation用)
const httpLink = new HttpLink({
  uri: 'http://localhost:3001/graphql' // NestJSのGraphQLエンドポイント(HTTP)
})

// WebSocketリンク (Subscription用)
const wsLink = new GraphQLWsLink(
  createClient({
    url: 'ws://localhost:3001/graphql' // NestJSのGraphQLエンドポイント(WS)
  })
)

// splitLink:
// 1. OperationDefinition が "subscription" なら wsLink
// 2. それ以外(Query/Mutation)は httpLink
const splitLink = split(
  ({ query }) => {
    const def = getMainDefinition(query)
    return (
      def.kind === 'OperationDefinition' && def.operation === 'subscription'
    )
  },
  wsLink,
  httpLink
)

export const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  link: splitLink,
  headers: {
    'Content-Type': 'application/json'
  },
  cache: new InMemoryCache()
})
