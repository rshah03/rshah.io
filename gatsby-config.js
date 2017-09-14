module.exports = {
  pathPrefix: `/Ronak.io`,
  siteMetadata: {
    title: `Ronak Shah`,
    description: 'A personal website by Ronak Shah'
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
