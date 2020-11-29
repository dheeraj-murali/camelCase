import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import React from "react"

export const CampaignModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const data = useStaticQuery(graphql`
    query {
      edu: file(relativePath: { eq: "edu/internship.jpg" }) {
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
  `)

  return (
    <>
      <Button onClick={onOpen}>View campaigns</Button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Box w={{ base: "full" }} mt="12" overflow="hidden">
              <Img
                fluid={data.edu.childImageSharp.fluid}
                objectFit="cover"
                objectPosition="50% 50%"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
