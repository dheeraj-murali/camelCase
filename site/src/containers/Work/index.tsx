import {
  Center,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"

export const Work = () => {
  const data = useStaticQuery(graphql`
    query {
      web: file(relativePath: { eq: "web-master.jpg" }) {
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

      framework: file(relativePath: { eq: "framework.jpg" }) {
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
    <Flex as="section" w="full" p="0">
      <SimpleGrid columns={{ base: 1, md: 2 }} w="full">
        <Center
          h="lg"
          w="full"
          bgImg={`linear-gradient(#F5656580, #F5656580), url(${data.web.childImageSharp.fluid.src})`}
          bgSize="cover"
          bgPos="center center"
          _hover={{ bg: "#F56565CC" }}
          p="5"
        >
          <Container>
            <Heading as="h2" color="blue.800" mb="10">
              The web experts.
            </Heading>
            <Text>
              We create amazing web solutions for those who need to make a mark
              in this world in the most minimal, intuitive and elegant ways. We
              make it possible for them in the easiest and affordable ways
              possible, focusing on creating high-quality, unique, and easy to
              use websites.
            </Text>
          </Container>
        </Center>
        <Center
          bg="blue.800"
          h="lg"
          w="full"
          bgImg={`linear-gradient(#2A436580, #2A436580), url(${data.framework.childImageSharp.fluid.src})`}
          bgSize="cover"
          bgPos="center center"
          _hover={{ bg: "#2A4365CC" }}
          p="5"
        >
          <Container>
            <Heading as="h2" color="red.400" mb="10">
              Framework agnostic.
            </Heading>
            <Text color="white">
              We develop using advanced frameworks with minimal footprint. We
              are ready to build using Angular, React, Ionic, Spring, Django,
              MongoDB or whatever you prefer.
            </Text>
          </Container>
        </Center>
      </SimpleGrid>
    </Flex>
  )
}
