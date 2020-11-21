import { Flex, Heading } from "@chakra-ui/react"
import React from "react"

export const Header = () => (
  <Flex
    as="header"
    w="full"
    py={{ base: "5", lg: "10" }}
    px={{ base: "5", lg: "20" }}
    alignItems="center"
    position="sticky"
  >
    <Heading as="h1" fontSize="xl" fontWeight="light">
      CamelCase.in
    </Heading>
  </Flex>
)
