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
      slug: `/products/art-kit`,
      label: `Art Kits`,
      alt: `Art Kit Products`,
    },
    {
      slug: `/products`,
      label: `All`,
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
          key={node.alt}
        >
          {node.label}
        </Link>
      ))}
    </>
  )
}

export default LinkGrid
