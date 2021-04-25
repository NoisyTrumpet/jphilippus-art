import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  Box,
  useColorModeValue,
  useColorMode,
  useMediaQuery,
  Flex,
  Text,
  Stack,
} from "@chakra-ui/react"
import Announcement from "./Fragments/Announcement"

import { StoreContext } from "../../context/storeContext"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Link from "../link"
import Cart from "../Cart/index"
import MobileMenu from "../MobileMenu/index"
import CartButton from "../CartButton/index"
import DiamondButton from "../DiamondButton/DiamondButton"
import ThemeToggle from "../ThemeToggle/index"

const NavBar = props => {
  const { isOpen, onClose, onOpen, checkout } = React.useContext(StoreContext)

  const [isNowOpen] = React.useState(false)
  const [isSmallerThan1160] = useMediaQuery("(max-width: 1160px)")
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
  const { colorMode } = useColorMode()
  const dark = getImage(DarkLogo)
  const light = getImage(LightLogo)
  const btnRef = React.useRef()

  return (
    <>
      <Cart isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
      <Announcement />
      <NavBarContainer {...props}>
        {colorMode === "dark" ? (
          <Link to="/" alt="Home">
            <GatsbyImage
              image={dark}
              style={{ margin: "10px 5px" }}
              alt={`J. Philippus Art Studio & Gallery Logo`}
              className="header-logo-dark"
            />
          </Link>
        ) : (
          <Link to="/" alt="Home">
            <GatsbyImage
              image={light}
              style={{ margin: "10px 5px" }}
              alt={`J. Philippus Art Studio & Gallery Logo`}
              className="header-logo-reg"
            />
          </Link>
        )}

        {!isSmallerThan1160 && <MenuLinks isNowOpen={isNowOpen} />}
        <ThemeToggle />
        {isSmallerThan1160 ? (
          <MobileMenu
            quantity={quantity}
            btnRef={btnRef}
            onOpen={onOpen}
            className="mobile-nav"
          />
        ) : (
          <CartButton quantity={quantity} onOpen={onOpen} btnRef={btnRef} />
        )}
      </NavBarContainer>
    </>
  )
}

const MenuItem = ({ children, isLast, to = "/", alt, ...rest }) => {
  const linkColor = useColorModeValue(`headingColor`, `dark.headingColor`)
  return (
    <Link to={to} color={linkColor} alt={alt}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  )
}

const MenuLinks = () => {
  const { isOpen } = React.useContext(StoreContext)
  const navigationLinks = [
    {
      name: "About the Artist",
      slug: "/about",
      pActive: false,
    },
    {
      name: "Shop",
      slug: "/products",
      pActive: true,
    },
    {
      name: "Class Schedule",
      slug: "/class-schedule",
      pActive: true,
    },
    {
      name: "Contact",
      slug: "/contact",
      pActive: true,
    },
    {
      name: "FAQ",
      slug: "/faq",
      pActive: true,
    },
  ]
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        {navigationLinks.map(n => (
          <MenuItem
            to={n.slug}
            key={n.slug}
            className="navigation-link"
            alt={n.name}
          >
            {n.name}
          </MenuItem>
        ))}
        <DiamondButton
          buttonStyle="btn--secondary"
          buttonSize="btn--small"
          to="/products/gift-cards"
        >
          Gift Cards
        </DiamondButton>
      </Stack>
    </Box>
  )
}

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      my={4}
      px={8}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      {children}
    </Flex>
  )
}

export default NavBar
