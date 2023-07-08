import { useEffect, useRef, useState } from 'react'

const useScrollNav = () => {
  const headerRef = useRef(null)
  const [position, setPosition] = useState(window.scrollY)
  useEffect(() => {
    const handleScroll = () => {
      let scrollYTop = window.scrollY
      if (scrollYTop > position && scrollYTop > 64) {
        headerRef.current.style.top = '-64px'
      } else headerRef.current.style.top = '0px'
      setPosition(scrollYTop)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [position])
  return { headerRef }
}

export default useScrollNav
