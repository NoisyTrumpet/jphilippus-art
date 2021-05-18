import { PhoneIcon } from "@chakra-ui/icons"
import {
  Box,
  HStack,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import * as React from "react"
// import { BannerLink } from './BannerLink'

export const Announcement = () => (
  <Box as="section">
    <Stack
      direction={{
        base: "column",
        sm: "row",
      }}
      justifyContent="center"
      alignItems="center"
      py="1"
      px={{
        base: "3",
        md: "6",
        lg: "8",
      }}
      color="white"
      bg={useColorModeValue("secondary")}
    >
      <HStack spacing="3">
        <Icon as={PhoneIcon} fontSize="2xl" h="10" />
        <Text fontWeight="medium" marginEnd="2">
          Call us at <a href="tel:210.474.0440">210-474-0440</a> to book a
          private individual or group class. Open T-F 11am-6pm • Sat 11am-5pm
        </Text>
      </HStack>
      {/* <Link
        w={{
          base: 'full',
          sm: 'auto',
        }}
        flexShrink={0}
      >
        Resend email
      </Link> */}
    </Stack>
  </Box>
)

export default Announcement
