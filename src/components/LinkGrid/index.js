import * as React from "react"
import Link from "../link"
import '.'

const data = {
  nodes: [
    {
      slug: `/products/class`,
      label: `Classes`,
    },
    {
      slug: `/products/art`,
      label: `Art`,
    },
    {
      slug: `/products/art-kit`,
      label: `Art Kits`,
    },
    {
      slug: `/products/event`,
      label: `Events`,
    },
    {
      slug: `/products`,
      label: `All Products`,
    },
  ],
}

const LinkGrid = () => {
  return (
    <>
      {data.nodes.map(node => (
        <Link
          className="product-link"
          activeClassName="product-active"
          to={node.slug}
          textTransform="uppercase"
          mx={[1.5, 4]}
          fontSize={["small", "medium"]}
          key={node.label}
          activeStyle={{ color: '#C09559', fontWeight: '600' }}
        >
          {node.label}
        </Link>
      ))}
    </>
  )
}

export default LinkGrid
