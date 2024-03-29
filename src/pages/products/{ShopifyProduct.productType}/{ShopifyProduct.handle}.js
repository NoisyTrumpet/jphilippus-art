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
  Button,
} from "@chakra-ui/react"
import { PhoneIcon } from "@chakra-ui/icons"
import isEqual from "lodash.isequal"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../../../components/Layout/Layout"
import { StoreContext } from "../../../context/storeContext"
import AddToCart from "../../../components/AddToCart/index"
import formatPrice from "../../../utils/formatPrice"
import CallToAction from "../../../components/CallToAction"
import ProductListing from "../../../components/ProductListing/index"
import Seo from "../../../components/SEO.js"
import ProductAccordion from "../../../components/ProductAccordion/index"
import Gallery from "../../../components/Gallery/Gallery"

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
    tags,
  } = product

  const { client } = React.useContext(StoreContext)

  const [variant, setVariant] = React.useState({ ...initialVariant })
  const [quantity, setQuantity] = React.useState(1)

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

  const simplyBookLink =
    productVariant.metafields.length >= 1
      ? productVariant.metafields[0].value
      : ""

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
  // const bgImage = useColorModeValue(`gray.100`, `gray.700`)
  // const bgScrollbar = useColorModeValue(`gray.300`, `gray.800`)
  // const bgScrollThumb = useColorModeValue(`gray.600`, `gray.400`)
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

  const isZoom = () => title.includes("Zoom")

  // Booking Date & Time State
  const [date, setDate] = React.useState(null) //eslint-disable-line
  const [time, setTime] = React.useState(null) //eslint-disable-line
  const [selected, setSelected] = React.useState(true) //eslint-disable-line
  const [image, setImage] = React.useState(firstImage)

  // Old Event
  const isEvent = tags.filter(tag => tag === "Monthly Event").length > 0
  const isPastEvent = tags.filter(tag => tag === "Past Event").length > 0

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
                <Box
                  sx={{ a: { color: "primary" } }}
                  dangerouslySetInnerHTML={{ __html: descriptionHtml }}
                />
              </Stack>
              <Stack spacing={0}>
                {!isPastEvent && !isZoom() && (
                  <Heading as="h2" color={priceColor}>
                    {available ? price : "Out of Stock"}
                  </Heading>
                )}
                {isPastEvent && (
                  <Heading as="h2" fontSize="lg" color={priceColor}>
                    This event has already passed
                  </Heading>
                )}

                {!isZoom() && (
                  <Flex
                    as="form"
                    noValidate
                    direction={["column", "row", "row"]}
                    flexWrap="wrap"
                  >
                    {!isClass() && available && (
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
                      {!isPastEvent && !isClass() && (
                        <AddToCart
                          variantId={productVariant.storefrontId}
                          quantity={quantity}
                          available={available}
                          alignSelf="flex-end"
                          mt={12}
                          pt={1.5}
                          w="100%"
                          disabled={isClass() && !isZoom() ? selected : false}
                          properties={
                            isClass() && !isZoom()
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
                      )}
                    </Stack>
                  </Flex>
                )}
                {isClass() && !isZoom() && (
                  <Stack>
                    <Button
                      as="a"
                      mt={4}
                      href={simplyBookLink}
                      maxW={`fit-content`}
                      aria-label={title}
                      bg="primary"
                      color="white"
                      textTransform="uppercase"
                      fontWeight="normal"
                    >
                      Book Class
                    </Button>
                  </Stack>
                )}
                {isClass() && !isZoom() && (
                  <Stack>
                    <ProductAccordion />
                  </Stack>
                )}
                {isZoom() && (
                  <Stack>
                    <Button
                      as="a"
                      href="tel:210.474.0440"
                      bg="primary"
                      color="white"
                      fontWeight="normal"
                      textTransform="uppercase"
                      leftIcon={<PhoneIcon />}
                    >
                      Call to schedule
                    </Button>
                  </Stack>
                )}
              </Stack>
            </Stack>
            {hasImages && (
              <Box data-name="product-image-wrapper" position="relative">
                <Box
                  role="group"
                  aria-label="gallery"
                  // aria-describedby="instructions"
                  // overflowX={hasMultipleImages ? "scroll" : "auto"}
                  tabIndex="0"
                  mb={2}
                  // _focus={{ outline: "none", boxShadow: "outline" }}
                  // sx={{
                  //   WebkitOverflowScrolling: "touch",
                  //   "::-webkit-scrollbar": { height: "0.875rem" },
                  //   "::-webkit-scrollbar-track": {
                  //     backgroundColor: bgScrollbar,
                  //   },
                  //   "::-webkit-scrollbar-thumb": {
                  //     backgroundColor: bgScrollThumb,
                  //   },
                  //   "&:hover + #instructions, &:focus + #instructions": {
                  //     display: "block",
                  //   },
                  // }}
                >
                  {hasImages ? (
                    <Flex as="ul">
                      <Box
                        as="li"
                        flex="0 0 100%"
                        display="flex"
                        whiteSpace="nowrap"
                      >
                        <GatsbyImage
                          objectFit="contain"
                          alt={
                            image.altText
                              ? image.altText
                              : `${title}-image-${productType}`
                          }
                          image={
                            image.localFile.childImageSharp.gatsbyImageData
                          }
                        />
                      </Box>
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
                    maxWidth="100%"
                  >
                    <Grid templateColumns={`repeat(${images.length}, 1fr)`}>
                      {images.map((image, index) => (
                        <Box
                          as="button"
                          onClick={() => setImage(image)}
                          key={`bottom-image-${index}`}
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
                    </Grid>
                  </Box>
                )}
              </Box>
            )}
          </Grid>
        </Container>
        {productType === "Event" && title === "Turn Art Into Charcuterie" && (
          <Container>
            <Gallery isEventPage />
          </Container>
        )}
      </Box>
      {isClass() && (
        <CallToAction
          topCaption="Let us help you plan your special event."
          title="BOOK YOUR PRIVATE PARTY TODAY"
          subCaption="If you're looking for the perfect way to make your event special, we are happy to customize your experience through our private party offerings. Call us at 210-474-0440 or click the button below to call."
          ctaText="Book a Party"
          ctaLink="tel:210.474.0440"
        />
      )}
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
              aspectRatio: 1
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
        metafields {
          key
          value
        }
      }
      tags
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
