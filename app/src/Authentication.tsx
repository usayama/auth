import React, { useContext } from 'react'
import firebase, { auth } from './firebase'
import { UserContext } from './contexts'

const Authentication: React.FC = () => {
  const user = useContext(UserContext).user
  const setUser = useContext(UserContext).setUser

  async function callbackSignIn(provider: firebase.auth.AuthProvider) {
    if (user) {
      return
    }
    await auth.signInWithPopup(provider).catch(error => {
      console.log(error.log)
      console.log(error.message)
    })
  }

  async function twitterSignIn() {
    const provider = new firebase.auth.TwitterAuthProvider()
    await callbackSignIn(provider)
  }

  async function signOut() {
    await auth.signOut().catch(error => {
      console.log(error.log)
      console.log(error.message)
    })
    setUser(null)
  }

  if (!user) {
    return (
      <section>
        <div>
          <button onClick={twitterSignIn}>Twitterでログイン</button>
        </div>
      </section>
    )
  } else {
    return (
      <section>
        <div>
          <button onClick={signOut}>ログアウト</button>
        </div>
      </section>
    )
  }
}

export default Authentication
