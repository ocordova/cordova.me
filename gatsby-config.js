module.exports = {
  siteMetadata: {
    siteUrl: `https://www.ocordova.me`,
    title: `Óscar Córdova`,
    author: {
      name: `Óscar Córdova`,
      summary: `Full Stack Engineer based in Mexico City`
    },
    description: `Full Stack Engineer based in Mexico City`,
    social: {
      twitter: `ocordova`
    }
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog`
      }
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 90,
          formats: ['auto', 'webp', 'avif'],
          placeholder: 'blurred',
          breakpoints: [750, 1080, 1366, 1920]
        }
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
              {
                site {
                  siteMetadata {
                    title
                    description
                    siteUrl
                    site_url: siteUrl
                  }
                }
              }
            `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.nodes.map((node) => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + '/blog/' + node.slug,
                  guid: site.siteMetadata.siteUrl + '/blog/' + node.slug,
                  custom_elements: [{ 'content:encoded': node.html }]
                })
              })
            },
            query: `
                    {
                      allMdx(
                        sort: { order: DESC, fields: [frontmatter___date] },
                      ) {
                        nodes {
                          excerpt
                          body
                          slug
                          frontmatter {
                            title
                            date
                          }
                        }
                      }
                    }
                `,
            title: "Óscar Córdova's RSS Feed",
            output: '/feed.xml',
            match: '^/blog/'
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Óscar Córdova`,
        short_name: `Ós`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/favicon.png`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-16434715-1'
      }
    },
    `gatsby-plugin-mdx`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`
  ]
}
