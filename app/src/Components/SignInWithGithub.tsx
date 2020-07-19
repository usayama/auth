import React from 'react'
import firebase from '../firebase'
import { css } from '@emotion/core'
import { signInWithPopup } from 'Pages/Auth'

const style = css({
  display: 'inline-flex',
  alignItems: 'center',
  width: '100%',
  maxWidth: '232px',
  minHeight: '40px',
  marginTop: '16px',
  padding: '0 16px',
  color: '#fff',
  background: '#333',
  fontSize: '13px',
  fontWeight: 'bold',
  borderRadius: '2px',
  appearance: 'none',
  outline: 'none',
  boxShadow: '0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12)',
  '&:active': {
    outline: 'none'
  },
  span: {
    marginLeft: '16px'
  }
})

export const signInWithGithub = () => {
  const provider = new firebase.auth.GithubAuthProvider()
  signInWithPopup(provider)
}

const SignInWithGithub: React.FC = () => {
  return (
    <button onClick={signInWithGithub} css={style}>
      <img className="firebaseui-idp-icon" alt="" src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/github.svg" width="18" height="18" />
      <span>Githubでログイン</span>
    </button>
  )
}

export default SignInWithGithub
