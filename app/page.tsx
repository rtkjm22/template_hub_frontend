import { client } from '@/lib/apolloClient'
import { GET_HELLO } from '@/graphql/queries/GetHello'
import Button from './users/_components/Button'
import { SEARCH_USERS } from '@/graphql/queries/SearchUsers'

export default async function Home() {
  const { data } = await client.query({ query: SEARCH_USERS, variables: {
    fullname: "aaa"
  } })
  // const {data: hoge} = await client.mutate({mutation: REGISTER_USER})
  console.log(data)
  return (
    <div>
      {/* <p>{data.piyo}1</p> */}
      <Button />
    </div>
  )
}
