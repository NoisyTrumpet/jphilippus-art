import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import React from "react"
import moment from "moment"
//   import DiamondButton from "../DiamondButton/DiamondButton"

const BlogCard = props => {
  const { title, href, description, date, blogImage, featured } = props
  const themeGold = useColorModeValue(`secondary`, `gray.300`)
  const themeBlue = useColorModeValue(`primary`, `gray.300`)
  const bg = useColorModeValue(`cardBg`, `dark.cardBg`)
  if (featured) {
    return (
      <Box
        as="section"
        bg={{
          sm: { bg },
        }}
        overflow="hidden"
      >
        <Flex direction={["column", "column", "row", "row"]}>
          <Link href={href} flex="1.2">
            <Img
              maxHeight="350"
              w={`100%`}
              objectFit="cover"
              alt={title}
              src={blogImage}
            />
          </Link>
          <Flex
            direction="column"
            flex="1"
            justifyContent={`space-between`}
            px={{
              sm: "6",
            }}
            py="5"
          >
            <Box>
              <Heading
                as="h3"
                size="md"
                mb="1"
                lineHeight="base"
                color={themeGold}
              >
                <Link href={href}>{title}</Link>
              </Heading>
              <Text
                casing="uppercase"
                letterSpacing="wider"
                fontSize="xs"
                fontWeight="semibold"
                mb="6"
                color={themeBlue}
              >
                {/* {date} */}
                {moment(date).format("MMM Do YY")}
              </Text>
              <Box
                mb="3"
                dangerouslySetInnerHTML={{
                  __html: description,
                }}
              />
            </Box>
            <Button
              as={`a`}
              href={href}
              bg={themeBlue}
              color={`white`}
              maxW={`40%`}
              alignSelf={`flex-end`}
              _hover={{ bg: `secondary` }}
            >
              Read More...
            </Button>
          </Flex>
        </Flex>
      </Box>
    )
  } else {
    return (
      <Box
        as="section"
        bg={{
          sm: { bg },
        }}
        shadow={{
          sm: "base",
        }}
        overflow="hidden"
        transition="all 0.2s"
        _hover={{
          shadow: {
            sm: "lg",
          },
        }}
      >
        <Flex direction="column">
          <Link href={href}>
            <Img
              maxHeight="60"
              w={`100%`}
              objectFit="cover"
              alt={title}
              src={blogImage}
            />
          </Link>
          <Flex
            direction="column"
            justifyContent={`space-between`}
            px={{
              sm: "6",
            }}
            py="5"
          >
            <Box>
              <Heading
                as="h3"
                size="md"
                mb="1"
                lineHeight="base"
                color={themeGold}
              >
                <Link href={href}>{title}</Link>
              </Heading>
              <Text
                casing="uppercase"
                letterSpacing="wider"
                fontSize="xs"
                fontWeight="semibold"
                mb="3"
                color={themeBlue}
              >
                {/* {date} */}
                {moment(date).format("MMM Do YY")}
              </Text>
              <Box
                mb="3"
                dangerouslySetInnerHTML={{
                  __html: description,
                }}
              />
            </Box>
            <Button
              as={`a`}
              href={href}
              bg={themeBlue}
              color={`white`}
              maxW={`40%`}
              alignSelf={`flex-end`}
              _hover={{ bg: `secondary` }}
            >
              Read More...
            </Button>
          </Flex>
        </Flex>
      </Box>
    )
  }
}

export default BlogCard
