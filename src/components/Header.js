import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

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

  return (
    <header className="navbar is-info">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          {data.site.siteMetadata.title}
        </Link>
        <span className="navbar-burger burger" data-target="navbarMenuHeroC">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <nav className="navbar-menu">
        <div className="navbar-end">
          {data.site.siteMetadata.menuLinks.map((link, index) => (
            <Link key={index} className="navbar-item" to={link.link}>
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
