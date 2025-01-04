'use server'
import { client } from '@/lib/apolloClient'
import { REGISTER_USER } from '@/graphql/mutations/Register'

export async function piyo() {
  const { data: hoge } = await client.mutate({
    mutation: REGISTER_USER,
    variables: {
      fullname: 'hogehogeaaaa'
    }
  })
  console.log(hoge)
}
