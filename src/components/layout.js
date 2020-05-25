import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import "../pages/styles.scss"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" },
          ]}
        ></Helmet>
          <Header
            menuLinks={data.site.siteMetadata.menuLinks}
            siteTitle={data.site.siteMetadata.title}
          />
        {children}
        <Footer></Footer>
      </React.Fragment>
    )}
  />
)

export default Layout
