import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const ListLink = props => (
  <li style={{display: 'inline-block', marginRight: '1rem'}}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `red`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ marginBottom: '1rem' }}>
        <ul style={{listStyle: 'none', float: 'right', marginBottom: '60px'}}>
          <ListLink to="/">
            <p style={{
              color: `white`,
              textDecoration: `underline`,
              textDecorationThickness: 4,
              float: 'right',
              fontSize: 16,
            }}>
              Home
            </p>
          </ListLink>
      
        </ul>
        
        
      </h1>
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
