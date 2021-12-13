import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Layout } from '../../components/Layout'
import { CodeBlock } from '../../components/CodeBlock'
import { Seo } from '../../components/Seo'

const components = {
  pre: (props) => <div {...props}></div>,
  code: CodeBlock
}

const BlogPost = ({ data }) => {
  const post = data.mdx
  const embeddedImagesLocal = post.frontmatter.embeddedImagesLocal
  console.log(post.frontmatter.source)
  const SourceMarkup = ({ href }) => (
    <div className="text-sm text-colorized hover:text-gray-900 font-semibold">
      <a href={href} target="_blank" rel="noopener noreferrer">
        Source
      </a>
    </div>
  )

  return (
    <Layout>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />
      <article className="w-full">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-3">
          {post.frontmatter.title}
        </h1>
        <div className="flex space-x-4">
          <time className="text-gray-500 text-sm">
            Posted on {post.frontmatter.date}
          </time>
          {post.frontmatter.source && (
            <SourceMarkup href={post.frontmatter.source} />
          )}
        </div>
        <div className="prose mt-8">
          <MDXProvider components={components}>
            <MDXRenderer className="mt-4" localImages={embeddedImagesLocal}>
              {post.body}
            </MDXRenderer>
          </MDXProvider>
        </div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        description
        date(formatString: "MMMM DD, YYYY")
        source
        embeddedImagesLocal {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`

export default BlogPost
