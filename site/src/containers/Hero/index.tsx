import { Flex, Heading, Text } from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { ImageStack } from "../../components"

export const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "Hero.png" }) {
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
        <Heading size="2xl">
          High quality applications ready for production{" "}
          <Text as="span" color="red.500">
            in no time.
          </Text>
        </Heading>
        <Text py="5">Reimagine . Reinvent . Recreate</Text>
      </Flex>

      <ImageStack />
    </Flex>
  )
}
