import React from 'react'
import useSWR from 'swr'
import { FilmIcon } from '@heroicons/react/outline'

import { Trakt } from '../../types'
import { StatCard } from '../StatCard'
import { fetcher } from '../../utils/api'

export const WatchedMovies = () => {
  const { data } = useSWR<Trakt>('/api/trakt', fetcher)
  const icon = () => <FilmIcon className="h-6 w-6 text-white" />

  const movies = data?.watchedMovies
  return (
    <StatCard
      icon={icon}
      iconColor="bg-pink-500"
      name="Watched movies"
      stat={movies}
      to="https://trakt.tv/users/ocordova"
    />
  )
}
