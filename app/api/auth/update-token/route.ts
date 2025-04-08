import { NextResponse } from "next/server"
import { client } from "@/lib/apolloClient"
import { APIHandler } from "@/lib/api"
import { UPDATE_TOKEN } from "@/graphql/queries/UpdateToken"

const getMethod = async (request: Request) => {
  const data = await client.query({
    query: UPDATE_TOKEN,
    context: {
      headers: {
        cookie: request.headers.get("cookie") || null,
      },
    },
  })
  return NextResponse.json(data)
}

export const GET = APIHandler(getMethod)
