import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Layout } from '../../components/Layout'

const BlogPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
  const embeddedImagesLocal = data.mdx.frontmatter.embeddedImagesLocal
  return (
    <Layout>
      <article className="w-full max-w-none">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-3">
          {data.mdx.frontmatter.title}
        </h1>
        <time className="text-gray-500 text-sm">
          Posted on {data.mdx.frontmatter.date}
        </time>
        <div className="mt-8">
          <GatsbyImage
            className="object-cover w-full h-80 rounded-lg"
            image={image}
            alt={data.mdx.frontmatter.hero_image_alt}
          />
          <div className="prose max-w-none mt-8">
            <MDXProvider>
              <MDXRenderer className="mt-4" localImages={embeddedImagesLocal}>
                {data.mdx.body}
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
