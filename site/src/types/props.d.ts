import { FluidObject } from "gatsby-image"

declare interface Title {
  text: string
  highlight: string
}
declare interface SimpleCardProps {
  title: string
  text: string
  imageName: string
  edges: any[]
  flip?: boolean
}

declare interface TeamItem {
  title: string
  subtitle: string
  imageName: string
}

declare interface TeamProps {
  title: string
  subtitle: string
  items: TeamItem[]
}

declare interface LogoProps {
  text: string
  color: string
  size: number
}

declare interface HeaderProps {
  logoExt: string
}

declare interface HeroProps {
  title: Title
  subtitle: string
}

declare interface WorkItem {
  imageName: string
  title: string
  subtitle: string
  bgColor: "primary" | "secondary"
  textColor: "black" | "white"
}

declare interface WorkProps {
  items: WorkItem[]
}

declare interface WorkBannerProps extends WorkItem {
  edges: any
}

declare interface ServiceItem {
  imageName: string
  title: string
  subtitle: string
}

declare interface ServicesProps {
  title: string
  items: ServiceItem[]
}

declare interface EduProps {
  logoExt: string
  text: string
}

declare interface Testimonial {
  image: string
  name: string
  role: string
  comment: string
}

declare interface TestimonialProps {
  title: string
  testimonials: Testimonial[]
}

declare interface TestimonialCardProps extends Testimonial {}

declare interface Address {
  line1: string
  line2: string
  pinCode: string
  state: string
  country: string
}
declare interface ContactProps {
  logoExt: string
  title: string
  address: Address
  phoneNumbers: string[]
  email: string
}

declare interface ContactFormProps {
  email: string
  title: string
}
