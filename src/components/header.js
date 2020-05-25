import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
const Header = ({ siteTitle, menuLinks }) => (
  <header class="navbar">
    <div class="navbar-brand">
      <Link to="/" className="navbar-item">
        {siteTitle}
      </Link>
      <span class="navbar-burger burger" data-target="navbarMenuHeroC">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </div>
    <div id="navbarMenuHeroC" class="navbar-menu">
      <div class="navbar-end">
        {menuLinks.map(link => (
          <Link className="navbar-item" to={link.link}>
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
