/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({ path: ".env" });
module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-react-helmet",
    `gatsby-transformer-json`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/src/assets/svg`, // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },
  ],
  siteMetadata: {
    title: "i am jiu",
    apiURL: process.env.C_API_URL,
    menuLinks: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Experiences",
        link: "/experiences",
      },
      {
        name: "Skills",
        link: "/skills",
      },
      {
        name: "Contact",
        link: "/contact",
      },
    ],
  },
};
