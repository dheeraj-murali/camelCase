import { FluidObject } from "gatsby-image"

declare interface TeamItem {
  title: string
  text: string
  fluid: FluidObject | FluidObject[]
}

declare interface TeamProps extends TeamItem {}
