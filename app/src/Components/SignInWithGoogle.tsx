import React from 'react'
import firebase from '../firebase'
import { css } from '@emotion/core'
import { signInWithPopup } from 'Pages/SignIn'

const style = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '0 16px',
  marginTop: '16px',
  width: '100%',
  maxWidth: '232px',
  minHeight: '40px',
  color: '#888',
  background: '#fff',
  border: 'none',
  fontSize: '13px',
  fontWeight: 'bold',
  borderRadius: '2px',
  boxShadow: '0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12)',
  outline: 'none',
  cursor: 'pointer',
  span: {
    marginLeft: '16px'
  }
})

export const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  signInWithPopup(provider)
}

const SignInWithGoogle: React.FC = () => {
  return (
    <button onClick={signInWithGoogle} css={style}>
      <img className="firebaseui-idp-icon" alt="" src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" width="18" height="18" />
      <span>Googleでログイン</span>
    </button>
  )
}

export default SignInWithGoogle
