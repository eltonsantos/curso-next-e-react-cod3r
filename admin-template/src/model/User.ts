import { ReactNode } from "react"

export default interface User {
  uid: string | null
  email: string | null
  name: string | null
  token: string | null
  provider: ReactNode
  imageUrl: string
}