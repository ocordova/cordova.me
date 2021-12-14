import { VercelRequest, VercelResponse } from '@vercel/node'
import fetch from 'cross-fetch'

const request = async (_req: VercelRequest, res: VercelResponse) => {
  const response = await fetch(
    `https://api.stackexchange.com/2.3/users/3075569?order=desc&sort=reputation&site=stackoverflow`
  )

  const users = await response.json()
  const me = users.items[0]

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=129600'
  )

  return res.status(200).json({
    reputation: me.reputation
  })
}

export default request
