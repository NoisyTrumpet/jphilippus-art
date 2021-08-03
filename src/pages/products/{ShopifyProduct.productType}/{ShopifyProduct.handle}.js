import * as React from "react"
import { graphql } from "gatsby"
import Link from "../../../components/link"
import {
  Container,
  Grid,
  Heading,
  // Text,
  Box,
  Stack,
  useColorModeValue,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
  Flex,
} from "@chakra-ui/react"
import isEqual from "lodash.isequal"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../../../components/Layout/Layout"
import { StoreContext } from "../../../context/storeContext"
import AddToCart from "../../../components/AddToCart/index"
import formatPrice from "../../../utils/formatPrice"
import ProductListing from "../../../components/ProductListing/index"
import Seo from "../../../components/SEO.js"
import loadable from "@loadable/component"

const SesamiButton = loadable(() => import("../../../components/SesamiButton"))

const Product = ({ data: { product, suggestions } }) => {
  const {
    options,
    variants,
    variants: [initialVariant],
    priceRangeV2,
    title,
    description,
    descriptionHtml,
    images,
    images: [firstImage],
    productType,
    handle,
  } = product

  const { client } = React.useContext(StoreContext)

  const [variant, setVariant] = React.useState({ ...initialVariant })
  const [quantity, setQuantity] = React.useState(1)

  const productVariant =
    client.product.helpers.variantForOptions(product, variant) || variant

  const [available, setAvailable] = React.useState(
    productVariant.availableForSale
  )

  const isEvent = productType === "Event"

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

  // Date & Time Change

  const handleOptionChange = (index, event) => {
    const value = event.target.value

    if (value === "") {
      return
    }

    const currentOptions = [...variant.selectedOptions]

    currentOptions[index] = {
      ...currentOptions[index],
      value,
    }

    const selectedVariant = variants.find(variant => {
      return isEqual(currentOptions, variant.selectedOptions)
    })

    setVariant({ ...selectedVariant })
  }

  React.useEffect(() => {
    checkAvailablity(product.storefrontId)
  }, [productVariant.storefrontId, checkAvailablity, product.storefrontId])

  const price = formatPrice(
    priceRangeV2.minVariantPrice.currencyCode,
    variant.price
  )

  const bgGradient = useColorModeValue(
    `linear(to-b, gradientTop, gradientBottom)`,
    `linear(to-b, dark.gradientTop, dark.gradientBottom)`
  )
  const bgInput = useColorModeValue(`white`, `gray.800`)
  const bgImage = useColorModeValue(`gray.100`, `gray.700`)
  const bgScrollbar = useColorModeValue(`gray.300`, `gray.800`)
  const bgScrollThumb = useColorModeValue(`gray.600`, `gray.400`)
  const priceColor = useColorModeValue(`primary`, `dark.primary`)
  const hasVariants = variants.length > 1
  const hasImages = images.length > 0
  const hasMultipleImages = images.length > 1
  const isClass = () => {
    if (productType === "Class") {
      return true
    }
    return false
  }
  const isBrowser = typeof window !== `undefined`

  // Booking Date & Time State
  const [date, setDate] = React.useState(null)
  const [time, setTime] = React.useState(null)
  const [selected, setSelected] = React.useState(true)

  React.useEffect(() => {
    isBrowser &&
      window.addEventListener("sesami:loaded", function () {
        const dateElement = document.querySelector("#sesami-date-0")
        const timeElement = document.querySelector("#sesami-time-0")
        dateElement.addEventListener("change", function () {
          setDate(dateElement.value)
          setSelected(false)
          // console.log(dateElement.value)
        })
        timeElement.addEventListener("change", function () {
          setTime(timeElement.value)
          // console.log(timeElement.value)
        })
      })
  })

  return (
    <Layout>
      <Seo
        title={title}
        description={description}
        image={firstImage.localFile.publicURL}
        imageWidth={firstImage.localFile.childImageSharp.gatsbyImageData.width}
        imageHeight={
          firstImage.localFile.childImageSharp.gatsbyImageData.height
        }
      />

      <Box bgGradient={bgGradient}>
        <Container py={4}>
          <Grid
            templateColumns={["1fr", null, "repeat(2, 1fr)"]}
            gap={[12, 20]}
            sx={{
              '[data-name="product-image-wrapper"]': { order: [1, null, 2] },
            }}
          >
            <Stack spacing={[8, 16]} order={[2, null, 1]}>
              <Stack spacing={4}>
                <Box display="flex">
                  <Link to="/" aria-label="Home" mr={"0.25rem"}>
                    Home
                  </Link>{" "}
                  /{" "}
                  <Link
                    to={`/products/${productType.toLowerCase()}`}
                    aria-label={productType}
                    m={"auto 0.25rem"}
                  >
                    {productType}
                  </Link>{" "}
                  /{" "}
                  <Link
                    to={`/products/${productType.toLowerCase()}/${handle}`}
                    ml={"0.25rem"}
                    color={"secondary"}
                  >
                    {title}
                  </Link>
                </Box>
                <Heading as="h1" fontWeight={500} color={`primary`}>
                  {title}
                </Heading>
                <Box dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
                {isClass() && (
                  <SesamiButton
                    storeId={`55103946906`}
                    variantId={product.variants[0].legacyResourceId}
                    legacyId={product.legacyResourceId}
                    text={`CHOOSE YOUR TIME`}
                  />
                )}
              </Stack>
              <Stack spacing={0}>
                <Heading as="h2" color={priceColor}>
                  {available ? price : "Out of Stock"}
                </Heading>

                <Flex
                  as="form"
                  noValidate
                  direction={["column", "row", "row"]}
                  flexWrap="wrap"
                >
                  {available && (
                    <Stack
                      as="fieldset"
                      mr={6}
                      mt={4}
                      sx={{ input: { px: 2, py: 2 } }}
                    >
                      <label htmlFor="quantity">
                        {isClass() ? "Number of participants" : "Quantity"}
                      </label>
                      <NumberInput
                        onChange={(_, value) => setQuantity(value)}
                        value={quantity}
                        id="quantity"
                        name="quantity"
                        defaultValue={1}
                        min={1}
                        maxW={20}
                      >
                        <NumberInputField bg={bgInput} />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </Stack>
                  )}
                  {available && hasVariants && (
                    <>
                      {options.map(
                        ({ id, name, values }, index) =>
                          name !== "Duration" && (
                            <React.Fragment key={id}>
                              <Stack as="fieldset" mt={4} mr={6} mb={[8, 0]}>
                                <label htmlFor="variant">{name}</label>
                                <Select
                                  variant="filled"
                                  borderColor="#dde5ed"
                                  borderWidth=".75px"
                                  bg={bgInput}
                                  onChange={event =>
                                    handleOptionChange(index, event)
                                  }
                                >
                                  {values.map(value => (
                                    <option
                                      value={value}
                                      key={`${name}-${value}`}
                                    >
                                      {value}
                                    </option>
                                  ))}
                                </Select>
                              </Stack>
                            </React.Fragment>
                          )
                      )}
                    </>
                  )}
                  <Stack>
                    <AddToCart
                      variantId={productVariant.storefrontId}
                      quantity={quantity}
                      available={available}
                      alignSelf="flex-end"
                      mt={12}
                      pt={1.5}
                      w="100%"
                      disabled={isClass() ? selected : false}
                      properties={
                        isClass()
                          ? [
                              {
                                key: "Date",
                                value: date,
                              },
                              {
                                key: "Time",
                                value: time,
                              },
                            ]
                          : [
                              {
                                key: productType,
                                value: title,
                              },
                            ]
                      }
                    />
                  </Stack>
                </Flex>
              </Stack>
            </Stack>
            {hasImages && (
              <Box data-name="product-image-wrapper" position="relative">
                <Box
                  role="group"
                  aria-label="gallery"
                  aria-describedby="instructions"
                  overflowX={hasMultipleImages ? "scroll" : "auto"}
                  tabIndex="0"
                  bg={bgImage}
                  mb={2}
                  _focus={{ outline: "none", boxShadow: "outline" }}
                  sx={{
                    WebkitOverflowScrolling: "touch",
                    "::-webkit-scrollbar": { height: "0.875rem" },
                    "::-webkit-scrollbar-track": {
                      backgroundColor: bgScrollbar,
                    },
                    "::-webkit-scrollbar-thumb": {
                      backgroundColor: bgScrollThumb,
                    },
                    "&:hover + #instructions, &:focus + #instructions": {
                      display: "block",
                    },
                  }}
                >
                  {hasImages ? (
                    <Flex as="ul">
                      {images.map((image, index) => (
                        <Box
                          as="li"
                          flex="0 0 100%"
                          display="flex"
                          whiteSpace="nowrap"
                          key={`product-image-${index}`}
                          p={6}
                        >
                          <GatsbyImage
                            objectFit="contain"
                            alt={
                              image.altText
                                ? image.altText
                                : `Product Image of ${title} #${index + 1}`
                            }
                            image={
                              image.localFile.childImageSharp.gatsbyImageData
                            }
                          />
                        </Box>
                      ))}
                    </Flex>
                  ) : (
                    <Box
                      minHeight="300px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      fontSize="18px"
                      fontWeight="medium"
                    >
                      No Preview image
                    </Box>
                  )}
                </Box>
                {hasMultipleImages && (
                  <Box
                    id="instructions"
                    textAlign="center"
                    mt={1}
                    fontSize="18px"
                    display="none"
                    position="absolute"
                    left="50%"
                    transform="translate3d(-50%, 0px, 0px)"
                  >
                    <span aria-hidden="true">←</span> scroll for more{" "}
                    <span aria-hidden="true">→</span>
                  </Box>
                )}
              </Box>
            )}
          </Grid>
        </Container>
      </Box>
      {!isEvent && suggestions.nodes.length >= 1 && (
        <Container my={[20, 28]}>
          <Heading
            as="h2"
            mb={8}
            fontSize="3xl"
            fontWeight={500}
            color={`primary`}
          >
            More Products
          </Heading>
          <ProductListing products={suggestions} />
        </Container>
      )}
    </Layout>
  )
}

export default Product

export const query = graphql`
  query($id: String!, $productType: String!) {
    product: shopifyProduct(id: { eq: $id }) {
      title
      description
      descriptionHtml
      priceRangeV2 {
        maxVariantPrice {
          amount
          currencyCode
        }
        minVariantPrice {
          amount
          currencyCode
        }
      }
      tags
      id
      legacyResourceId
      productType
      handle
      storefrontId
      images {
        altText
        localFile {
          publicURL
          childImageSharp {
            gatsbyImageData(
              formats: [WEBP, PNG]
              quality: 60
              layout: CONSTRAINED
              width: 640
            )
          }
        }
      }
      handle
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
      options {
        name
        values
        id
      }
    }
    suggestions: allShopifyProduct(
      limit: 3
      filter: { productType: { eq: $productType }, id: { ne: $id } }
    ) {
      nodes {
        ...ProductCard
      }
    }
  }
`
