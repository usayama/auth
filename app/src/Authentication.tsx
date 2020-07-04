import React, { Dispatch } from 'react'
import firebase, { auth } from './firebase'

type AuthenticationProps = {
  user: firebase.User | null
  setUser: Dispatch<firebase.User | null>
}

const Authentication: React.FC<AuthenticationProps> = props => {
  async function callbackSignIn(provider: firebase.auth.AuthProvider) {
    if (props.user) {
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
    props.setUser(null)
  }

  if (!props.user) {
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
