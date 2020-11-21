import {
  Box,
  Center,
  Flex,
  Heading,
  Square,
  Text,
  useToken,
  Wrap,
  WrapItem,
} from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import React from "react"

export const Team = () => {
  const [gray, blue] = useToken("colors", ["gray.600", "blue.200"])

  const data = useStaticQuery(graphql`
    query {
      design: file(relativePath: { eq: "design.jpg" }) {
        childImageSharp {
          fluid(quality: 80) {
            src
            srcSet
            srcSetWebp
            srcWebp
            tracedSVG
            sizes
            originalName
            originalImg
            base64
            aspectRatio
            presentationHeight
            presentationWidth
          }
        }
      }

      developer: file(relativePath: { eq: "developer.jpg" }) {
        childImageSharp {
          fluid(quality: 80) {
            src
            srcSet
            srcSetWebp
            srcWebp
            tracedSVG
            sizes
            originalName
            originalImg
            base64
            aspectRatio
            presentationHeight
            presentationWidth
          }
        }
      }

      mentor: file(relativePath: { eq: "mentor.jpg" }) {
        childImageSharp {
          fluid(quality: 80) {
            src
            srcSet
            srcSetWebp
            srcWebp
            tracedSVG
            sizes
            originalName
            originalImg
            base64
            aspectRatio
            presentationHeight
            presentationWidth
          }
        }
      }
    }
  `)

  return (
    <Flex
      as="section"
      w="full"
      py="20"
      px={{ base: "5", lg: "20" }}
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      bgColor="red.400"
    >
      <Heading as="h2" size="2xl">
        Find the best
      </Heading>

      <Wrap my="20" spacing="30px" align="center" justify="center">
        <WrapItem>
          <Flex
            flexDir="column"
            justifyContent="space-between"
            shadow="lg"
            maxW="xs"
            h="md"
            bg="white"
            _hover={{ bg: "blue.900", color: "white" }}
          >
            <Flex flexDir="column" alignItems="center" p="5">
              <Heading size="lg" as="h3" mb="5">
                Designers
              </Heading>
              <Text textAlign="center" fontWeight="light">
                We create hand crafted artwork and Illustrations unique to your
                needs.
              </Text>
            </Flex>

            <Box w="full" h="2xs">
              <Img
                fluid={data.design.childImageSharp.fluid}
                objectFit="cover"
                objectPosition="50% 50%"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          </Flex>
        </WrapItem>
        <WrapItem>
          <Flex
            flexDir="column"
            justifyContent="space-between"
            shadow="lg"
            maxW="xs"
            h="md"
            bg="white"
            _hover={{ bg: "blue.900", color: "white" }}
          >
            <Flex flexDir="column" alignItems="center" p="5">
              <Heading size="lg" as="h3" mb="5">
                Developers
              </Heading>
              <Text textAlign="center" fontWeight="light">
                We can build your open source projects. Present you solutions,
                affordable and simple to the point.
              </Text>
            </Flex>

            <Box w="full" h="2xs">
              <Img
                fluid={data.developer.childImageSharp.fluid}
                objectFit="cover"
                objectPosition="50% 50%"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          </Flex>
        </WrapItem>
        <WrapItem>
          <Flex
            flexDir="column"
            justifyContent="space-between"
            shadow="lg"
            maxW="xs"
            h="md"
            bg="white"
            _hover={{ bg: "blue.900", color: "white" }}
          >
            <Flex flexDir="column" alignItems="center" p="5">
              <Heading size="lg" as="h3" mb="5">
                Mentors
              </Heading>
              <Text textAlign="center" fontWeight="light">
                We teach to help our community grow with us because we believe
                in a world of opportunities held together by ideas, knowledge
                and love.
              </Text>
            </Flex>
            <Box w="full" h="2xs">
              <Img
                fluid={data.mentor.childImageSharp.fluid}
                objectFit="cover"
                objectPosition="50% 50%"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          </Flex>
        </WrapItem>
      </Wrap>

      <Heading as="h2" size="xl">
        in the industry
      </Heading>
    </Flex>
  )
}
