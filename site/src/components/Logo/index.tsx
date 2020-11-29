import { Flex, Heading, Text } from "@chakra-ui/react"
import React from "react"
import { CCCircle } from "../../components"
import { LogoProps } from "../../types/props"

export const Logo = (props: LogoProps) => {
  const { color, text } = props

  return (
    <Flex alignItems="center" position="relative" h="full" w="full">
      <CCCircle
        style={{
          width: "80px",
          height: "80px",
        }}
      />
      <Heading position="absolute" left="10px" as="h1" fontSize={`2xl`} p="1">
        Camelcase
        <Text as="span" color={color}>
          {text}
        </Text>
      </Heading>
    </Flex>
  )
}
