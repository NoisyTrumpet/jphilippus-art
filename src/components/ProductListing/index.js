import * as React from "react"
import {
  Grid,
  Heading,
  useColorModeValue,
  Container,
  Text,
} from "@chakra-ui/react"
import ProductCard from "../ProductCard/index"
import Link from "../link"
import { ExternalLinkIcon } from "@chakra-ui/icons"

const ProductListing = ({ products, featured, isEvents }) => {
  const themeBlue = useColorModeValue(`primary`, `gray.300`)
  const firstProduct = products.nodes[0] //eslint-disable-line
  const pastEvents = products.nodes

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
            fontSize="2xl"
            textAlign="center"
            fontWeight={500}
            color={themeBlue}
            textTransform="uppercase"
          >
            Featured
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
      {isEvents ? (
        <>
          {/* <ProductCard
            product={firstProduct}
            key={firstProduct.slug}
            featured
          /> */}
          <Text color="primary" fontSize="3xl">
            Check back soon for upcoming events!
          </Text>
          <Text color="primary" fontSize="3xl">
            Past Events:
          </Text>
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
            {pastEvents.map(p => (
              <ProductCard product={p} key={p.slug} featured />
            ))}
          </Grid>
        </>
      ) : (
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
          {products.nodes.map(p => (
            <ProductCard product={p} key={p.slug} featured />
          ))}
        </Grid>
      )}
    </>
  )
}

export default ProductListing
