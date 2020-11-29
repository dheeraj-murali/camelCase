import { FormValues } from "../types/props"

export const encode = (data: FormValues) => {
  return Object.keys(data)
    .map(key => {
      // @ts-ignore
      return encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
    })
    .join("&")
}
