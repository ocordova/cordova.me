import { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby'
import fetch from 'cross-fetch'

export default async function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
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
