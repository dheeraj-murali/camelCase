import { Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { v4 as uuid } from "uuid"
import { ContactForm, Logo } from "../../components"
import { ContactProps } from "../../types/props"

export const Contact = (props: ContactProps) => {
  const { title, logoExt, address, email, phoneNumbers } = props

  const data = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "contact/background.jpg" }) {
        childImageSharp {
          fluid(quality: 80) {
            src
          }
        }
      }
    }
  `)

  return (
    <SimpleGrid
      as="section"
      columns={{ base: 1, lg: 2 }}
      spacing="40px"
      py={{ base: "10", lg: "24" }}
      px={{ base: "5", lg: "20" }}
      bgImg={`linear-gradient(#2A436580, #2A436580), url(${data.bg.childImageSharp.fluid.src})`}
      bgSize="cover"
      bgPos="center"
    >
      <ContactForm email={email} title={title} />

      <VStack align="left" w="full" pl={{ lg: "20" }}>
        <Heading w="full">
          <Logo text={logoExt} color="white" size={3} />
        </Heading>
        <Text fontWeight="bold" color="white">
          {address.line1}
        </Text>
        <Text fontWeight="bold" color="white">
          {address.line2}
        </Text>
        <Text fontWeight="bold" color="white">
          {`${address.state}, ${address.country}`}
        </Text>
        <Text fontWeight="bold" color="white">
          PIN {address.pinCode}
        </Text>
        {phoneNumbers.map(number => (
          <Text fontWeight="bold" key={uuid()} color="white">
            {number}
          </Text>
        ))}
      </VStack>
    </SimpleGrid>
  )
}
