import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { auth } from '../firebase'
import { UserContext } from 'contexts'

export const useSignOut = () => {
  const user = useContext(UserContext).user
  const history = useHistory()

  return () => {
    if (user?.isAnonymous) {
      auth.currentUser?.delete().catch(error => {
        console.log(error.log)
        console.log(error.message)
      })
    } else {
      auth
        .signOut()
        .then(() => {
          history.push('SignIn')
        })
        .catch(error => {
          console.log(error.log)
          console.log(error.message)
        })
    }
  }
}

const SignOut: React.FC = () => {
  return <button onClick={useSignOut()}>ログアウト</button>
}

export default SignOut
