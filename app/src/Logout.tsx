import React, { useContext } from 'react'
import { auth } from './firebase'
import { UserContext } from 'contexts'

export const useLogout = () => {
  const user = useContext(UserContext).user

  return () => {
    if (user?.isAnonymous) {
      auth.currentUser?.delete().catch(error => {
        console.log(error.log)
        console.log(error.message)
      })
    } else {
      auth.signOut()
    }
  }
}

const Logout: React.FC = () => {
  return <button onClick={useLogout()}>ログアウト</button>
}

export default Logout
