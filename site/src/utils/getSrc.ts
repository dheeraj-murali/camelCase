export const getSrc = (edges: any[], image: string): string => {
  let src: string

  edges.forEach(edge => {
    if (edge.node.name === image) src = edge.node.childImageSharp.fluid.src
  })

  // @ts-expect-error
  return src
}
