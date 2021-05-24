import { Container } from "@chakra-ui/layout"
import React from "react"
import Layout from "../components/Layout/Layout"
import Seo from "../components/SEO"

const CartPage = () => {
  return (
    <Layout>
      <Seo tilte="Cart" />
      <Container>Hello</Container>
    </Layout>
  )
}

export default CartPage
