import React from "react"
import JSONData from "../data/cv-fr-julie-dubois.json";
import { Link, graphql, useStaticQuery } from "gatsby";

const Footer  = () => {
  const data = useStaticQuery(
    graphql`
      query {
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
    `
  );
  return(
  <footer class="footer">
    <div className="container">
      <div class="columns">
        <div className="column">
        <Link to="/">
          {data.site.siteMetadata.title}
        </Link>
        </div>
        <div className="column has-text-right">
        {JSONData.basics.profiles.map((data, index) => {
            return (
                <a href={data.url} key={index}>
                  {data.network}
                </a>
            )
          })}
        </div>
      </div>
      {/* privacy site name download cv */}
      </div>
  </footer>
  );
}

export default Footer
