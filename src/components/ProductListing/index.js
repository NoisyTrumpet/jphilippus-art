import * as React from "react"
import { Grid, Heading, useColorModeValue, Container } from "@chakra-ui/react"
import ProductCard from "../ProductCard/index"
import Link from "../link"

const ProductListing = ({ products, featured }) => {
  const themeBlue = useColorModeValue(`primary`, `gray.300`)
  return (
    <>
      {featured && (
        <Container
          position="relative"
          width="100%"
          maxWidth="100%"
          marginTop={20}
        >
          <Heading
            as="h2"
            fontSize="3xl"
            textAlign="center"
            fontWeight="extrabold"
            letterSpacing="tight"
            color={themeBlue}
            textTransform="uppercase"
          >
            Shop
          </Heading>
          <Link
            to="/products"
            marginRight={10}
            position="absolute"
            right="0"
            top="25%"
            textTransform="uppercase"
            color={themeBlue}
          >
            {`view all >`}
          </Link>
        </Container>
      )}

      <Grid
        templateColumns={[
          "1fr",
          "repeat(2, 1fr)",
          null,
          featured ? "repeat(5, 1fr)" : "repeat(3, 1fr)",
        ]}
        columnGap={6}
        rowGap={[12, 16, 20]}
      >
        {products.nodes.map(p => (
          <ProductCard product={p} key={p.slug} />
        ))}
      </Grid>
    </>
  )
}

export default ProductListing
