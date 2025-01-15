'use client'
import './globals.css'
import { ApolloProvider } from '@apollo/client'
import { client } from '@/lib/apolloClient'
import Header from './_components/Header'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body>
        <ApolloProvider client={client}>
          <Header />
          {children}
        </ApolloProvider>
      </body>
    </html>
  )
}
