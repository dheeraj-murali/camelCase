export const generateTitle = (
  text: string,
  highlight: string,
  color: string
) => {
  return text.replace(
    highlight,
    `<span style="color:${color}">${highlight}</span>`
  )
}
