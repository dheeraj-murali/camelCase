import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Heading,
  Input,
  Textarea,
  useToast,
  VStack,
} from "@chakra-ui/react"
import { useFormik } from "formik"
import React from "react"
import { ContactFormProps, FormValues } from "../../types/props"
import { encode } from "../../utils/encodeFrom"
import { validate } from "../../utils/validateForm"

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
}

export const ContactForm = (props: ContactFormProps) => {
  const { title, email } = props

  const toast = useToast()

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: (values, actions) => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...values }),
      })
        .then(() => {
          actions.setSubmitting(false)
          toast({
            position: "bottom-left",
            title: "Done!",
            description: "Your message send successfully.",
            status: "success",
            duration: 9000,
            isClosable: true,
          })
          actions.resetForm()
        })
        .catch(error => {
          actions.resetForm()
          toast({
            position: "bottom-left",
            title: "An error occurred.",
            description: "Unable to send message.",
            status: "error",
            duration: 9000,
            isClosable: true,
          })
        })
    },
  })

  return (
    <VStack spacing={4}>
      <Heading color="white">{title}</Heading>

      <form
        data-netlify="true"
        onSubmit={formik.handleSubmit}
        style={{ width: "100%", height: "100%" }}
        method="post"
      >
        <VStack spacing={4}>
          <FormControl
            id="name"
            isRequired
            isInvalid={Boolean(formik.touched.name && formik.errors.name)}
          >
            <Input
              id="name"
              name="name"
              placeholder="Your name"
              type="text"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              bg="white"
              errorBorderColor="red.300"
            />
            <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
          </FormControl>

          <FormControl
            id="email"
            isRequired
            isInvalid={Boolean(formik.touched.email && formik.errors.email)}
          >
            <Input
              id="email"
              name="email"
              placeholder="Your email address"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              bg="white"
              errorBorderColor="red.300"
            />
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            <FormHelperText color="white">
              We'll never share your email.
            </FormHelperText>
          </FormControl>

          <FormControl id="phone">
            <Input
              id="phone"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Your phone number"
              type="phone"
              bg="white"
              errorBorderColor="red.300"
            />
          </FormControl>

          <FormControl
            id="message"
            isRequired
            isInvalid={Boolean(formik.touched.message && formik.errors.message)}
          >
            <Textarea
              id="message"
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Your message"
              resize="vertical"
              bg="white"
              rounded="lg"
            />
            <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
          </FormControl>

          <Button isLoading={formik.isSubmitting} type="submit">
            Send message
          </Button>
        </VStack>
      </form>
    </VStack>
  )
}
