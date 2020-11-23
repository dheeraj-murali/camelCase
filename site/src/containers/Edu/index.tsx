import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Square,
  Text,
} from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import React from "react"
import { Logo } from "../../components"

export const Edu = () => {
  const data = useStaticQuery(graphql`
    query {
      edu: file(relativePath: { eq: "education.jpg" }) {
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
    <Flex as="section" w="full" p="0" bg="red.400">
      <SimpleGrid columns={{ base: 1, md: 2 }} w="full">
        <Center w="full" p="5">
          <Container>
            <Heading my="2">
              <Logo text=" ED" color="white" size={3} />
            </Heading>
            <Text mb="10">
              We teach to help our community grow with us because we believe in
              a world of opportunities held together by ideas, knowledge and
              love. Our learning programme renders an exceptional learning
              experience in an interactive and innovative way. We make you Stand
              out from the rest by enabling you to become well-versed in
              emerging technologies
            </Text>
            <Button colorScheme="gray">Know more</Button>
          </Container>
        </Center>
        <Center w="full" p="5">
          <Box
            w={{ base: "full" }}
            m={{ base: "0", md: "10" }}
            overflow="hidden"
          >
            <Img
              fluid={data.edu.childImageSharp.fluid}
              objectFit="cover"
              objectPosition="50% 50%"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
        </Center>
      </SimpleGrid>
    </Flex>
  )
}
