/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: ["gatsby-plugin-sass","gatsby-plugin-react-helmet"],
  siteMetadata: {
    title: "i am jiu",
    menuLinks: [
      {
        name: "home",
        link: "/",
      },
      {
        name: "resume",
        link: "/resume",
      },
      {
        name: "skills",
        link: "/skills",
      },
      {
        name: "contact",
        link: "/contact",
      }
    ],
  },
}
