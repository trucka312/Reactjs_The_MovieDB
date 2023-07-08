import { useEffect, useState } from 'react'
import MobileHeader from './MobileHeader'
import PCHeader from './PCHeader'

const Header = () => {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768) // true
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return <div>{isMobile ? <MobileHeader /> : <PCHeader />}</div>
}

export default Header
