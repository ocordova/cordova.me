import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Layout } from '../../components/Layout'

const BlogPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
  const embeddedImagesLocal = data.mdx.frontmatter.embeddedImagesLocal
  return (
    <Layout>
      <article className="w-full max-w-none">
        <h1 className="font-extrabold leading-tight text-4xl text-gray-900 mb-4">
          {data.mdx.frontmatter.title}
        </h1>
        <time className="text-gray-500 text-sm">
          Posted on {data.mdx.frontmatter.date}
        </time>
        <div className="prose max-w-none mt-4">
          <GatsbyImage
            className="object-cover w-full h-80 rounded-md"
            image={image}
            alt={data.mdx.frontmatter.hero_image_alt}
          />
          <MDXProvider>
            <MDXRenderer className="mt-4" localImages={embeddedImagesLocal}>
              {data.mdx.body}
            </MDXRenderer>
          </MDXProvider>
        </div>
      </article>
    </Layout>

  )
}

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
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
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
      body
    }
  }
`

export default BlogPost