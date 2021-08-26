import * as React from "react"
import { graphql } from "gatsby"
import { Box, useColorModeValue, Text } from "@chakra-ui/react"
import { GatsbyImage } from "gatsby-plugin-image"
import Link from "../link"
import formatPrice from "../../utils/formatPrice"
import { StoreContext } from "../../context/storeContext"

const ProductCard = ({ product, featured }) => {
  const {
    title,
    priceRangeV2,
    slug,
    images: [firstImage],
    productType,
    variants: [initialVariant],
    tags,
  } = product

  const { client } = React.useContext(StoreContext)

  const isZoom = title.includes("Zoom")

  const [variant, setVariant] = React.useState({ ...initialVariant }) // eslint-disable-line

  const bg = useColorModeValue(`cardBg`, `dark.cardBg`)

  const productVariant =
    client.product.helpers.variantForOptions(product, variant) || variant

  const [available, setAvailable] = React.useState(
    productVariant.availableForSale
  )

  const checkAvailablity = React.useCallback(
    productId => {
      client.product.fetch(productId).then(fetchedProduct => {
        const result = fetchedProduct.variants.filter(
          variant => variant.id === productVariant.storefrontId
        )

        if (result.length > 0) {
          setAvailable(result[0].available)
        }
      })
    },
    [productVariant.storefrontId, client.product]
  )

  React.useEffect(() => {
    checkAvailablity(product.storefrontId)
  }, [productVariant.storefrontId, checkAvailablity, product.storefrontId])

  const price = formatPrice(
    priceRangeV2.minVariantPrice.currencyCode,
    priceRangeV2.minVariantPrice.amount
  )

  if (productType === "Class" || "Event") {
    return (
      <a href={slug} aria-label={`View ${title} product page`}>
        <Box
          bg={bg}
          data-name="product-image-box"
          display="grid"
          placeItems="center"
          mb={2}
        >
          {firstImage && (
            <GatsbyImage
              alt=""
              image={firstImage.localFile.childImageSharp.gatsbyImageData}
            />
          )}
        </Box>
        <Box textAlign="center" mb={4}>
          {tags.length > 0 && (
            <Box d="flex" justifyContent="center" mb="2">
              {tags.map(tag => (
                <Box bg="primary" borderRadius="10" px={2} mx={2} pt={1} key={tag}>
                  <Text
                    color="white"
                    fontWeight="bold"
                    lineHeight="4"
                    fontSize={["xs", "sm"]}
                  >
                    {tag}
                  </Text>
                </Box>
              ))}
            </Box>
          )}
          <Text
            className="product-name"
            as="h2"
            fontSize={featured ? "md" : "4xl"}
            color={`secondary`}
            _hover={{ color: `#C09559` }}
            transition="color 0.25s ease-in-out"
          >
            {title}
          </Text>
          {!isZoom && <Text color="primary">{available ? price : ""}</Text>}
        </Box>
      </a>
    )
  }

  return (
    <Link
      to={slug}
      aria-label={`View ${title} product page`}
      _hover={{ textDecoration: "none", h2: { color: `#C09559` } }}
      _focus={{
        boxShadow: "none",
        "[data-name='product-image-box']": { boxShadow: "outline" },
        h2: { color: `#C09559` },
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
        {!isZoom && <Text color="primary">{available ? price : ""}</Text>}
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
    productType
    id
    storefrontId
    images {
      localFile {
        childImageSharp {
          gatsbyImageData(
            aspectRatio: 1
            layout: CONSTRAINED
            placeholder: BLURRED
            formats: [WEBP, PNG]
            quality: 60
            width: 640
          )
        }
      }
    }
    tags
    variants {
      availableForSale
      storefrontId
      title
      id
      legacyResourceId
      price
      selectedOptions {
        name
        value
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
