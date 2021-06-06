import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  Box,
  useColorModeValue,
  useColorMode,
  Flex,
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
              quality: 60
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
        LightLogo: file(relativePath: { eq: "logo-horizontal.png" }) {
          childImageSharp {
            gatsbyImageData(
              width: 200
              quality: 60
              placeholder: BLURRED
              formats: [AUTO, WEBP]
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
      <Announcement />
      <NavBarContainer {...props}>
        <Cart isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
        {colorMode === "dark" ? (
          <Link to="/" alt="Home" maxWidth={[150, 200]}>
            <GatsbyImage
              image={dark}
              alt={`J. Philippus Art Studio & Gallery Logo`}
              className="header-logo-dark"
            />
          </Link>
        ) : (
          <Link to="/" alt="Home" maxWidth={[150, 200]}>
            <GatsbyImage
              image={light}
              alt={`J. Philippus Art Studio & Gallery Logo`}
              className="header-logo-reg"
            />
          </Link>
        )}
        <MobileMenu
          quantity={quantity}
          btnRef={btnRef}
          onOpen={onOpen}
          className="mobile-nav"
        />
        <MenuLinks isNowOpen={isNowOpen} />

        <CartButton quantity={quantity} onOpen={onOpen} btnRef={btnRef} />
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
    <Link to={to} color={linkColor} alt={alt} textTransform={`uppercase`}>
      {children}
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
      slug: "/calendar",
      pActive: true,
    },
    {
      name: "Gallery",
      slug: "/gallery",
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
      display={{ base: isOpen ? "block" : "none", md: "none", lg: `flex` }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "column", "column", "row"]}
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
          buttonSize="btn--xs"
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
