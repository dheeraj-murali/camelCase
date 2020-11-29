import {
  Button,
  FormControl,
  FormHelperText,
  Heading,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react"
import React from "react"
import { ContactFormProps } from "../../types/props"

export const ContactForm = (props: ContactFormProps) => {
  const { title, email } = props

  return (
    <VStack spacing={4}>
      <Heading color="white">{title}</Heading>

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
  )
}
