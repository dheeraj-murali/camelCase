import {
  Avatar,
  Box,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { SimpleCard, TestimonialCard } from "../../components"

export const Testimonial = () => {
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
      alignItems="left"
      justifyContent="center"
      bgColor="red.400"
    >
      <Heading as="h2" size="xl">
        Our students love us
      </Heading>

      <Wrap my="20" spacing="10px" align="center" justify="space-between">
        <WrapItem>
          <TestimonialCard />
        </WrapItem>
        <WrapItem>
          <TestimonialCard />
        </WrapItem>
        <WrapItem>
          <TestimonialCard />
        </WrapItem>
        <WrapItem>
          <TestimonialCard />
        </WrapItem>
      </Wrap>
    </Flex>
  )
}
