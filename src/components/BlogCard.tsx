import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

export const BlogCard = ({ post }, ...more) => {
  const image = getImage(post.frontmatter.hero_image)
  return (
    <Link to={`/blog/${post.slug}`}>
      <div
        className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden"
        {...more}
      >
        <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-48">
          <GatsbyImage
            className="w-full h-full object-center object-cover sm:w-full sm:h-full"
            image={image}
            alt={post.frontmatter.hero_image_alt}
          />
        </div>
        <div className="flex-1 p-4 space-y-2 flex flex-col">
          <h3 className="text-sm font-medium text-gray-900">
            <span aria-hidden="true" className="absolute inset-0" />
            {post.frontmatter.title}
          </h3>
          <p className="text-sm text-gray-500">
            {post.frontmatter.description}
          </p>
        </div>
      </div>
    </Link>
  )
}
