import { VercelRequest, VercelResponse } from '@vercel/node'
import fetch from 'cross-fetch'

const request = async (_req: VercelRequest, res: VercelResponse) => {
  const key = process.env.LAST_FM_API_KEY
  const response = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=ocordova&api_key=${key}&format=json`
  )

  const { user } = await response.json()

  const scrobbles = Number(user.playcount)

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=129600'
  )

  return res.status(200).json({
    scrobbles
  })
}

export default request
