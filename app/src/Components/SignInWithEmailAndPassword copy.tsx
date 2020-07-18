import React from 'react'
import { css } from '@emotion/core'

const style = css({
  input: {
    border: '1px solid #ccc',
    width: '232px',
    height: '40px',
    borderRadius: '3px'
  },
  button: {
    appearance: 'none',
    width: '144px',
    height: '40px',
    background: '#000',
    color: '#fff',
    borderRadius: '3px',
    marginTop: '24px'
  }
})

const SignInWithEmailAndPassword: React.FC = () => {
  return (
    <div css={style}>
      <p className="mb-2">メールアドレス</p>
      <input type="text" />
      <p className="mt-2 mb-2">パスワード</p>
      <input type="text" />
      <div>
        <button>登録</button>
      </div>
    </div>
  )
}

export default SignInWithEmailAndPassword
