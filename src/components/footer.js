import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import styled from "styled-components";
import SocialIcons from "./SocialIcons";

const FooterContainer = styled.footer`
  margin-top: auto;
  bottom: 0;
  padding: 1.5rem;
  position: relative a {
    color: grey;
  }
  .siteTitle {
    font-weight: bold;
  }
`;

const Footer = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return (
    <FooterContainer className="footer">
      <div className="container">
        <div className="columns is-mobile">
          <div className="column is-half">
            <Link to="/" className="siteTitle">
              {data.site.siteMetadata.title}
            </Link>
          </div>
          <div className="column is-half has-text-right">
            <SocialIcons />
          </div>
        </div>
        {/* privacy site name download cv */}
      </div>
    </FooterContainer>
  );
};

export default Footer;
