import { FluidObject } from "gatsby-image"

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
