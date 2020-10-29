import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

const Footer = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        dataJson {
          basics {
            profiles {
              network
              url
              icon
            }
          }
        }
      }
    `
  );
  return (
    <footer className="footer">
      <div className="container">
        <div className="columns">
          <div className="column is-half">
            <Link to="/">{data.site.siteMetadata.title}</Link>
          </div>
          <div className="column is-half has-text-right">
            <ul>
              {data.dataJson.basics.profiles.map((data, index) => {
                return (
                  <li key={index}>
                    <a href={data.url} >
                      {data.network}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* privacy site name download cv */}
      </div>
    </footer>
  );
};

export default Footer;
