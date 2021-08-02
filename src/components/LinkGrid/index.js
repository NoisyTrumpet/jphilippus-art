import * as React from "react"
import Link from "../link"

const data = {
  nodes: [
    {
      slug: `/products/class/`,
      label: `Classes`,
    },
    {
      slug: `/products/art/`,
      label: `Art`,
    },
    {
      slug: `/products/art-kit/`,
      label: `Art Kits`,
    },
    {
      slug: `/products/event/`,
      label: `Events`,
    },
    {
      slug: `/products/`,
      label: `All Products`,
    },
  ],
}

const LinkGrid = () => {
  return data.nodes.map(node => (
    <Link
      to={node.slug}
      textTransform="uppercase"
      mx={[1.5, 4]}
      fontSize={["small", "medium"]}
      key={node.label}
    >
      {node.label}
    </Link>
  ))
}

export default LinkGrid
