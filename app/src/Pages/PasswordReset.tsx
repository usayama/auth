import React, { useState } from 'react'
import { auth } from '../firebase'
import { css } from '@emotion/core'

const style = css({
  h1: {
    marginBottom: '24px',
    fontSize: '20px',
    textAlign: 'center'
  },
  form: {
    width: '100%',
    maxWidth: '232px',
    margin: '0 auto',
    padding: '16px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    background: '#f8f8f8'
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontSize: '14px'
  },
  input: {
    border: '1px solid #ccc',
    width: '100%',
    height: '40px',
    borderRadius: '3px',
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

const PasswordReset: React.FC = () => {
  const [email, setEmail] = useState('')

  const unko = (event: any) => {
    event.preventDefault()
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        alert(`${email}宛にメールを送信しました。メール内のリンクからパスワードを再設定してください。`)
      })
      .catch(error => {
        switch (error.code) {
          case 'auth/invalid-email':
            alert('有効なメールアドレスではありません。')
            break
          case 'auth/user-not-found':
            alert('このメールアドレスのユーザーは存在しません。')
            break
          default:
            alert('サービス側が原因のエラーです。')
            console.log(error.code)
            console.log(error.message)
            break
        }
      })
  }

  return (
    <div css={style}>
      <h1>パスワード再設定</h1>
      <form onSubmit={unko}>
        <label>メールアドレス</label>
        <input type="email" placeholder="メールアドレスを入力" value={email} onChange={event => setEmail(event.target.value)} />
        <div>
          <button type="submit">再設定用リンクを送信</button>
        </div>
      </form>
    </div>
  )
}

export default PasswordReset
