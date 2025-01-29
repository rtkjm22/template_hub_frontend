"use client"
import "./globals.css"
import { ApolloProvider } from "@apollo/client"
import { client } from "@/lib/apolloClient"
import Header from "./_components/Header"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className="bg-gray-50 dark:bg-gray-900">
        <ApolloProvider client={client}>
          <Header />
          <div className="flex w-full justify-center px-5 py-8 sm:px-4">
            {children}
          </div>
        </ApolloProvider>
      </body>
    </html>
  )
}
