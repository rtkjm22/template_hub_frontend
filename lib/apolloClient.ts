import { ApolloClient, InMemoryCache, HttpLink, split } from "@apollo/client"
import { GraphQLWsLink } from "@apollo/client/link/subscriptions"
import { createClient } from "graphql-ws"
import { getMainDefinition } from "@apollo/client/utilities"

let cookieFromNest: string | null = null

// HTTPリンク (Query/Mutation用)
const httpLink = new HttpLink({
  uri: "https://localhost:3001/graphql",
  credentials: "include", // クッキーを自動で送信
  fetch: async (uri, options) => {
    const response = await fetch(uri, options)
    cookieFromNest = response.headers.get("set-cookie")
    return response
  },
})

// WebSocketリンク (Subscription用)
const wsLink = new GraphQLWsLink(
  createClient({
    url: "wss://localhost:3001/graphql", // NestJSのGraphQLエンドポイント(WS)
    connectionParams: {
      credentials: "include", // クッキーを自動で送信
    },
  })
)

// splitLink: subscription用とそれ以外を分岐
const splitLink = split(
  ({ query }) => {
    const def = getMainDefinition(query)
    return (
      def.kind === "OperationDefinition" && def.operation === "subscription"
    )
  },
  wsLink,
  httpLink
)

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: "no-cache",
    },
    mutate: {
      fetchPolicy: "no-cache",
    },
  },
})

export { client, cookieFromNest }
