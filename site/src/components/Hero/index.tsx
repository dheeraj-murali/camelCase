import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"

export const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "Hero.png" }) {
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
      bgImg={`url(${data.file.childImageSharp.fluid.src})`}
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
      <Flex wrap="wrap" mt={{ base: "12" }}>
        <Box
          w={{ base: "full", md: "sm" }}
          h={{ base: "2xs", md: "sm" }}
          my="5"
          bg="gray.500"
          rounded="lg"
        >
          big
        </Box>
        <Flex flexDir={{ base: "row", md: "column" }}>
          <Box
            w={{ base: "100px", md: "150px" }}
            h={{ base: "100px", md: "150px" }}
            ml={{ base: "0", md: "5" }}
            my="5"
            bg="gray.500"
            rounded="lg"
          ></Box>
          <Box
            w={{ base: "150px", md: "2xs" }}
            h={{ base: "150px", md: "2xs" }}
            ml="5"
            my="5"
            bg="green.500"
            rounded="lg"
          ></Box>
        </Flex>
      </Flex>
    </Flex>
  )
}
