import { NextResponse } from "next/server"
import { client } from "@/lib/apolloClient"
import { LOGIN } from "@/graphql/mutations/Login"
import { APIHandler } from "@/lib/api"

const postMethod = async (request: Request) => {
  const body = await request.json()
  const { email, password } = body
  const data = await client.mutate({
    mutation: LOGIN,
    variables: {
      email,
      password,
    },
    context: {
      headers: {
        cookie: request.headers.get("cookie") || null,
      },
    },
  })
  return NextResponse.json(data)
}

export const POST = APIHandler(postMethod)
