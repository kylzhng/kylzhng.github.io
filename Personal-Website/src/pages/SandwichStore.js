import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Sandwich Store" />
    <h1>Sandwich Store</h1>
    <p>Similar to the interface that a cashier faces on their ipad, this app allows the user to checkout an order of customizable sandwiches. After adding these orders to the cart, a "show order summary" button can be clicked to open another window that shows the entire order. On this window, each sandwich is listed in the order that it was added. At the bottom, the total price is calculated and displayed. The user has the option to substract a specific line on the order summary and delete it. The user also has the option to duplicate a specific order line. The program also allows the user to import/export orders from/to a file from the computer. </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
