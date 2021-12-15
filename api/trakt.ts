import { VercelRequest, VercelResponse } from '@vercel/node'
import fetch from 'cross-fetch'

const request = async (_req: VercelRequest, res: VercelResponse) => {
  const key = process.env.TRAKT_TV_CLIENT_ID
  const response = await fetch(`https://api.trakt.tv/users/sean/stats`, {
    headers: {
      'trakt-api-version': '2',
      'trakt-api-key': key
    }
  })

  const { movies, shows } = await response.json()

  const watchedMovies = Number(movies.watched)
  const watchedShows = Number(shows.watched)

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=129600'
  )

  return res.status(200).json({
    watchedMovies,
    watchedShows
  })
}

export default request
