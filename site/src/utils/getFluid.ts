import { FluidObject } from "gatsby-image"

export const getFluid = (
  edges: any[],
  image: string
): FluidObject | FluidObject[] => {
  let fluid: FluidObject | FluidObject[]

  edges.forEach(edge => {
    if (edge.node.name === image) fluid = edge.node.childImageSharp.fluid
  })

  // @ts-expect-error
  return fluid
}
