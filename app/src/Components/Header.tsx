import React from 'react'
import { css } from '@emotion/core'

const header = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '56px',
  color: '#fff',
  background: '#666'
}

const Header: React.FC = () => {
  return <header css={header}>Header</header>
}

export default Header
