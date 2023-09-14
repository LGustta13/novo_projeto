import axios from "axios"

export const server = axios.create({
  baseURL: "https://3.134.238.10:3333",
})
