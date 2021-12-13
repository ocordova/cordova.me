import * as React from 'react'
import { graphql, Link } from 'gatsby'

import { Layout } from '../components/Layout'
import { BlogCard } from '../components/BlogCard'
import { Seo } from '../components/Seo'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Full Stack Engineer" />
      <div>
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900">
          Óscar Córdova
        </h1>
        <p className="text-gray-600 mt-2">
          Full Stack Engineer based in Mexico City
        </p>
        <div className="flex items-center justify-between space-x-4 mt-10">
          <h2 className="text-xl font-bold text-gray-900">Latest blog posts</h2>
          <Link
            to={'/blog'}
            className="whitespace-nowrap text-base font-semibold text-colorized hover:text-gray-900"
          >
            View all<span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
          {data.allMdx.nodes.map((node) => (
            <BlogCard post={node} key={node.id} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { regex: "/(blog)/" } }
      limit: 2
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          description
          hero_image_alt
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
        slug
      }
    }
  }
`

export default IndexPage
