import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  Box,
  useColorModeValue,
  useColorMode,
  Flex,
  Stack,
  Button,
  Link
} from "@chakra-ui/react"
import Announcement from "./Fragments/Announcement"

import { StoreContext } from "../../context/storeContext"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import Link from "../link"
import Cart from "../Cart/index"
import MobileMenu from "../MobileMenu/index"
import CartButton from "../CartButton/index"
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
              formats: [WEBP, PNG]
            )
          }
        }
        LightLogo: file(relativePath: { eq: "logo-horizontal.png" }) {
          childImageSharp {
            gatsbyImageData(
              width: 200
              quality: 60
              placeholder: BLURRED
              formats: [WEBP, PNG]
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
          <Link href="/" alt="Home" maxWidth={[150, 200]}>
            <GatsbyImage
              image={dark}
              alt={`J. Philippus Art Studio & Gallery Logo`}
              className="header-logo-dark"
            />
          </Link>
        ) : (
          <Link href="/" alt="Home" maxWidth={[150, 200]}>
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
    <Link href={to} color={linkColor} alt={alt} textTransform={`uppercase`}>
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
      name: `Events`,
      pActive: true,
      slug: `/products/event`,
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
      name: "News",
      slug: "/news",
      pActive: true,
    },
    {
      name: "FAQ",
      slug: "/faq",
      pActive: true,
    },
    {
      name: "Contact",
      slug: "/contact",
      pActive: true,
    },
  ]
  return (
    <Box
      display={{
        base: isOpen ? "block" : "none",
        md: "none",
        lg: `none`,
        xl: `flex`,
      }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={4}
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
        <Button
          as="a"
          href="/products/class"
          bg="primary"
          color="white"
          pt={1}
          textTransform="uppercase"
          fontWeight="regular"
          _hover={{ backgroundColor: `#79C1CC` }}
        >
          Book a Class
        </Button>
        {/* <DiamondButton
          buttonStyle="btn--secondary"
          buttonSize="btn--xs"
          to="/products/gift-card/gift-card/"
        >
          Gift Cards
        </DiamondButton> */}
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
