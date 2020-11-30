import { Flex, SimpleGrid } from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { v4 as uuid } from "uuid"
import { WorkBanner } from "../../components"
import { WorkProps } from "../../types/props"

export const Work = (props: WorkProps) => {
  const { items } = props

  const data = useStaticQuery(graphql`
    query {
      background: allFile(
        filter: {
          extension: { regex: "/(jpg)/" }
          relativePath: { regex: "/(work)/" }
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
    <Flex as="section" id="work" w="full" p="0">
      <SimpleGrid columns={{ base: 1, md: 2 }} w="full">
        {items.map(item => (
          <WorkBanner
            key={uuid()}
            edges={data.background.edges}
            imageName={item.imageName}
            subtitle={item.subtitle}
            title={item.title}
            bgColor={item.bgColor}
            textColor={item.textColor}
          />
        ))}
      </SimpleGrid>
    </Flex>
  )
}
