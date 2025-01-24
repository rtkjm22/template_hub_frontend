import { NextResponse } from 'next/server'
import { client } from '@/lib/apolloClient'
import { LOGOUT } from '@/graphql/mutations/Logout'
import { APIHandler } from '@/lib/api'

const deleteMethod = async (request: Request) => {
  const data = await client.mutate({
    mutation: LOGOUT,
    context: {
      headers: {
        cookie: request.headers.get('cookie') || null
      }
    }
  })
  return NextResponse.json(data)
}
export const DELETE = APIHandler(deleteMethod)
