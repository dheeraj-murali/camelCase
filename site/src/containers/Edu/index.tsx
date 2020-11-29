import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import React from "react"
import { CampaignModal, Logo } from "../../components"
import { EduProps } from "../../types/props"

export const Edu = (props: EduProps) => {
  const { logoExt, text } = props

  const data = useStaticQuery(graphql`
    query {
      edu: file(relativePath: { eq: "edu/education.jpg" }) {
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
            <Heading>
              <Logo text={logoExt} color="white" />
            </Heading>
            <Text my="10">{text}</Text>
            <CampaignModal />
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
