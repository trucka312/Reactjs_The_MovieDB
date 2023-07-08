import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const useScrollTop = () => {
  const curPosition = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [curPosition])
  return null
}
export default useScrollTop
