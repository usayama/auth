import React, { useContext } from 'react'
import { auth } from './firebase'
import { UserContext } from 'contexts'

const useSignOut = (user: any) => {
  // 匿名ユーザーは削除してサインアウト
  if (user && user.isAnonymous) {
    auth.currentUser?.delete().catch(error => {
      console.log(error.code)
      console.log(error.message)
    })
    return true
  } else {
    // 他は普通にサインアウト
    auth.signOut()
    return true
  }
}

const Logout: React.FC = () => {
  const user = useContext(UserContext).user
  const signOut = useSignOut(user)
  return <button onClick={signOut}>ログアウト</button>
}

export default Logout
