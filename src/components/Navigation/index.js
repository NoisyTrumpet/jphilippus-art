import * as React from "react"
import { Stack, useColorModeValue } from "@chakra-ui/react"
import Link from "../link"

import "./Navigation.scss";

// In theory this could also be defined inside "gatsby-config.js" and then queried via GraphQL
const navigationLinks = [
  {
    name: "About the Artist",
    slug: "/",
    pActive: false,
  },
  {
    name: "Shop",
    slug: "/",
    pActive: true,
  },
  {
    name: "Class Schedule",
    slug: "/",
    pActive: true,
  },
  {
    name: "News/Press",
    slug: "/",
    pActive: true,
  },
  {
    name: "Contact",
    slug: "/",
    pActive: true,
  },
  {
    name: "FAQ",
    slug: "/",
    pActive: true,
  },
]

const Navigation = () => {
  const linkColor = useColorModeValue(`headingColor`, `dark.headingColor`)

  return (
    <Stack
      as="nav"
      className="navigation"
      direction={["column", "row"]}
      fontSize="lg"
      alignItems="center"
      sx={{ "a.active": { fontWeight: `medium`, color: linkColor } }}
    >
      {navigationLinks.map(n => (
        <Link
          key={n.slug}
          p={2}
          to={n.slug}
          className="navigation-link"
          activeClassName="active"
          partiallyActive={n.pActive}
        >
          {n.name}
        </Link>
      ))}
    </Stack>
  )
}

export default Navigation
