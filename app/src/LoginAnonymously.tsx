/** @jsx jsx */
import React from 'react'
import { auth } from './firebase'
import { jsx, css } from '@emotion/core'

const style = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '0 16px',
  background: '#f4b400',
  width: '100%',
  maxWidth: '220px',
  minHeight: '40px',
  border: 'none',
  color: '#fff',
  fontWeight: 'bold',
  borderRadius: '2px',
  boxShadow: '0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2)',
  outline: 'none',
  cursor: 'pointer',
  span: {
    marginLeft: '16px'
  }
})

export const loginAnonymously = () => {
  auth.signInAnonymously().catch(error => {
    console.log(error.code)
    console.log(error.message)
  })
}

export const LoginAnonymously: React.FC = () => {
  return (
    <button css={style} onClick={loginAnonymously}>
      <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/anonymous.png" width="18" height="18" alt="" />
      <span>とくめいでログイン</span>
    </button>
  )
}
