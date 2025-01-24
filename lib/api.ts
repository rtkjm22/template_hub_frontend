/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApolloError } from '@apollo/client'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { cookieFromNest } from './apolloClient'

export function parseCookies(cookieString: string) {
  const cookies: Record<string, string> = {}

  // セミコロンで分割して1つずつ処理
  cookieString.split(',').forEach((cookie) => {
    const [keyValue] = cookie.trim().split(';')
    const [key, value] = keyValue.split('=')
    if (key && value) {
      cookies[key.trim()] = value.trim()
    }
  })

  return {
    accessToken: cookies['access_token'],
    refreshToken: cookies['refresh_token']
  }
}

export const APIHandler = (
  restHandler: (request: Request, context?: any) => Promise<Response>
) => {
  return async (request: Request) => {
    try {
      // ブラウザから送信されたCookieを取得
      const clientCookies = (await cookies()).getAll()
      const cookieHeader = clientCookies
        .map((cookie) => `${cookie.name}=${cookie.value}`)
        .join('; ')

      const body = request.body ? await request.text() : null
      const modifiedRequest = new Request(request.url, {
        method: request.method,
        headers: {
          ...Object.fromEntries(request.headers),
          cookie: cookieHeader // クライアントから受け取ったクッキーを追加
        },
        body: body || undefined // ボディが存在する場合のみ設定
      })

      // ハンドラでリクエストを処理
      const nestResponse = await restHandler(modifiedRequest)

      // クライアントにレスポンスを返却
      const response = NextResponse.json(await nestResponse.json(), {
        status: nestResponse.status,
        headers: Object.fromEntries(nestResponse.headers)
      })
      // nest から受け取ったレスポンスの `Set-Cookie` ヘッダーを取得
      // `Set-Cookie` ヘッダーが存在する場合、クライアントにそのまま付与
      if (cookieFromNest) {
        response.headers.set('set-cookie', cookieFromNest)
      }

      return response
    } catch (error: unknown) {
      if (error instanceof ApolloError) {
        if (error.graphQLErrors) {
          console.error('GraphQLエラー:', error.graphQLErrors)
          return NextResponse.json(
            {
              message: `GraphQL Error: ${JSON.stringify(error.graphQLErrors)}`
            },
            { status: 404 }
          )
        }
        if (error.networkError) {
          console.error('ネットワークエラー:', error.networkError)
          return NextResponse.json(
            {
              message: `Network Error: ${error.networkError.message}`
            },
            { status: 500 }
          )
        }
      }

      // それ以外のエラーの場合
      if (error instanceof Error) {
        console.error(`エラー: ${error.message}`)
        return NextResponse.json(
          {
            message: `Error occurred: ${error.message}`
          },
          { status: 400 }
        )
      }

      // 未知のエラーの場合
      console.error('未知のエラー:', error)
      return NextResponse.json(
        {
          message: 'An unknown error occurred'
        },
        { status: 400 }
      )
    }
  }
}
