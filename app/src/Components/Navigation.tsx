import React from 'react'
import { Link } from 'react-router-dom'
import { css } from '@emotion/core'

const navigation = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '56px',
  background: '#eee',
  li: {
    marginLeft: '8px',
    marginRight: '8px'
  }
})

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul css={navigation}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="Auth">Auth</Link>
        </li>
        <li>
          <Link to="Profile">Profile</Link>
        </li>
        <li>
          <Link to="Terms">Terms</Link>
        </li>
        <li>
          <Link to="Privacy">Privacy</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
