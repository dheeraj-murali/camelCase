import { Box, Heading, Text } from "@chakra-ui/react"
import React from "react"
import { CCCircle } from "../../components"
import { LogoProps } from "../../types/props"

export const Logo = (props: LogoProps) => {
  const { color, text, size = 1 } = props

  return (
    <Box position="relative" h="full" w="full">
      <CCCircle
        style={{
          width: "70px",
          height: "70px",
        }}
      />
      <Heading
        position="absolute"
        top="20px"
        left="25px"
        as="h1"
        fontSize={`2xl`}
      >
        Camelcase
        <Text as="span" color={color}>
          {text}
        </Text>
      </Heading>
    </Box>
  )
}
