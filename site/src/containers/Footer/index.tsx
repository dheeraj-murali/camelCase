import { Flex, SimpleGrid, Text, VStack } from "@chakra-ui/react"
import React from "react"

export const Footer = () => {
  return (
    <Flex
      as="footer"
      py={{ base: "10", lg: "24" }}
      px={{ base: "5", lg: "20" }}
      bg="blue.900"
    >
      <VStack color="white">
        <Text>Designed and developed by @_mdrj</Text>
      </VStack>
    </Flex>
  )
}
