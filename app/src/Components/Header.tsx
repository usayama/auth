import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { css } from '@emotion/core'
import Logout from 'Components/Logout'
import { UserContext } from 'contexts'

const header = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '56px',
  padding: '0 32px',
  color: '#fff',
  background: '#666'
})

const Header: React.FC = () => {
  const user = useContext(UserContext).user
  return (
    <header css={header}>
      <h1>
        <Link to="/">Underflow</Link>
      </h1>
      <ul>
        <li>{!user ? <Link to="Authentication">ログイン</Link> : <Logout />}</li>
      </ul>
    </header>
  )
}

export default Header
