import * as React from "react"
import { GiCrackedGlass } from "react-icons/gi"

import { AiFillSchedule, AiOutlineShopping } from "react-icons/ai"

import { BiPaint } from "react-icons/bi"
export const links = [
  {
    href: "/products/class",
    title: "Classes",
    description: "Book your class today",
    icon: <AiFillSchedule />,
  },
  {
    href: "/products/art",
    title: "Art",
    description: "Art by Jeanne Philippus",
    icon: <GiCrackedGlass />,
  },
  {
    href: "#",
    title: "Art Kits",
    description: "See new additions and changes to our platform",
    icon: <BiPaint />,
  },
  {
    href: "/products",
    title: "All Products",
    description: "See our entire inventory",
    icon: <AiOutlineShopping />,
    new: false,
  },
]
