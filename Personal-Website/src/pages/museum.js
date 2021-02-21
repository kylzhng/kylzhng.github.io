import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Museum = () => (
  <Layout>
    <SEO title="Contact Page" />
    <h1>Museum Pricer </h1>
    <p>This android app displays 4 museums in the main screen. These options include: The Museum of Modern Art, The Metropolitan Museum of Art, The American Museum of Natural History, and The Solomon R. Guggenheim Museum. The user can choose one of these museums and it takes them to a second screen where the user can input a number of tickets for the specific ticket types (5 maximum per type). The estimated price including NY tax is calculated and displayed for the user. The user is also able to go to the museum's official website page by tapping on the museum's picture.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Museum
