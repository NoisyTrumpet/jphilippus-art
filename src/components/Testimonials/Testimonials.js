import * as React from "react"
import Fade from "react-reveal/Fade"
import { graphql, useStaticQuery } from "gatsby"
import { Box, Text, Container } from "@chakra-ui/react"
import { StaticImage } from "gatsby-plugin-image"
import BackgroundImage from "gatsby-background-image"

const Testimonials = () => {

    const { mobileImage, desktopImage } = useStaticQuery(
        graphql`
          query {
            mobileImage: file(relativePath: { eq: "goldenBoard.png" }) {
              childImageSharp {
                fluid(quality: 100, maxWidth: 490) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            desktopImage: file(relativePath: { eq: "goldenBoard.png" }) {
              childImageSharp {
                fluid(quality: 100, maxWidth: 4160) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }`
    );
    const images = [
        mobileImage.childImageSharp.fluid,
        {
            ...desktopImage.childImageSharp.fluid,
            media: `(min-width: 491px)`,
        },
    ]

    return (
        // <BackgroundImage
        //     Tag="section"
        //     fluid={images}
        //     style={{ 
        //         backgroundAttachment: "fixed",
        //         backgroundPosition: "bottom",
        //         backgroundSize: "contain"
        //     }}
        //     preserveStackingContext
        // >

        //     <Container bg="white" maxW="100vw">
        //         <Box
        //             py="4rem"
        //             maxW={700}
        //             m="auto"
        //             textAlign="center"
        //         >
        //             <Fade>
        //                 <Text fontSize="21px">
        //                     "I had so much fun!!! Truely a blessing to have the opportunity to come to a place to make resin art coasters and other art pieces!"
        //         </Text>
        //                 <Text fontSize="21px">
        //                     - Sayama Turner
        //         </Text>
        //             </Fade>
        //         </Box>
        //     </Container>

        //     <Container h={500}></Container>

        // </BackgroundImage>

        <Container
            maxW="100vw"
            p={0}
            m={0}
        >
            <Box
                py={["2rem", "4rem"]}
                px={["1rem", "0"]}
                maxW={700}
                m="auto"
                textAlign="center"
            >
                <Fade bottom>
                    <Text fontSize="21px">
                        "I had so much fun!!! Truely a blessing to have the opportunity to come to a place to make resin art coasters and other art pieces!"
                </Text>
                    <Text fontSize="21px">
                        - Sayama Turner
                </Text>
                </Fade>
            </Box>

            <StaticImage
                src="../../images/goldenBoard.png"
                alt=""
                placeholder="blurred"
                layout="fullWidth"
                h={500}
            />
        </Container>
    )
}

export default Testimonials
