import React from 'react'
import useSWR from 'swr'

import { Lastfm } from '../../types'
import { StatCard } from '../StatCard'
import { fetcher } from '../../utils/api'

export const LastfmScrobbles = () => {
  const { data } = useSWR<Lastfm>('/api/lastfm', fetcher)
  const icon = () => (
    <svg
      className="h-6 w-6 text-white"
      fill="currentColor"
      aria-hidden="true"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m228.868 355.816-16.892-45.82s-27.402 30.546-68.46 30.546c-36.387 0-62.173-31.623-62.173-82.206 0-64.776 32.705-87.956 64.778-87.956 59.745 0 67.203 47.886 90.651 121.198 16.89 51.121 48.516 92.179 139.617 92.179 65.315 0 109.608-20.033 109.608-72.683 0-65.495-56.331-72.414-103.32-82.745-23.179-5.302-30.009-14.734-30.009-30.547 0-17.878 14.197-28.48 37.378-28.48 25.334 0 38.99 9.524 41.057 32.163l52.647-6.289c-4.223-47.437-36.924-66.933-90.652-66.933-47.436 0-93.795 17.879-93.795 75.379 0 35.847 17.43 58.488 61.095 69 40.338 9.522 71.694 12.397 71.694 41.058 0 19.498-18.958 27.403-54.805 27.403-53.188 0-75.379-27.942-87.957-66.395-28.75-86.97-39.172-146.445-144.918-146.445-77.354 0-118.413 48.965-118.413 132.249 0 80.05 41.059 123.265 114.909 123.265 59.479 0 87.96-27.941 87.96-27.941z" />
    </svg>
  )

  const scrobbles = data?.scrobbles
  return (
    <StatCard
      icon={icon}
      iconColor="bg-red-500"
      name="Last.fm scrobbles"
      stat={scrobbles}
    />
  )
}
