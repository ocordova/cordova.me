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
  console.log(post)
  const image = getImage(post.frontmatter.hero_image)
  const embeddedImagesLocal = post.frontmatter.embeddedImagesLocal
  return (
    <Layout>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />
      <article className="w-full max-w-none">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-3">
          {post.frontmatter.title}
        </h1>
        <time className="text-gray-500 text-sm">
          Posted on {post.frontmatter.date}
        </time>
        <div className="mt-8">
          <GatsbyImage
            className="object-cover w-full h-80 rounded-lg"
            image={image}
            alt={post.frontmatter.hero_image_alt}
          />
          <div className="prose max-w-none mt-8">
            <MDXProvider components={components}>
              <MDXRenderer className="mt-4" localImages={embeddedImagesLocal}>
                {post.body}
              </MDXRenderer>
            </MDXProvider>
          </div>
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
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
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
