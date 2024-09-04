/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Ted's Resume`,
    description: `Personal resume website`,
    author: `Ted Middleton`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
      `gatsby-plugin-postcss`,
      `gatsby-transformer-json`,
      {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `data`,
            path: `${__dirname}/src/data`,
          },
      },
  ],
}
