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
import SubMenu from "../SubMenu/index"

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
          <Link to="/" alt="Home" maxWidth={[125, 200]}>
            <GatsbyImage
              image={dark}
              alt={`J. Philippus Art Studio & Gallery Logo`}
              className="header-logo-dark"
            />
          </Link>
        ) : (
          <Link to="/" alt="Home" maxWidth={[125, 200]}>
            <GatsbyImage
              image={light}
              alt={`J. Philippus Art Studio & Gallery Logo`}
              className="header-logo-reg"
            />
          </Link>
        )}

        {!isSmallerThan1160 && <MenuLinks isNowOpen={isNowOpen} />}
        {/* <ThemeToggle /> */}
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
  if (to === "/products") {
    return <SubMenu />
  }
  return (
    <Link to={to} color={linkColor} alt={alt}>
      <Text display="block" {...rest} fontWeight="500">
        {children}
      </Text>
    </Link>
  )
}

export const MenuLinks = () => {
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
      children: [
        {
          name: `Art`,
          description: `Description for art`,
          slug: `/products/art`,
        },
        {
          name: `Classes`,
          description: `Description for Classes`,
          slug: `/products/class`,
        },
        {
          name: `Jewelry`,
          description: `We sell Julie Voss Jewelry`,
          slug: `/products/jewelry`,
        },
        {
          name: `Art Kits`,
          description: `Custom Art Kits`,
          slug: `/products/art`,
        },
      ],
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
    // {
    //   name: "FAQ",
    //   slug: "/faq",
    //   pActive: true,
    // },
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
          to="/products/gift-card/gift-card/"
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
      px={2}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      {children}
    </Flex>
  )
}

export default NavBar
