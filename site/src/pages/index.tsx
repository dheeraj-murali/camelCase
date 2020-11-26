import React from "react"
import {
  Contact,
  Edu,
  Footer,
  Header,
  Hero,
  Services,
  Team,
  Testimonial,
  Work,
} from "../containers"
import data from "../content/data.json"

const IndexPage = () => {
  const {
    header,
    hero,
    team,
    work,
    services,
    edu,
    eduTestimonial,
    contact,
    footer,
  } = data

  return (
    <>
      <Header {...header} />
      <Hero {...hero} />
      <Team {...team} />
      {/* @ts-ignore */}
      <Work {...work} />
      <Services {...services} />
      <Edu />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  )
}

export default IndexPage
