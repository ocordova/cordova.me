import React from 'react'
import useSWR from 'swr'

import { Fiverr } from '../../types'
import { StatCard } from '../StatCard'
import { fetcher } from '../../utils/api'

export const FiverrRatings = () => {
  const { data } = useSWR<Fiverr>('/api/fiverr', fetcher)
  const icon = () => (
    <svg
      className="h-5 w-5 m-1 text-white"
      fill="currentColor"
      aria-hidden="true"
      viewBox="46.7 154 74.3 79.5"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="104.6" cy="163" r="9" />
      <path d="M114 177.9H72.8v-2.7c0-5.3 5.3-5.4 8-5.4 3.1 0 4.5.3 4.5.3v-14.6s-2.8-.4-6.6-.4c-8.6 0-24.5 2.4-24.5 20.6v2.3h-7.5v13.5h7.5V220h-7v13.5H81V220h-8.2v-28.5h22.5V220h-7v13.5H121V220h-7v-42.1Z" />
    </svg>
  )

  const rating = data?.rating
  return (
    <StatCard
      icon={icon}
      iconColor="bg-fiverr"
      name="Fiverr rating"
      stat={rating}
      prevStat="out of 5"
    />
  )
}
