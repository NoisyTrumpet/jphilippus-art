import * as React from "react"
import {
  Container,
  VisuallyHidden,
  Flex,
  Center,
  useColorModeValue,
} from "@chakra-ui/react"
import { graphql } from "gatsby"
import Layout from "../../../components/Layout/Layout"
import ProductListing from "../../../components/ProductListing/index"
import SEO from "../../../components/SEO"
import AltHero from "../../../components/AltHero"
import LinkGrid from "../../../components/LinkGrid/index"

const ProductTypeIndex = ({
  data: { products },
  pageContext: { productType },
}) => {
  const heroTitle = () => {
    if (productType === "Art") {
      return `Art`
    }
    if (productType === "Class") {
      return `Classes`
    }
    if (productType === "Jewelry") {
      return `Jewelry`
    }
    return productType
  }

  const heroSubCaption = () => {
    if (productType === "Art") {
      return `Lorem Ipsum`
    }
    if (productType === "Class") {
      return `Book a class with one of our fabulous instructors.`
    }
    if (productType === "Jewelry") {
      return `We sell Julie Vos Jewelry.`
    }
  }

  const heroBody = () => {
    if (productType === "Art") {
      return `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in`
    }
    if (productType === "Class") {
      return `Glass Art, Acrylic Pour and Resin Art studio for Individuals or groups/parties and Team Building. To schedule a class scroll down. `
    }
    if (productType === "Jewelry") {
      return `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `
    }
  }

  const secondary = useColorModeValue(`secondary`, `secondary`)

  return (
    <Layout>
      <SEO title={`Category: ${productType}`} />
      <VisuallyHidden as="h1">{productType}</VisuallyHidden>
      <AltHero
        title={heroTitle()}
        productType={productType}
        subcaption={heroSubCaption()}
        body={heroBody()}
        ctaTitle={productType === "Class" && `Group Classes`}
        ctaSubCaption={
          productType === "Class" &&
          `We now have new rates starting at $35 per person for glass art for parties with 15 or more people.`
        }
        ctaText={productType === "Class" && `Book a Group Class`}
        ctaLink={
          productType === "Class" &&
          `https://j-philippus-art-studio.myshopify.com/pages/calendar`
        }
      />
      <Container>
        <Center m="10">
          <Flex
            borderBottomStyle="solid"
            borderBottomWidth="3px"
            borderColor={secondary}
            paddingBottom={4}
          >
            <LinkGrid />
          </Flex>
        </Center>
        <ProductListing products={products} />
      </Container>
    </Layout>
  )
}

export default ProductTypeIndex

export const query = graphql`
  query($productType: String!) {
    products: allShopifyProduct(
      filter: { productType: { eq: $productType } }
      sort: { fields: [publishedAt], order: ASC }
    ) {
      nodes {
        ...ProductCard
      }
    }
  }
`
