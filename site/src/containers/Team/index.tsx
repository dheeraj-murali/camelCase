import { Flex, Heading, Wrap, WrapItem } from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { TeamCard } from "../../components"

export const Team = () => {
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
          <TeamCard
            title="Designers"
            text="We create hand crafted artwork and Illustrations unique to your
                needs."
            fluid={data.design.childImageSharp.fluid}
          />
        </WrapItem>
        <WrapItem>
          <TeamCard
            title="Developers"
            text="We can build your open source projects. Present you solutions,
            affordable and simple to the point."
            fluid={data.developer.childImageSharp.fluid}
          />
        </WrapItem>
        <WrapItem>
          <TeamCard
            title="Mentors"
            text="We teach to help our community grow with us because we believe
            in a world of opportunities held together by ideas, knowledge
            and love."
            fluid={data.mentor.childImageSharp.fluid}
          />
        </WrapItem>
      </Wrap>

      <Heading as="h2" size="xl">
        in the industry
      </Heading>
    </Flex>
  )
}
