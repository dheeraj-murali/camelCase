import { Flex } from "@chakra-ui/react"
import React from "react"
import { Logo } from "../../components"

export const Header = () => (
  <Flex
    as="header"
    w="full"
    py="5"
    px={{ base: "5", lg: "20" }}
    alignItems="center"
    position="absolute"
  >
    <Logo text=".in" color="red.500" size={2} />
  </Flex>
)
