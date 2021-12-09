import React from 'react'
import { Link, graphql } from 'gatsby'
import { Layout } from '../../components/Layout'
import { BlogCard } from '../../components/BlogCard'

const BlogPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900">
        Blog
      </h1>
      <div className="prose max-w-none mt-8">
        <p>You can follow this blog posts via RSS.</p>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
        {data.allMdx.nodes.map((node) => (
          <BlogCard post={node} key={node.id} />
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
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

export default BlogPage
