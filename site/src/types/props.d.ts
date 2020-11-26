import { FluidObject } from "gatsby-image"

declare interface Title {
  text: string
  highlight: string
}
declare interface TeamItem {
  title: string
  text: string
  fluid: FluidObject | FluidObject[]
  flip?: boolean
}

declare interface TeamProps extends TeamItem {}

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
