import { client } from '@/lib/apolloClient'
import Button from './users/_components/Button'
import { SEARCH_USERS } from '@/graphql/queries/SearchUsers'

export default async function Home() {
  // const { data } = await client.query({
  //   query: SEARCH_USERS,
  //   variables: {
  //     lastName: 'a'
  //   },
  //   fetchPolicy: 'network-only'
  // })
  // const {data: hoge} = await client.mutate({mutation: REGISTER_USER})
  return <div></div>
}
