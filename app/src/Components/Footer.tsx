import React from 'react'
import { css } from '@emotion/core'

const footer = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '56px',
  color: '#fff',
  background: '#666'
})

const Footer: React.FC = () => {
  return <footer css={footer}>Footer</footer>
}

export default Footer
