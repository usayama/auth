import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'react-router-dom'

const style = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  color: '#fff',
  background: '#666',
  ul: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '56px',
    color: '#000',
    borderTop: '1px solid #ccc',
    background: '#fff',
    li: {
      margin: '0 16px'
    }
  },
  div: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '56px',
    background: '#666'
  }
})

const Footer: React.FC = () => {
  return (
    <footer css={style}>
      <ul>
        <li>
          <Link to="Terms">利用規約</Link>
        </li>
        <li>
          <Link to="Privacy">プライバシー</Link>
        </li>
      </ul>
      <div>© UnderFlow</div>
    </footer>
  )
}

export default Footer
