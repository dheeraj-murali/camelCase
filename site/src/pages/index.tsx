import React from "react"
import {
  Contact,
  Edu,
  Footer,
  Header,
  Hero,
  SEO,
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
  } = data

  return (
    <>
      <SEO />
      <Header {...header} />
      <Hero {...hero} />
      <Team {...team} />
      {/* @ts-ignore */}
      <Work {...work} />
      <Services {...services} />
      <Edu {...edu} />
      <Testimonial {...eduTestimonial} />
      <Contact {...contact} />
      <Footer />
    </>
  )
}

export default IndexPage
