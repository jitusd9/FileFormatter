module.exports = {
  siteMetadata: {
    title: `FileFormatter`,
  },
  plugins: [
    {
      resolve :  `gatsby-source-filesystem`,
      options : {
        name : `src`,
        path : `${__dirname}/`
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}