import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollTop = () => {
  const { pathname } = useLocation()

  // パス変更時に画面トップへスクロール
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default ScrollTop
