import React, { useContext } from 'react'
import firebase, { auth } from '../firebase'
import { UserContext } from 'contexts'
import * as firebaseui from 'firebaseui'
import { css } from '@emotion/core'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import SignInAnonymously from 'Components/SignInAnonymously'
import SignInWithGoogle from 'Components/SignInWithGoogle'
import SignOut from 'Components/SignOut'

const style = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '284px',
  margin: '0 auto',
  padding: '32px 0 17px',
  borderRadius: '8px'
})

export const signInWithPopup = (provider: firebase.auth.AuthProvider) => {
  auth.signInWithPopup(provider).catch(error => {
    console.log(error.log)
    console.log(error.message)
  })
}

const Authentication: React.FC = () => {
  const user = useContext(UserContext).user

  const uiConfig = {
    signInSuccessUrl: '/Auth',
    signInFlow: 'popup',
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    signInOptions: [
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResult: (authResult: firebase.auth.UserCredential) => {
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

  if (!user) {
    return (
      <div css={style}>
        <SignInAnonymously />
        <SignInWithGoogle />
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
      </div>
    )
  } else {
    return (
      <div>
        <SignOut />
      </div>
    )
  }
}

export default Authentication
