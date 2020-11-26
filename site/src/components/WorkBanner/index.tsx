import { Center, Container, Heading, Text, useToken } from "@chakra-ui/react"
import React from "react"
import { WorkBannerProps } from "../../types/props"
import { getSrc } from "../../utils/getSrc"

export const WorkBanner = (props: WorkBannerProps) => {
  const { edges, imageName, subtitle, title, bgColor, textColor } = props

  const [primary, secondary] = useToken("colors", ["red.400", "blue.900"])

  const colors = { primary, secondary }

  const getContrast = (color: "primary" | "secondary") => {
    switch (color) {
      case "primary":
        return "secondary"
      case "secondary":
        return "primary"
      default:
        return "primary"
    }
  }

  return (
    <Center
      h="lg"
      w="full"
      bgImg={`linear-gradient(${colors[bgColor]}80, ${
        colors[bgColor]
      }80), url(${getSrc(edges, imageName)})`}
      bgSize="cover"
      bgPos="center center"
      _hover={{ bg: `${colors[bgColor]}CC` }}
      p="5"
    >
      <Container>
        <Heading as="h2" color={colors[getContrast(bgColor)]} mb="10">
          {title}
        </Heading>
        <Text color={textColor}>{subtitle}</Text>
      </Container>
    </Center>
  )
}
