import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase'
import { css } from '@emotion/core'
import { styleAuthForm } from 'Auth/Styles/styles'

const style = css(styleAuthForm, {
  h1: {
    marginBottom: '24px',
    fontSize: '20px',
    textAlign: 'center'
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
        <input type="email" name="email" autoComplete="email" placeholder="メールアドレスを入力" value={email} onChange={event => setEmail(event.target.value)} />
        <div>
          <button type="submit">再設定用リンクを送信</button>
        </div>
        <p className="mt-4 text-center">
          <Link to="/SignIn">ログイン</Link>
        </p>
      </form>
    </div>
  )
}

export default PasswordReset
