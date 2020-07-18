import React, { useContext } from 'react'
import firebase, { auth } from '../firebase'
import { UserContext } from 'contexts'
import * as firebaseui from 'firebaseui'
import { css } from '@emotion/core'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import SignInAnonymously from 'Components/SignInAnonymously'
import SignInWithGoogle, { signInWithGoogle } from 'Components/SignInWithGoogle'
import SignInWithTwitter, { signInWithTwitter } from 'Components/SignInWithTwitter'
import SignInWithFacebook, { signInWithFacebook } from 'Components/SignInWithFacebook'
import SignInWithGithub, { signInWithGithub } from 'Components/SignInWithGithub'
import SignUp from 'Components/SignUp'
import SignOut from 'Components/SignOut'

const style = css({
  textAlign: 'center'
})

export const signInWithPopup = (provider: firebase.auth.AuthProvider) => {
  auth.signInWithPopup(provider).catch(error => {
    console.log(error.code)
    console.log(error.message)
    console.log(error.email)
    console.log(error.credential)
    if (error.code === 'auth/account-exists-with-different-credential') {
      signInWithExistCredential(error)
    }
  })
}

export const signInWithRedirect = (provider: firebase.auth.AuthProvider) => {
  auth.signInWithRedirect(provider).catch(error => {
    console.log(error.code)
    console.log(error.message)
    console.log(error.email)
    console.log(error.credential)
    if (error.code === 'auth/account-exists-with-different-credential') {
      signInWithExistCredential(error)
    }
  })
}

const signInWithExistCredential = async (error: any) => {
  const providers = await auth.fetchSignInMethodsForEmail(error.email)
  const provider = providers[0]
  if (window.confirm(`${error.email}はすでに認証アカウントが存在します。以前にお使いの${provider}の認証でログインしますか？`)) {
    type signInObject = {
      [key: string]: Function
    }
    const signInObject: signInObject = {
      'google.com': signInWithGoogle,
      'twitter.com': signInWithTwitter,
      'facebook.com': signInWithFacebook,
      'github.com': signInWithGithub
    }
    const signIn = signInObject[provider]
    signIn()
  }
}

const Authentication: React.FC = () => {
  const user = useContext(UserContext).user

  const uiConfig = {
    signInSuccessUrl: '/Auth',
    signInFlow: 'popup',
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID, firebase.auth.GithubAuthProvider.PROVIDER_ID, firebase.auth.GoogleAuthProvider.PROVIDER_ID],
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
        <div className="mb-6">または</div>
        <SignUp />
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
