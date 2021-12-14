import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../../components/Layout'
import { SnippetCard } from '../../components/SnippetCard'
import { Seo } from '../../components/Seo'

const SnippetPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Snippets" />
      <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900">
        Snippets
      </h1>
      <div className="prose max-w-none mt-8">
        <p>Code snippets that I've created or collected over time.</p>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 items-stretch">
        {data.allMdx.nodes.map((node) => (
          <SnippetCard snippet={node} key={node.id} />
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { regex: "/(snippets)/" } }
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          description
          type
        }
        id
        slug
      }
    }
  }
`

export default SnippetPage
