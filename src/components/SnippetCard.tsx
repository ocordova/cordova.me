import React from 'react'
import { Link } from 'gatsby'

const GitIcon = () => (
  <div
    className="bg-yellow-200 text-yellow-700 rounded-full inline-flex p-3 ring-4 ring-white"
    aria-hidden="true"
  >
    <svg
      className="h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <title>Git Pull Request</title>
      <circle
        cx="128"
        cy="416"
        r="48"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
      />
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
        d="M128 144v224M288 160l-64-64 64-64"
      />
      <circle
        cx="128"
        cy="96"
        r="48"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
      />
      <circle
        cx="384"
        cy="416"
        r="48"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
      />
      <path
        d="M240 96h84a60 60 0 0160 60v212"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
      />
    </svg>
  </div>
)

const icons = {
  git: <GitIcon />
}

export const SnippetCard = ({ snippet }, ...more) => {
  return (
    <Link to={`/snippets/${snippet.slug}`}>
      <div
        className="w-full bg-white border border-gray-200 rounded-lg flex items-center justify-between p-6 space-x-6 hover:shadow-md"
        {...more}
      >
        <div className="flex-1 truncate">
          <div className="flex items-center space-x-3">
            <h3 className="text-gray-900 text-sm font-medium truncate">
              {snippet.frontmatter.title}
            </h3>
          </div>
          <p className="mt-1 text-gray-500 text-sm truncate">
            {snippet.frontmatter.description}
          </p>
        </div>
        {icons[`${snippet.frontmatter.type}`]}
      </div>
    </Link>
  )
}
