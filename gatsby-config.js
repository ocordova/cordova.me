module.exports = {
    siteMetadata: {
        siteUrl: `https://www.ocordova.me`,
        title: `Óscar Córdova`,
    },
    plugins: [
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `blog`,
                path: `${__dirname}/blog`,
            }
        },
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                defaults: {
                    quality: 70,
                    formats: ['auto', 'webp', 'avif'],
                    placeholder: 'blurred',
                },
            },
        },
        `gatsby-plugin-mdx`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-react-helmet`,
    ],
};