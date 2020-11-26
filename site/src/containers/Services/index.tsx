import { Flex, Heading, Wrap, WrapItem } from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { v4 as uuid } from "uuid"
import { SimpleCard } from "../../components"
import { ServicesProps } from "../../types/props"

export const Services = (props: ServicesProps) => {
  const { items, title } = props

  const data = useStaticQuery(graphql`
    query {
      images: allFile(
        filter: {
          extension: { regex: "/(jpg)/" }
          relativePath: { regex: "/(services)/" }
        }
      ) {
        edges {
          node {
            name
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
        {title}
      </Heading>

      <Wrap my="20" spacing="30px" align="center" justify="center">
        {items.map(item => (
          <WrapItem key={uuid()}>
            <SimpleCard
              title={item.title}
              text={item.subtitle}
              edges={data.images.edges}
              imageName={item.imageName}
              flip
            />
          </WrapItem>
        ))}
      </Wrap>
    </Flex>
  )
}
