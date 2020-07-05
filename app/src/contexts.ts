import { createContext, Dispatch } from 'react'

type UserContext = {
  user: firebase.User | null
  setUser: Dispatch<firebase.User | null>
}

export const UserContext = createContext<UserContext>({
  user: null,
  setUser: () => null
})
