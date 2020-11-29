import {
  Button,
  FormControl,
  FormHelperText,
  Heading,
  Input,
  SimpleGrid,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react"
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
      <VStack align="left" pl="10">
        <Heading>
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
          {address.pinCode}
        </Text>
        {phoneNumbers.map(number => (
          <Text key={uuid()} pt="5" fontWeight="bold" color="white">
            {number}
          </Text>
        ))}
      </VStack>
    </SimpleGrid>
  )
}
