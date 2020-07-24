import React from 'react'
import firebase from '../../firebase'
import { css } from '@emotion/core'
import { useSignInWithPopup } from 'Auth/Pages/SignIn'
import { styleSignInButton } from 'Auth/Styles/styles'

const style = css(styleSignInButton, {
  color: '#fff',
  background: '#55acee',
  fontWeight: 'bold'
})

export const useSignInWithTwitter = () => {
  const provider = new firebase.auth.TwitterAuthProvider()
  return useSignInWithPopup(provider)
}

const SignInWithTwitter: React.FC = () => {
  return (
    <button onClick={useSignInWithTwitter()} css={style}>
      <img className="firebaseui-idp-icon" alt="" src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/twitter.svg" width="18" height="18"></img>
      <span>Twitterでログイン</span>
    </button>
  )
}

export default SignInWithTwitter
