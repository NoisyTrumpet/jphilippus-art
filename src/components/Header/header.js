import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import {
  Box,
  Container,
  useColorModeValue,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react"
import { StoreContext } from "../../context/storeContext"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Link from "../link"
import Spacer from "../Spacer/index"
import Cart from "../Cart/index"
import Navigation from "../Navigation/index"
import MobileMenu from "../MobileMenu/index"
import CartButton from "../CartButton/index"

const Header = ({ siteTitle }) => {
  const { isOpen, onClose, onOpen, checkout } = React.useContext(StoreContext)
  const [isSmallerThan768] = useMediaQuery("(max-width: 768px)")
  const bg = useColorModeValue(`bg`, `dark.bg`)
  const { colorMode } = useColorMode()
  const logoColor = useColorModeValue(`primary`, `dark.primary`)
  const linkColor = useColorModeValue(`headingColor`, `dark.headingColor`)
  const btnRef = React.useRef()

  const items = checkout ? checkout.lineItems : []

  const quantity = items.reduce((total, item) => {
    return total + item.quantity
  }, 0)

  const { DarkLogo, LightLogo } = useStaticQuery(
    graphql`
      query {
        DarkLogo: file(relativePath: { eq: "logo-horizontal-dark.png" }) {
          childImageSharp {
            gatsbyImageData(
              width: 200
              quality: 90
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        LightLogo: file(relativePath: { eq: "logo-horizontal.png" }) {
          childImageSharp {
            gatsbyImageData(
              width: 200
              quality: 90
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  )
  const dark = getImage(DarkLogo)
  const light = getImage(LightLogo)

  return (
    <>
      <Cart isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
      <Box
        w="100%"
        margin={0}
        as="header"
        position="fixed"
        zIndex="docked"
        // height="navigationHeight"
        display="flex"
        alignItems="center"
        bg={bg}
        // sx={{ svg: { height: `24px`, width: `auto` } }}
      >
        <Container
          className="mobile-header"
          display="flex"
          width="100%"
          justifyContent={["space-between", "space-evenly"]}
          height="fit-content"
        >
          <Link
            to="/"
            display="flex"
            alignItems="center"
            justifySelf="flex-start"
            color={linkColor}
            _hover={{
              textDecoration: `none`,
              color: logoColor,
            }}
          >
            {colorMode === "dark" ? (
              <GatsbyImage
                image={dark}
                style={{ margin: "10px 5px" }}
                alt={siteTitle}
                className="header-logo-dark"
              />
            ) : (
              <GatsbyImage
                image={light}
                style={{ margin: "10px 5px" }}
                alt={siteTitle}
                className="header-logo-reg"
              />
            )}
          </Link>
          <Container className="right-nav" display="flex" width="min-content">
            {isSmallerThan768 ? (
              <MobileMenu
                quantity={quantity}
                btnRef={btnRef}
                onOpen={onOpen}
                className="mobile-nav"
              />
            ) : (
              <>
                <Navigation className="navigation" />
                <CartButton
                  quantity={quantity}
                  onOpen={onOpen}
                  btnRef={btnRef}
                />
              </>
            )}
          </Container>
        </Container>
      </Box>
      <Spacer size="navigationHeight" axis="vertical" />
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
