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
} from "@chakra-ui/react"
import Link from "../link"

import DiamondButton from "../DiamondButton/DiamondButton"

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
      slug: "https://j-philippus-art-studio.myshopify.com/pages/calendar",
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
                <Box as="li" key={link.title}>
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
            to={n.slug}
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

      <DiamondButton
        buttonStyle="btn--secondary"
        buttonSize="btn--small"
        mTop={8}
        to={`/products/gift-card/gift-card`}
      >
        Gift Cards
      </DiamondButton>
    </Stack>
  )
}

export default Navigation
