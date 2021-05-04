import * as React from "react"
import { Stack, useColorModeValue } from "@chakra-ui/react"
import Link from "../link"

import DiamondButton from "../DiamondButton/DiamondButton"

import "./Navigation.scss"

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
    <Stack
      as="nav"
      className="navigation"
      direction={["column", "row"]}
      fontSize="lg"
      alignItems="center"
      sx={{ "a.active": { fontWeight: `bold`, color: linkColor } }}
    >
      {navigationLinks.map(n => (
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
      ))}
      <DiamondButton
        buttonStyle="btn--secondary"
        buttonSize="btn--xs"
        mTop={8}
      >
        Gift Cards
      </DiamondButton>
    </Stack>
  )
}

export default Navigation
