import { Flex, Text } from "@chakra-ui/react"
import React from "react"
// @ts-ignore
import Logo from "../../assets/images/camelcase_logo.svg"

export const Hero = () => {
  return (
    <Flex
      as="header"
      w="full"
      minH="100vh"
      py={{ base: "5", lg: "10" }}
      px={{ base: "5", lg: "20" }}
      alignItems="center"
      justifyContent="center"
      bg="black"
      color="white"
    >
      <Flex flexDir="column" alignItems="center">
        <Logo />
        <Text my="5">Reimagine . Reinvent . Recreate</Text>
      </Flex>
    </Flex>
  )
}
