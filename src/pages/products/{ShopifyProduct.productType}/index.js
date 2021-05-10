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
    if (productType === "Art Kit") {
      return `Art Kits`
    }
    return productType
  }

  const heroSubCaption = () => {
    if (productType === "Art") {
      return `SPRUCE UP YOUR SPACE`
    }
    if (productType === "Class") {
      return `CREATE YOUR MASTERPIECE`
    }
    if (productType === "Jewelry") {
      return `We sell Julie Vos Jewelry.`
    }
    if (productType === "Art Kit") {
      return `CREATE YOUR MASTERPIECE IN YOUR OWN HOME`
    }
  }

  const heroBody = () => {
    if (productType === "Art") {
      return `Browse our diverse selection of original art created by artist Jeanne Philippus for your home or office.  Commissioned art also available upon request.`
    }
    if (productType === "Class") {
      return `You don’t need to be an artist to create your own beautiful piece of art. Book a class with one of our fabulous instructors. The studio specializes in contemporary art using acrylic pours, resin and glass. Beautiful 1500 Square Foot Facility Including:`
    }
    if (productType === "Jewelry") {
      return `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `
    }
    if (productType === "Art Kit") {
      return `Our at-home art kits are a fun, easy way to take your creativity into the comfort of your own home. Choose between our resin covered charcuterie board kits, acrylic pour kits, glass art kits, oyster shell DIY kits, or resin coaster kits. `
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
          `We also offer private group classes for events such as parties and team building activities. Special rates starting at $35 per person for glass art for parties with 15 or more people. Click here to book your private party.`
        }
        ctaText={productType === "Class" && `Book a Group Class`}
        ctaLink={
          productType === "Class" &&
          `https://j-philippus-art-studio.myshopify.com/pages/calendar`
        }
      />
      <Container>
        <Center my="10" mx="0">
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
