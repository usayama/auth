import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { css } from '@emotion/core'
import SignOut from 'Auth/Components/SignOut'
import { UserContext } from 'contexts'

const style = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '56px',
  padding: '0 24px',
  color: '#fff',
  background: '#666'
})

const styleButton = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid #fff',
  borderRadius: '2px',
  width: '96px',
  height: '32px',
  fontSize: '14px',
  '&:focus': {
    outline: 'none'
  }
})

const Header: React.FC = () => {
  const user = useContext(UserContext).user
  const icon = user?.photoURL ?? user?.photoURL
  return (
    <header css={style}>
      <h1>
        <Link to="/">Underflow</Link>
      </h1>
      <ul className="flex items-center">
        {user && !user.isAnonymous ? (
          <li className="flex items-center">
            <img className="rounded" src={icon || undefined} alt="" width="32" />
            <div className="ml-2 text-sm">{user?.email}</div>
          </li>
        ) : null}
        <li className="ml-4">
          {!user ? (
            <Link to="SignIn">
              <span css={styleButton}>ログイン</span>
            </Link>
          ) : (
            <SignOut />
          )}
        </li>
      </ul>
    </header>
  )
}

export default Header
