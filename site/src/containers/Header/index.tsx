import { Flex } from "@chakra-ui/react"
import React from "react"
import { Logo } from "../../components"
import { HeaderProps } from "../../types/props"

export const Header = (props: HeaderProps) => {
  const { logoExt } = props

  return (
    <Flex
      as="header"
      w="full"
      py="5"
      px={{ base: "5", lg: "20" }}
      alignItems="center"
      position="absolute"
    >
      <Logo text={logoExt} color="red.500" size={2} />
    </Flex>
  )
}
