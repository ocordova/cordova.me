import React from 'react'
import useSWR from 'swr'
import { StarIcon } from '@heroicons/react/solid'

import { GitHub } from '../../types'
import { StatCard } from '../StatCard'
import { fetcher } from '../../utils/api'

export const GithubStars = () => {
  const { data } = useSWR<GitHub>('/api/github', fetcher)
  const stars = data?.stars
  return (
    <StatCard
      icon={StarIcon}
      iconColor="bg-gray-500"
      name="GitHub stars"
      stat={stars}
    />
  )
}
