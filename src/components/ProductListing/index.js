import * as React from "react"
import { Grid, Heading, useColorModeValue, Container } from "@chakra-ui/react"
import ProductCard from "../ProductCard/index"
import Link from "../link"
import { ExternalLinkIcon } from "@chakra-ui/icons"

const ProductListing = ({ products, featured }) => {
  const themeBlue = useColorModeValue(`primary`, `gray.300`)
  return (
    <>
      {featured && (
        <Container
          position="relative"
          width="100%"
          maxWidth="100%"
          marginBottom={8}
        >
          <Heading
            as="h2"
            fontSize="3xl"
            textAlign="center"
            fontWeight={500}
            color={themeBlue}
            textTransform="uppercase"
          >
            Featured Classes
          </Heading>
          <Link
            to="/products"
            position="absolute"
            right="0"
            top="25%"
            textTransform="uppercase"
            color={themeBlue}
            display={`flex`}
            fontSize={`small`}
          >
            {`view all`} <ExternalLinkIcon marginLeft={2} />
          </Link>
        </Container>
      )}

      <Grid
        templateColumns={[
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          null,
          featured ? "repeat(5, 1fr)" : "repeat(3, 1fr)",
        ]}
        columnGap={featured ? 2 : 6}
        rowGap={[12, 16, 20]}
      >
        {products.nodes.map(
          p =>
            p.title.includes("Private") !== true && (
              <ProductCard product={p} key={p.slug} featured />
            )
        )}
      </Grid>
    </>
  )
}

export default ProductListing
