import { Box, Flex, Stack } from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import React from "react"

export const ImageStack = () => {
  const data = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "hero1.jpg" }) {
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

      img2: file(relativePath: { eq: "hero2.jpg" }) {
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

      img3: file(relativePath: { eq: "hero3.jpg" }) {
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
    <Flex wrap="wrap" my={{ base: "12" }} alignItems="center">
      <Box
        w={{ base: "full", md: "sm" }}
        h={{ base: "2xs", md: "sm" }}
        my="5"
        bg="gray.500"
        rounded="lg"
        overflow="hidden"
      >
        <Img
          fluid={data.img1.childImageSharp.fluid}
          objectFit="cover"
          objectPosition="50% 50%"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
      <Stack
        direction={["row", "column"]}
        spacing="5"
        ml={{ base: "0", md: "5" }}
      >
        <Box
          w={{ base: "100px", md: "150px" }}
          h={{ base: "100px", md: "150px" }}
          bg="gray.500"
          rounded="lg"
          overflow="hidden"
        >
          <Img
            fluid={data.img2.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
        <Box
          w={{ base: "150px", md: "2xs" }}
          h={{ base: "150px", md: "2xs" }}
          bg="green.500"
          rounded="lg"
          overflow="hidden"
        >
          <Img
            fluid={data.img3.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
      </Stack>
    </Flex>
  )
}
