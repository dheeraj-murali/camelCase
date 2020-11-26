import { Flex, Heading, Text, useToken } from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { ImageStack } from "../../components"
import { HeroProps } from "../../types/props"
import { generateTitle } from "../../utils/generateTitle"

export const Hero = (props: HeroProps) => {
  const { title, subtitle } = props

  const [highlightColor] = useToken("colors", ["red.500"])

  const data = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "hero/heroBg.png" }) {
        childImageSharp {
          fluid(quality: 80) {
            src
          }
        }
      }
    }
  `)

  return (
    <Flex
      as="section"
      w="full"
      py={{ base: "10", lg: "24" }}
      px={{ base: "5", lg: "20" }}
      alignItems="center"
      justifyContent="center"
      bgImg={`url(${data.bg.childImageSharp.fluid.src})`}
      bgSize="cover"
      bgColor="gray.200"
      wrap="wrap-reverse"
    >
      <Flex maxW="md" flexDir="column">
        <Heading
          size="2xl"
          dangerouslySetInnerHTML={{
            __html: generateTitle(title.text, title.highlight, highlightColor),
          }}
        />

        <Text py="5">{subtitle}</Text>
      </Flex>

      <ImageStack />
    </Flex>
  )
}
