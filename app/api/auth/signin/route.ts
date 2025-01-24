import { NextResponse } from 'next/server'
import { client } from '@/lib/apolloClient'
import { SIGNIN } from '@/graphql/mutations/Signin'
import { APIHandler } from '@/lib/api'

const postMethod = async (request: Request) => {
  const body = await request.json()
  const data = await client.mutate({
    mutation: SIGNIN,
    variables: body,
    context: {
      headers: {
        cookie: request.headers.get('cookie') || null
      }
    }
  })
  return NextResponse.json(data)
}

export const POST = APIHandler(postMethod)
