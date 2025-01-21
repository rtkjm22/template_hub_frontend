import { ApolloClient, InMemoryCache, HttpLink, split } from '@apollo/client'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws'
import { getMainDefinition } from '@apollo/client/utilities'

// HTTPリンク (Query/Mutation用)
const httpLink = new HttpLink({
  uri: 'https://localhost:3001/graphql', // NestJSのGraphQLエンドポイント(HTTP)
  credentials: 'include' // HttpOnlyクッキーを使用するため
})

// WebSocketリンク (Subscription用)
const wsLink = new GraphQLWsLink(
  createClient({
    url: 'wss://localhost:3001/graphql', // NestJSのGraphQLエンドポイント(WS)
    connectionParams: {
      // 必要に応じてトークンをヘッダーとして渡す
    }
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
  link: splitLink,
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: 'no-cache'
    },
    mutate: {
      fetchPolicy: 'no-cache'
    }
  }
})
