import { Avatar, Box, Heading, HStack, Text, VStack } from "@chakra-ui/react"
import React from "react"
import { TestimonialCardProps } from "../../types/props"
import { getSrc } from "../../utils/getSrc"

export const TestimonialCard = (props: TestimonialCardProps) => {
  const { comment, image, name, role } = props

  return (
    <VStack align="center" spacing="24px" bg="white" shadow="lg" p="5">
      <HStack spacing="24px">
        <Avatar
          name={name}
          size="lg"
          src={`../../assets/images/EDTesimonial/${image}.jpg`}
        />
        <Box w="full" h="full">
          <Heading size="md">{name}</Heading>
          <Text fontSize="sm">{role}</Text>
        </Box>
      </HStack>

      <Text as="blockquote" fontSize="sm" fontWeight="light" fontStyle="italic">
        {comment}
      </Text>
    </VStack>
  )
}
