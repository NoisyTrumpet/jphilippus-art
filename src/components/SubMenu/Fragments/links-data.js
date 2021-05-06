import * as React from "react"
import { HiChatAlt, HiChartBar, HiPlay, HiMail } from "react-icons/hi"
import { GiBigDiamondRing, GiCrackedGlass } from "react-icons/gi"

import { AiFillSchedule } from "react-icons/ai"

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
    href: "/products/jewelry",
    title: "Jewelry",
    description: "We sell Julie Voss Jewelry",
    icon: <GiBigDiamondRing />,
    new: false,
  },
  {
    href: "#",
    title: "Art Kits",
    description: "See new additions and changes to our platform",
    icon: <BiPaint />,
  },
]
