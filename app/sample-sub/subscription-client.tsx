// app/sample-sub/subscription-client.tsx
'use client' // これでClient Componentとして扱われる

import React, { useEffect, useState } from 'react'
import { ApolloProvider, gql, useSubscription } from '@apollo/client'
import { client } from '@/lib/apolloClient'

type Sample = {
  id: number
  name: string
}

const SAMPLE_SUBSCRIPTION = gql`
  subscription OnSampleCreated {
    sampleCreated {
      id
      name
    }
  }
`

function SubscriptionComponent({
  initialSamples
}: {
  initialSamples: Sample[]
}) {
  const [samples, setSamples] = useState<Sample[]>(initialSamples)

  // Subscriptionの購読
  const { data } = useSubscription(SAMPLE_SUBSCRIPTION)

  useEffect(() => {
    if (data?.sampleCreated) {
      setSamples((prev) => [...prev, data.sampleCreated])
    }
  }, [data])

  return (
    <ul>
      {samples.map((s) => (
        <li key={s.id}>
          {s.id}: {s.name}
        </li>
      ))}
    </ul>
  )
}

export default function SubscriptionClient({
  initialSamples
}: {
  initialSamples: Sample[]
}) {
  return (
    <ApolloProvider client={client}>
      <SubscriptionComponent initialSamples={initialSamples} />
    </ApolloProvider>
  )
}
