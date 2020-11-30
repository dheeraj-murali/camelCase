import { Flex, Heading, SimpleGrid } from "@chakra-ui/react"
import React from "react"
import { TestimonialCard } from "../../components"
import { TestimonialProps } from "../../types/props"
import { v4 as uuid } from "uuid"

export const Testimonial = (props: TestimonialProps) => {
  const { testimonials, title } = props

  return (
    <Flex
      as="section"
      id="testimonial"
      w="full"
      py="20"
      px={{ base: "5", lg: "20" }}
      flexDir="column"
      alignItems="left"
      justifyContent="center"
      bgColor="red.400"
    >
      <Heading as="h2" size="xl">
        {title}
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={10} mt="20">
        {testimonials.map(testimonial => (
          <TestimonialCard {...testimonial} key={uuid()} />
        ))}
      </SimpleGrid>
    </Flex>
  )
}
