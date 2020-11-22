import { FluidObject } from "gatsby-image"

declare interface TeamItem {
  title: string
  text: string
  fluid: FluidObject | FluidObject[]
  flip?: boolean
}

declare interface TeamProps extends TeamItem {}
