import React, { useEffect, useState } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

const HeaderMain = styled.header`
  background-color: #eb219b65 !important;
  transition: background-color 0.3s ease;
  .navbar-end [aria-current]:not([aria-current="false"]) {
    background-color: #de148e;
  }
  &.amir {
    background-color: #eb219b !important;
  }
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
  let listener = null;

  const [openMenu, setOpenMenu] = useState(false);
  const [scrollState, setScrollState] = useState("top");

  useEffect(() => {
    listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= window.innerHeight - 100) {
        if (scrollState !== "amir") {
          setScrollState("amir");
        }
      } else {
        if (scrollState !== "top") {
          setScrollState("top");
        }
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [scrollState]);

  return (
    <HeaderMain className={`navbar is-info is-fixed-top ${scrollState}`}>
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          {data.site.siteMetadata.title}
        </Link>
        <span
          className="navbar-burger burger"
          onClick={() => setOpenMenu(!openMenu)}
          aria-hidden="true"
        >
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <nav
        className={`navbar-menu ${openMenu ? "is-active" : ""}`}
        aria-label="menu"
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
