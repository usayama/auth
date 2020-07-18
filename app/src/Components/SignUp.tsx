import React, { useState } from 'react'
import { auth } from '../firebase'
import { css } from '@emotion/core'

const style = css({
  input: {
    border: '1px solid #ccc',
    width: '232px',
    height: '40px',
    borderRadius: '3px',
    padding: '0 0 0 12px'
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

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const createUserWithEmailAndPassword = async () => {
    await auth.createUserWithEmailAndPassword(email, password).catch(error => {
      console.log(error.code)
      console.log(error.message)
    })
  }

  return (
    <div css={style}>
      <form>
        <p className="mb-2">メールアドレス</p>
        <input type="email" placeholder="you@example.com" value={email} onChange={event => setEmail(event.target.value)} />
        <p className="mt-2 mb-2">パスワード</p>
        <input type="password" placeholder="パスワード" value={password} onChange={event => setPassword(event.target.value)} />
        <div>
          <button type="submit" onClick={createUserWithEmailAndPassword}>
            新規登録
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignUp
