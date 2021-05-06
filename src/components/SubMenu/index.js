import {
  Box,
  Flex,
  HStack,
  SlideFade,
  Text,
  useBoolean,
  useColorModeValue as mode,
} from "@chakra-ui/react"
import * as React from "react"
import { HiChevronDown } from "react-icons/hi"
import { links } from "./Fragments/links-data"
import MenuItem from "./Fragments/MenuItem"

const SubMenu = ({ title }) => {
  const [show, { toggle }] = useBoolean(false)
  return (
    <Box as="div" pos="relative" height="fit-content" overflow="visible">
      <Box maxW="7xl" py="6">
        <HStack
          as="button"
          color={mode("gray.600", "gray.400")}
          onClick={() => {
            toggle()
          }}
        >
          <Text textTransform="uppercase">{title || `Shop`}</Text>
          <Box as={HiChevronDown} fontSize="lg" color="gray.500" />
        </HStack>
        <Box
          as={SlideFade}
          in={show}
          pos="absolute"
          zIndex={99}
          top="16"
          bg={mode("white", "gray.700")}
          pt="2"
          w="4xl"
          maxW="lg"
          rounded="lg"
          overflow="visible"
          shadow="xl"
        >
          <Box as="ul" listStyleType="none" px="2" pb="2">
            {links.map((link, idx) => (
              <Box as="li" key={idx}>
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
          <Flex
            align="center"
            justify="space-between"
            px="6"
            py="6"
            bg={mode("blue.50", "#324a65")}
          >
            <Box>
              <Text fontWeight="semibold">Book an Envelope demo today!</Text>
              <Text fontSize="sm" color={mode("gray.600", "gray.400")}>
                Discover & access advanced features
              </Text>
            </Box>
            <Box color={mode("blue.600", "blue.300")} fontWeight="semibold">
              Get a live demo
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}

export default SubMenu
