import React, { useState } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

const HeaderMain = styled.header`
  background-color: #eb219b45 !important;
`;

const Header = () => {
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

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <HeaderMain className="navbar is-info is-fixed-top">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          {data.site.siteMetadata.title}
        </Link>
        <span
          className="navbar-burger burger"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <nav
        className={`navbar-menu ${openMenu ? "is-active" : ""}`}
        aria-label="menu"
        aria-expanded={openMenu}
        id="navMenu"
      >
        <div className="navbar-end">
          {data.site.siteMetadata.menuLinks.map((link, index) => (
            <Link key={index} className="navbar-item" to={link.link}>
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </HeaderMain>
  );
};

export default Header;
