import React, { useContext } from 'react'
import firebase, { auth } from './firebase'
import { UserContext } from 'contexts'
import * as firebaseui from 'firebaseui'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

const Auth: React.FC = () => {
  const user = useContext(UserContext).user

  const uiConfig = {
    signInSuccessUrl: '/',
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    signInOptions: [
      firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResult: (authResult: firebase.auth.UserCredential) => {
        if (authResult.user?.isAnonymous) {
          return false
        }
        if (authResult.additionalUserInfo?.providerId === 'twitter.com') {
          return false
        }
        if (authResult.user?.emailVerified) {
          return false
        }
        auth.currentUser
          ?.sendEmailVerification()
          .then(() => {
            alert('登録メールを送信しました。ご確認ください。')
          })
          .catch(error => {
            console.log(error.log)
            console.log(error.message)
            alert('登録メールの送信に失敗しました。')
          })
        return false
      }
    }
  }

  const signOUt = () => {
    auth.signOut()
  }

  if (!user) {
    return (
      <div>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
      </div>
    )
  } else {
    return (
      <div>
        <button onClick={signOUt}>ログアウト</button>
      </div>
    )
  }
}

export default Auth
