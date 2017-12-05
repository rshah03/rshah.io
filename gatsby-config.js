module.exports = {
  pathPrefix: `/Rshah.io`,
  siteMetadata: {
    title: `Ronak Shah`,
    description: 'Portfolio and Blog'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
        
      }

    },
    'gatsby-transformer-remark'
    
  ],
}
