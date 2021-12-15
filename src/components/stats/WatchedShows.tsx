import React from 'react'
import useSWR from 'swr'
import { DesktopComputerIcon } from '@heroicons/react/outline'

import { Trakt } from '../../types'
import { StatCard } from '../StatCard'
import { fetcher } from '../../utils/api'

export const WatchedShows = () => {
  const { data } = useSWR<Trakt>('/api/trakt', fetcher)
  const icon = () => <DesktopComputerIcon className="h-6 w-6 text-white" />

  const shows = data?.watchedShows
  return (
    <StatCard
      icon={icon}
      iconColor="bg-blue-500"
      name="Watched shows"
      stat={shows}
      to="https://trakt.tv/users/ocordova"
    />
  )
}
