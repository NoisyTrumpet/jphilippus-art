import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./header.scss"

const Header = ({ siteTitle }) => (
  <header className="header">
    <section className="logo-wrapper">
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <StaticImage
          src="../../images/logo.png"
          width={150}
          quality={95}
          formats={["WEBP"]}
          alt={siteTitle}
        />
      </Link>
    </section>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
