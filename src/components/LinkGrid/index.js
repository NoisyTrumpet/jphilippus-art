import * as React from "react"
import Link from "../link"

const data = {
  nodes: [
    {
      slug: `/products/class`,
      label: `Classes`,
      alt: `All Class Products`,
    },
    {
      slug: `/products/art`,
      label: `Art`,
      alt: `All Art Products`,
    },
    {
      slug: `/products/jewelry`,
      label: `Jewelry`,
      alt: `All Jewelry Products`,
    },
    {
      slug: `/products`,
      label: `All Products`,
      alt: `All Products`,
    },
  ],
}

const LinkGrid = () => {
  return (
    <>
      {data.nodes.map(node => (
        <Link
          to={node.slug}
          alt={node.alt}
          textTransform="uppercase"
          mx={[2, 4]}
        >
          {node.label}
        </Link>
      ))}
    </>
  )
}

export default LinkGrid
