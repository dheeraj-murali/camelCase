import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Logo } from "../../components"

export const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "contact.jpg" }) {
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
      <VStack spacing={4}>
        <FormControl id="name" isRequired>
          <Input
            placeholder="Your name"
            type="text"
            bg="white"
            errorBorderColor="red.300"
          />
        </FormControl>
        <FormControl id="email" isRequired>
          <Input
            placeholder="Your email address"
            type="email"
            bg="white"
            errorBorderColor="red.300"
          />
          <FormHelperText color="white">
            We'll never share your email.
          </FormHelperText>
        </FormControl>
        <FormControl id="phone">
          <Input
            placeholder="Your phone number"
            type="phone"
            bg="white"
            errorBorderColor="red.300"
          />
        </FormControl>
        <FormControl id="message">
          <Textarea
            placeholder="Your message"
            resize="vertical"
            bg="white"
            rounded="lg"
          />
        </FormControl>
        <Button>Send message</Button>
      </VStack>
      <VStack align="left" pl="10">
        <Heading color="blue.900">
          <Logo text=" tech labs" color="white" size={3} />
        </Heading>
        <Text fontWeight="bold" color="white">
          Lorem ipsum dolor sit amet.
        </Text>
        <Text fontWeight="bold" color="white">
          consectetur adipisicing elit.
        </Text>
        <Text fontWeight="bold" color="white">
          Kochi, Kerala
        </Text>
        <Text fontWeight="bold" color="white">
          683426
        </Text>
        <Text pt="5">0981267155</Text>
        <Text>0981267153</Text>
      </VStack>
    </SimpleGrid>
  )
}
