import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { ImInstagram, ImDribbble, ImLinkedin, ImGithub } from "react-icons/im";

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
  const NetworkIconComp = {
    Linkedin: ImLinkedin,
    Instagram: ImInstagram,
    Github: ImGithub,
    Dribbble: ImDribbble,
  };
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
                const NetworkIcon = NetworkIconComp[data.network];
                return (
                  <li key={index}>
                    <a href={data.url} title={data.network}>
                      <NetworkIcon />
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
