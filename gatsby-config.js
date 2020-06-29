/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: ["gatsby-plugin-sass","gatsby-plugin-react-helmet",`gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  }],
  siteMetadata: {
    title: "i am jiu",
    menuLinks: [
      {
        name: "Accueil",
        link: "/",
      },
      {
        name: "Expérience",
        link: "/experience",
      },
      {
        name: "Compétences",
        link: "/competences",
      },
      {
        name: "contact",
        link: "/contact",
      }
      // ,
      // {
      //   name: "resume",
      //   link: "/resume",
      // }
    ],
  },
}
