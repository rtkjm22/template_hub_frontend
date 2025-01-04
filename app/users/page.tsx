import { client } from '@/lib/apolloClient'
import { GET_HELLO } from '@/graphql/queries/GetHello'
import Button from './_components/Button'

export default async function Page() {
  const { data } = await client.query({ query: GET_HELLO })
  console.log(data)
  return (
    <div>
      <p>{data.piyo}1</p>
      <Button />
    </div>
  )
}
