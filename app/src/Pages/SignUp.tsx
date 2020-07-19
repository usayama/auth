import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../firebase'
import { css } from '@emotion/core'

const style = css({
  width: '100%',
  maxWidth: '232px',
  margin: '0 auto',
  padding: '16px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  background: '#f8f8f8',
  label: {
    display: 'block',
    marginBottom: '8px',
    fontSize: '14px'
  },
  input: {
    border: '1px solid #ccc',
    width: '100%',
    height: '40px',
    borderRadius: '2px',
    padding: '0 0 0 12px'
  },
  button: {
    appearance: 'none',
    width: '100%',
    height: '40px',
    background: '#000',
    color: '#fff',
    borderRadius: '3px',
    marginTop: '24px'
  },
  p: {
    marginTop: '16px',
    fontSize: '14px',
    textAlign: 'center',
    a: {
      textDecoration: 'underline'
    }
  }
})

const SignUp: React.FC = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const createUserWithEmailAndPassword = (event: any) => {
    event.preventDefault()
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        console.log(response)
        history.push('/')
      })
      .catch(error => {
        console.log(error.code)
        console.log(error.message)
      })
  }

  return (
    <div css={style}>
      <form onSubmit={createUserWithEmailAndPassword}>
        <div>
          <label>メールアドレス</label>
          <input type="email" placeholder="you@example.com" value={email} onChange={event => setEmail(event.target.value)} />
        </div>
        <div className="mt-2">
          <label>パスワード</label>
          <input type="password" placeholder="パスワード" value={password} onChange={event => setPassword(event.target.value)} />
        </div>
        <div>
          <button type="submit">新規登録</button>
        </div>
        <p>
          <Link to="Auth">ログインページへ</Link>
        </p>
      </form>
    </div>
  )
}

export default SignUp
