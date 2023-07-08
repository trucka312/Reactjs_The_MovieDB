import { Fragment, useState, useRef } from 'react'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import { Link } from 'react-router-dom'
import NotificationsIcon from '@mui/icons-material/Notifications'
import SearchIcon from '@mui/icons-material/Search'
import { Avatar } from '@mui/material'
import { v4 as uuidv4 } from 'uuid'
import { useScrollNav } from 'hooks'
import { NAV_INFO, NAV_LIST } from 'constants/navLists'
import { AVATAR_STYLES, ICON_STYLES } from 'constants/muiStylesIcon-Ava'
import AvaIcon from '../../assets/image/ava.jpg'
import MobileHeaderIcon from '../../assets/image/MobileHeader.svg'

const MobileHeader = () => {
  const [selected, setSelected] = useState([])
  const navRef = useRef(null)
  const { headerRef } = useScrollNav()
  const toggleNavItem = (id) => {
    setSelected((prev) => {
      if (selected.includes(id)) return selected.filter((item) => item !== id)
      return [...prev, id]
    })
  }
  const toggleDisplayNav = () => {
    if (navRef.current.style.left === '0px') navRef.current.style.left = '-100%'
    else navRef.current.style.left = '0px'
  }
  return (
    <header className='bg-primary text-white fixed top-0 left-0 z-10 w-full h-[6.4rem] duration-300' ref={headerRef}>
      <div className='flex items-center justify-between px-[2rem] h-full'>
        <div className='cursor-pointer flex-1'>
          <MenuOutlinedIcon sx={ICON_STYLES.smIcon} onClick={toggleDisplayNav} />
        </div>
        <div className='flex-1 flex justify-center'>
          <Link to='/'>
            <img className='w-[5.5rem] h-[4rem]' src={MobileHeaderIcon} alt='logo-mobile' />
          </Link>
        </div>
        <div className='flex-1'>
          <ul className='flex items-center justify-end'>
            <li className='cursor-pointer ml-[1.5rem]'>
              <NotificationsIcon sx={ICON_STYLES.icon} />
            </li>
            <li className='cursor-pointer ml-[1.5rem]'>
              <Avatar sx={AVATAR_STYLES.ava} alt='Avatar user' src={AvaIcon} />
            </li>
            <li className='cursor-pointer ml-[1.5rem]'>
              <SearchIcon sx={ICON_STYLES.semilgIcon} />
            </li>
          </ul>
        </div>
      </div>
      <nav
        className='fixed top-[6.4rem] p-[2rem] h-full w-[90%] left-[-100%] bg-transparent-primary duration-300 z-20'
        ref={navRef}
      >
        <ul>
          {NAV_LIST.map((navItem) => (
            <Fragment key={navItem.id}>
              <li className='font-semibold capitalize' onClick={() => toggleNavItem(navItem.id)}>
                <Link to='/#' className='py-[.8rem] text-[2.4rem]'>
                  {navItem.name}
                </Link>
                {selected.includes(navItem.id) && (
                  <ul className='mb-[1.8rem]'>
                    {navItem.listitem.map((item) => (
                      <li key={uuidv4()}>{item}</li>
                    ))}
                  </ul>
                )}
              </li>
            </Fragment>
          ))}
        </ul>
        <ul className='mt-[1.8rem]'>
          {NAV_INFO.map((navItem) => (
            <Fragment key={uuidv4()}>
              <li className='capitalize py-[.5rem]'>
                <Link to='/#' className='text-[1.8rem] text-white text-opacity-60 font-semiBold'>
                  {navItem}
                </Link>
              </li>
            </Fragment>
          ))}
          <li className='mt-[2rem]'>
            <Link to='/#' className='py-[.8rem] text-[1.8rem] text-white text-opacity-60 font-semiBold'>
              Log out
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MobileHeader
