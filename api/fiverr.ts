import { VercelRequest, VercelResponse } from '@vercel/node'
import fetch from 'cross-fetch'

const request = async (_req: VercelRequest, res: VercelResponse) => {
  const response = await fetch(`https://fiverr-api.vercel.app/oscordova`)

  const { user } = await response.json()
  const rating = user.rating

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=129600'
  )

  return res.status(200).json({
    rating
  })
}

export default request
