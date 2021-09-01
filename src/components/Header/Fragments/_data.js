import * as React from "react"
import { IoCalendar, IoGrid, IoHelpBuoy } from "react-icons/io5"
import { MdWeb } from "react-icons/md"

export const links = [
  {
    name: "About",
    to: "/about",
  },
  {
    name: "Shop",
    to: "/products",
    children: [
      {
        name: "Art",
        description: "Read our documentation and FAQs, or get in touch.",
        to: "#",
        icon: <IoHelpBuoy />,
      },
      {
        name: "Classes",
        description: "Discover and join your local Sketch community.",
        to: "#",
        icon: <IoCalendar />,
      },
      {
        name: "Art Kits",
        description: "Do even more with Assistants, plugins and integrations.",
        to: "#",
        icon: <IoGrid />,
      },
      {
        name: "Jewelry",
        description: "Get updates, articles and insights from the team.",
        to: "#",
        icon: <MdWeb />,
      },
    ],
  },
  {
    name: "Class Schedule",
    to: `/class-schedule`,
  },
  {
    name: "Contact",
    to: "/contact",
  },
  {
    name: `Gift Cards`,
    to: `/products/gift-card/gift-card`,
  },
]
