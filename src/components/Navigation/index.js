import * as React from "react"
import {
  Stack,
  useColorModeValue,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Link,
  Button,
} from "@chakra-ui/react"
// import Link from "../link"
import { PhoneIcon, CalendarIcon } from "@chakra-ui/icons"
// import DiamondButton from "../DiamondButton/DiamondButton"

import "./Navigation.scss"
import { links } from "../SubMenu/Fragments/links-data"
import MenuItem from "../SubMenu/Fragments/MenuItem"

// In theory this could also be defined inside "gatsby-config.js" and then queried via GraphQL

const Navigation = () => {
  const linkColor = useColorModeValue(`headingColor`, `dark.headingColor`)
  const navigationLinks = [
    {
      name: "About the Artist",
      slug: "/about",
      pActive: false,
    },
    {
      name: `Events`,
      pActive: false,
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
          name: `Art Kits`,
          description: `Custom Art Kits`,
          slug: `/products/art`,
        },
        {
          name: `All Products`,
          description: `All Products`,
          slug: `/products`,
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
      name: "Gift Cards",
      slug: "/products/gift-card/gift-card",
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

  const SubNav = () => {
    return (
      <Accordion allowMultiple allowToggle minWidth={`100%`}>
        <AccordionItem width={`100%`}>
          <AccordionButton width={`100%`} justifyContent={`space-between`}>
            SHOP
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Box as="ul" listStyleType="none" px="2" pb="2">
              {links.map((link, idx) => (
                <Box as="li" key={idx}>
                  <MenuItem
                    href={link.href}
                    title={link.title}
                    isNew={link.new}
                    icon={link.icon}
                  >
                    {link.description}
                  </MenuItem>
                </Box>
              ))}
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    )
  }
  return (
    <Stack
      as="nav"
      className="navigation"
      direction={["column", "column"]}
      fontSize="lg"
      alignItems="center"
      sx={{ "a.active": { fontWeight: `bold`, color: linkColor } }}
    >
      {navigationLinks.map(n =>
        n.name === "Shop" ? (
          <SubNav />
        ) : (
          <Link
            key={n.slug}
            p={2}
            href={n.slug}
            className="navigation-link"
            activeClassName="active"
            partiallyActive={n.pActive}
            _last={{
              marginBottom: 8,
            }}
          >
            {n.name}
          </Link>
        )
      )}
      <Button
        as="a"
        href="/products/class"
        bg="primary"
        color="white"
        pt={1}
        textTransform="uppercase"
        fontWeight="regular"
        leftIcon={<CalendarIcon />}
        _hover={{ backgroundColor: `#79C1CC` }}
      >
        Book a Class
      </Button>
      <Button
        as="a"
        href="tel:210.474.0440"
        bg="secondary"
        color="white"
        pt={1}
        textTransform="uppercase"
        fontWeight="regular"
        leftIcon={<PhoneIcon />}
        // _hover={{ backgroundColor: `#79C1CC` }}
      >
        Book a Party
      </Button>
    </Stack>
  )
}

export default Navigation
