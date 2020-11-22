import { Flex, Heading, Wrap, WrapItem } from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { SimpleCard } from "../../components"

export const Services = () => {
  const data = useStaticQuery(graphql`
    query {
      mobile: file(relativePath: { eq: "mobile-development.jpg" }) {
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

      branding: file(relativePath: { eq: "branding.jpg" }) {
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

      planning: file(relativePath: { eq: "planning.jpg" }) {
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
      bgColor="gray.200"
    >
      <Heading as="h2" size="2xl">
        What else we do?
      </Heading>

      <Wrap my="20" spacing="30px" align="center" justify="center">
        <WrapItem>
          <SimpleCard
            title="Mobile app development"
            text="Android or iOS, we make amazing apps that work on any screens!"
            fluid={data.mobile.childImageSharp.fluid}
            flip
          />
        </WrapItem>
        <WrapItem>
          <SimpleCard
            title="Branding"
            text="We'll help you reach the ❤ s of a Million users!"
            fluid={data.branding.childImageSharp.fluid}
            flip
          />
        </WrapItem>
        <WrapItem>
          <SimpleCard
            title="Strategic planning"
            text="We are here to take your company to success, through the roads you've less traveled."
            fluid={data.planning.childImageSharp.fluid}
            flip
          />
        </WrapItem>
      </Wrap>
    </Flex>
  )
}
