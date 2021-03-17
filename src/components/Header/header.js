import * as React from "react"
import PropTypes from "prop-types"
import {
  Box,
  Container,
  useColorModeValue,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react"
import { StoreContext } from "../../context/storeContext"
import { StaticImage } from "gatsby-plugin-image"
import Link from "../link"
import Spacer from "../Spacer/index"
import Cart from "../Cart/index"
import Navigation from "../Navigation/index"
import MobileMenu from "../MobileMenu/index"
import CartButton from "../CartButton/index"

const Header = ({ siteTitle }) => {
  const { isOpen, onClose, onOpen, checkout } = React.useContext(StoreContext)
  const [isSmallerThan640] = useMediaQuery("(max-width: 640px)")
  const bg = useColorModeValue(`bg`, `dark.bg`)
  const { colorMode } = useColorMode()
  const logoColor = useColorModeValue(`primary`, `dark.primary`)
  const linkColor = useColorModeValue(`headingColor`, `dark.headingColor`)
  const btnRef = React.useRef()

  const items = checkout ? checkout.lineItems : []

  const quantity = items.reduce((total, item) => {
    return total + item.quantity
  }, 0)

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
        sx={{ svg: { height: `24px`, width: `auto` } }}
      >
        <Container
          display="grid"
          gridTemplateColumns={["1fr 1fr", "1fr auto 1fr"]}
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
              <StaticImage
                src="../../images/logo-horizontal-dark.png"
                width={175}
                style={{ margin: "10px 5px" }}
                quality={95}
                formats={["WEBP", "AVIF", "PNG"]}
                alt={siteTitle}
              />
            ) : (
              <StaticImage
                src="../../images/logo-horizontal.png"
                width={175}
                style={{ margin: "10px 5px" }}
                quality={95}
                formats={["WEBP", "AVIF", "PNG"]}
                alt={siteTitle}
              />
            )}
          </Link>
          {isSmallerThan640 ? (
            <MobileMenu quantity={quantity} btnRef={btnRef} onOpen={onOpen} />
          ) : (
            <>
              <Navigation />
              <CartButton quantity={quantity} onOpen={onOpen} btnRef={btnRef} />
            </>
          )}
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
