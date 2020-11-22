import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import { motion } from "framer-motion"
import Img from "gatsby-image/withIEPolyfill"
import React from "react"
import { TeamProps } from "../../types/props"

export const TeamCard = (props: TeamProps) => {
  const { fluid, text, title } = props

  return (
    <Flex
      as={motion.div}
      flexDir="column"
      justifyContent="space-between"
      shadow="lg"
      maxW="xs"
      h="md"
      bg="white"
      _hover={{ bg: "blue.900", color: "white" }}
      whileHover={{ scale: 1.1 }}
    >
      <Flex flexDir="column" alignItems="center" p="5">
        <Heading size="lg" as="h3" mb="5">
          {title}
        </Heading>
        <Text textAlign="center" fontWeight="light">
          {text}
        </Text>
      </Flex>

      <Box w="full" h="2xs">
        <Img
          fluid={fluid}
          objectFit="cover"
          objectPosition="50% 50%"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
    </Flex>
  )
}
