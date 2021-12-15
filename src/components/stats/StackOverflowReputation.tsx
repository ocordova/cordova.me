import React from 'react'
import useSWR from 'swr'

import { StackOverflow } from '../../types'
import { StatCard } from '../StatCard'
import { fetcher } from '../../utils/api'

export const StackOverflowReputation = () => {
  const { data } = useSWR<StackOverflow>('/api/stackoverflow', fetcher)
  const icon = () => (
    <svg
      className="h-6 w-6 text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 512 512"
    >
      <title>Logo Stackoverflow</title>
      <path d="M392 440V320h40v160H64V320h40v120z" />
      <path d="M149.1 308.77l198.57 40.87 8.4-39.32-198.57-40.87zm26.27-93.12L359.22 300 376 263.76l-183.82-84.84zm50.95-89l156 127.78 25.74-30.52-156-127.78zM328 32l-33.39 23.8 120.82 160.37L448 192zM144 400h204v-40H144z" />
    </svg>
  )

  const reputation = data?.reputation
  return (
    <StatCard
      icon={icon}
      iconColor="bg-stackoverflow"
      name="Stack Overflow reputation"
      stat={reputation}
    />
  )
}
