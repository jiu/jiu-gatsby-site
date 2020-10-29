/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-react-helmet",
    `gatsby-transformer-json`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/assets`,
      },
    },
  ],
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
      },
    ],
  },
};
