import React from "react"
import {
  Container,
  Text,
  useColorModeValue,
  Box,
  // Grid,
  // GridItem,
  Center,
} from "@chakra-ui/react"

import Layout from "../components/Layout/Layout"
import { graphql } from "gatsby"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import Hero from "../components/Hero/Hero.js"
// import NewHero from "../components/NewHero"
import Testimonials from "../components/Testimonials/testimonials.js"
import Link from "../components/link"
import BlockGrid from "../components/BlockGrid/index"
import ProductListing from "../components/ProductListing"
import Seo from "../components/SEO"
import CallToAction from "../components/CallToAction/index"
// import InstagramFeed from "../components/InstagramFeed/index"
import { GatsbyImage } from "gatsby-plugin-image"
import DiamondButton from "../components/DiamondButton/DiamondButton"

const IndexPage = ({ data: products, data }) => {
  const themeBlue = useColorModeValue(`primary`, `gray.300`)
  const bgGray = useColorModeValue(`bgGray`, `gray.700`)
  const featuredProducts = {
    nodes: products?.shopifyCollection?.products,
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "J. Philippus Art Studio & Gallery",
    image: data.graphImg.publicURL,
    "@id": "jphilippusart",
    url: "https://jphilippusart.com/",
    telephone: "210.474.0440",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1846 North Loop 1604 W Suite 10",
      addressLocality: "San Antonio",
      addressRegion: "TX",
      postalCode: "78248",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 29.6066812,
      longitude: -98.52151239999999,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "11:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "11:00",
        closes: "17:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/JPhilippusArtStudio",
      "https://www.youtube.com/channel/UC2ebHj7h8u6XAzZRhXbx02w",
      "https://jphilippusart.com/",
      "https://www.instagram.com/jphilippusartstudio/",
    ],
  }

  return (
    <Layout>
      <Seo
        title="J. Philippus Art Studio & Gallery"
        image={data.graphImg.publicURL}
        imageWidth={data.graphImg.childImageSharp.gatsbyImageData.width}
        imageHeight={data.graphImg.childImageSharp.gatsbyImageData.height}
        schemaMarkup={schema}
      />
      <Hero />
      {/* <NewHero /> */}
      <Container px={8} py={12} maxWidth="100%">
        <ProductListing featured products={featuredProducts} />
      </Container>
      <Box py={8} backgroundColor={bgGray}>
        <BlockGrid />
      </Box>
      <Box>
        {/* topCaption, title, subCaption, ctaText, ctaLink */}
        <CallToAction
          // topCaption="Let us help you plan your special event."
          title="Create Your Masterpiece"
          topCaption="Browse our selection of classes"
          subCaption="Classes range rom Acrylic Pour on Metal Flowers to Glass Art, custom Charcuterie Boards and more!"
          ctaText="Explore Classes"
          ctaLink="/products/class/"
        />
      </Box>
      <Container my={[16, 16, 16, 16]} textAlign="center">
        <Text
          as="h2"
          fontSize="3xl"
          textAlign="center"
          fontWeight="semi-bold"
          letterSpacing="tight"
          color={themeBlue}
          textTransform="uppercase"
        >
          2021 Parade of Homes
        </Text>
        <Text
          textAlign="center"
          my={7}
          maxWidth={475}
          mx="auto"
          mt="4"
          fontSize="lg"
        >
          Featured artist of all original art in the "Robare Custom Home" at the
          2021 San Antonio Parade of Homes
        </Text>
        <Link
          to="/news/parade-of-homes/"
          textAlign="center"
          alignItems="center"
          color={themeBlue}
          fontSize="xl"
          alt={`Read more about Jeanne Philippus, the featured artist of all original art in the "Rohare Custom Home" at the 2021 San Antonio Parade of Homes`}
        >
          read full release here <ExternalLinkIcon />
        </Link>
      </Container>
      <Testimonials />
      <Container display="grid" placeItems="center">
        <Box
          display="grid"
          placeItems={`center`}
          height="100%"
          width="fit-content"
          paddingTop={[4, 14]}
        >
          <GatsbyImage
            image={data.file.childImageSharp.gatsbyImageData}
            alt="Latest News"
            style={{ width: `100%`, gridArea: "1/1", height: "100%" }}
          />
          <Center
            className="center-grid-diamond"
            style={{
              gridArea: "1/1",
              position: "relative",
            }}
          >
            <DiamondButton
              buttonStyle="btn--primary-transparent"
              buttonSize="btn--xl"
              to="/news"
            >
              Latest News
            </DiamondButton>
          </Center>
        </Box>
        {/* <Grid templateColumns={["1fr", "1fr 1fr", "1fr 1fr"]} mt={8} gap={2}>
          <GridItem position="relative" display="grid" placeItems="center">

          </GridItem>
          <GridItem px={2}>
            <Text
              textAlign="center"
              textTransform="uppercase"
              fontWeight={500}
              color="primary"
              fontSize="2xl"
              my={4}
            >
              Let's Get Social
            </Text>
            <InstagramFeed images={data.allInstagramContent.edges} />
          </GridItem>
        </Grid> */}
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query FeaturedProductsQuery {
    shopifyCollection(title: { eq: "Featured Products" }) {
      products {
        ...ProductCard
      }
    }
    graphImg: file(relativePath: { eq: "heroDesktop-banner.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(
          width: 1800
          quality: 60
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: [WEBP, PNG]
        )
      }
    }
    file(relativePath: { eq: "news-image.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 569, quality: 60, layout: CONSTRAINED)
      }
    }
  }
`
export default IndexPage

// allInstagramContent(limit: 6) {
//   edges {
//     node {
//       caption
//       permalink
//       localImage {
//         childImageSharp {
//           gatsbyImageData(
//             width: 210
//             height: 210
//             layout: CONSTRAINED
//             placeholder: BLURRED
//             formats: [ WEBP,  PNG]
//             quality: 60
//           )
//         }
//       }
//     }
//   }
// }
