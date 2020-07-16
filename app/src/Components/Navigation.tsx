import React from 'react'
import { Link } from 'react-router-dom'
import { css } from '@emotion/core'

const style = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '56px',
  background: '#eee',
  li: {
    marginLeft: '16px',
    marginRight: '16px'
  }
})

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul css={style}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="Profile">Profile</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
