import { Avatar, Box, Heading, HStack, Text, VStack } from "@chakra-ui/react"
import React from "react"

export const TestimonialCard = () => {
  return (
    <VStack align="left" spacing="24px" bg="white" shadow="lg" p="5" w="420px">
      <HStack spacing="24px">
        <Avatar name="Dan Abrahmov" size="xl" />
        <Box w="full" h="40px">
          <Heading size="md">Student Name</Heading>
          <Text>Some dtails</Text>
        </Box>
      </HStack>

      <Text fontSize="2xs" fontWeight="light" fontStyle="italic">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In nulla nihil
        incidunt suscipit ipsam adipisci vel molestias delectus repellendus
        provident nam cupiditate quibusdam officiis ut, magnam quae sint saepe
        libero.
      </Text>
    </VStack>
  )
}
