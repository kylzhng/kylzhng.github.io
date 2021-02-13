import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact Page" />
    <h1>Hi </h1>
    <p>Welcome </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Contact
