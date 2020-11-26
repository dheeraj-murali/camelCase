import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import { motion } from "framer-motion"
import Img from "gatsby-image/withIEPolyfill"
import React from "react"
import { SimpleCardProps } from "../../types/props"
import { getFluid } from "../../utils/getFluid"

export const SimpleCard = (props: SimpleCardProps) => {
  const { edges, text, title, flip, imageName } = props

  return (
    <Flex
      as={motion.div}
      flexDir={flip ? "column-reverse" : "column"}
      justifyContent="space-between"
      shadow="lg"
      maxW="xs"
      h="md"
      bg="white"
      _hover={{ bg: "blue.900", color: "white" }}
      whileHover={{ scale: 1.1 }}
    >
      <Flex
        flexDir="column"
        alignItems="center"
        justifyContent="space-around"
        p="5"
        h="full"
      >
        <Heading size="lg" as="h3" mb="5" textAlign="center">
          {title}
        </Heading>
        <Text textAlign="center" fontWeight="light">
          {text}
        </Text>
      </Flex>

      <Box w="full" h="2xs">
        <Img
          fluid={getFluid(edges, imageName)}
          objectFit="cover"
          objectPosition="50% 50%"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
    </Flex>
  )
}
