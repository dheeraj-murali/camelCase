import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react"
import React from "react"
import { Logo } from "../../components"

const date = new Date()
const year = date.getFullYear()

export const Footer = () => {
  return (
    <Flex
      flexDir={{ base: "column", lg: "row" }}
      as="footer"
      py={{ base: "10", lg: "10" }}
      px={{ base: "5", lg: "10" }}
      bg="blue.900"
      justifyContent="space-between"
    >
      <Box color="red.500">
        <Logo color="white" text=".in" />
      </Box>

      <VStack color="white" align="left" py={{ base: "10", lg: "0" }}>
        <Text fontSize="xs">
          © {year} camelcase tech labs Ptv. Ltd. All rights reserved.
        </Text>
        <Text fontSize="xs">
          Designed and developed by{" "}
          <Link isExternal href="https://dheerajmurali.com">
            @_mdrj
          </Link>
        </Text>
      </VStack>
    </Flex>
  )
}
