import * as React from "react"
import { graphql } from "gatsby"
import { Box, useColorModeValue, Text } from "@chakra-ui/react"
import { GatsbyImage } from "gatsby-plugin-image"
import Link from "../link"
import formatPrice from "../../utils/formatPrice"

const ProductCard = ({ product, featured }) => {
  const {
    title,
    priceRangeV2,
    slug,
    images: [firstImage],
  } = product

  const bg = useColorModeValue(`cardBg`, `dark.cardBg`)
  const linkHoverColor = useColorModeValue(
    `cardLinkHover`,
    `dark.cardLinkHover`
  )

  const price = formatPrice(
    priceRangeV2.minVariantPrice.currencyCode,
    priceRangeV2.minVariantPrice.amount
  )

  return (
    <Link
      to={slug}
      aria-label={`View ${title} product page`}
      _hover={{ textDecoration: "none", h2: { color: linkHoverColor } }}
      _focus={{
        boxShadow: "none",
        "[data-name='product-image-box']": { boxShadow: "outline" },
        h2: { color: linkHoverColor },
      }}
    >
      <Box
        bg={bg}
        data-name="product-image-box"
        display="grid"
        placeItems="center"
        mb={4}
      >
        {firstImage && (
          <GatsbyImage
            alt=""
            image={firstImage.localFile.childImageSharp.gatsbyImageData}
          />
        )}
      </Box>
      <Box textAlign="center">
        <Text
          as="h2"
          fontSize={featured ? "md" : "4xl"}
          color={`secondary`}
          transition="color 0.25s ease-in-out"
        >
          {title}
        </Text>
        <Text color="primary">{price}</Text>
      </Box>
    </Link>
  )
}

export default ProductCard

export const query = graphql`
  fragment ProductCard on ShopifyProduct {
    title
    slug: gatsbyPath(
      filePath: "/products/{ShopifyProduct.productType}/{ShopifyProduct.handle}"
    )
    images {
      localFile {
        childImageSharp {
          gatsbyImageData(
            aspectRatio: 1
            layout: CONSTRAINED
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            quality: 90
            width: 640
          )
        }
      }
    }
    priceRangeV2 {
      minVariantPrice {
        amount
        currencyCode
      }
    }
  }
`
