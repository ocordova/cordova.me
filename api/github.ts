import { VercelRequest, VercelResponse } from '@vercel/node'
import fetch from 'cross-fetch'

const request = async (_req: VercelRequest, res: VercelResponse) => {
  const response = await fetch(
    `https://api.github.com/users/ocordova/repos?per_page=100`
  )

  const repositories = await response.json()
  const mine = repositories.filter((repo) => !repo.fork)
  const stars = mine.reduce((acc, repository) => {
    return acc + repository['stargazers_count']
  }, 0)

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=129600'
  )

  return res.status(200).json({
    stars
  })
}

export default request
