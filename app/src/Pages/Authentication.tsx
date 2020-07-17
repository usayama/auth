import React, { useContext } from 'react'
import firebase, { auth } from '../firebase'
import { UserContext } from 'contexts'
import * as firebaseui from 'firebaseui'
import { css } from '@emotion/core'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import SignInAnonymously from 'Components/SignInAnonymously'
import SignInWithGoogle from 'Components/SignInWithGoogle'
import SignInWithTwitter from 'Components/SignInWithTwitter'
import SignInWithFacebook from 'Components/SignInWithFacebook'
import SignInWithGithub from 'Components/SignInWithGithub'
import SignOut from 'Components/SignOut'

const style = css({
  textAlign: 'center'
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
    signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
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
        <ul>
          <li>
            <SignInAnonymously />
          </li>
          <li>
            <SignInWithGoogle />
          </li>
          <li>
            <SignInWithTwitter />
          </li>
          <li>
            <SignInWithFacebook />
          </li>
          <li className="mb-6">
            <SignInWithGithub />
          </li>
        </ul>
        <div>または</div>
        <div className="mt-6">
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
        </div>
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
