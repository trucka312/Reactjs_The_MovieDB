/* eslint-disable max-len */
import { Fragment } from 'react'
import { Link, useLocation } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add'
import NotificationsIcon from '@mui/icons-material/Notifications'
import SearchIcon from '@mui/icons-material/Search'
import { Avatar } from '@mui/material'
import { useScrollNav } from 'hooks'
import { HEADER_LIST } from 'constants/navLists'
import { AVATAR_STYLES, ICON_STYLES } from 'constants/muiStylesIcon-Ava'
import { MenuToolTip } from 'components/HtmlToolTips'
import { MenuList } from 'components/MenuBox'
import PCHeaderIcon from '../../assets/image/PCHeader.svg'
import AvaIcon from '../../assets/image/ava.jpg'

const PCHeader = () => {
  const location = useLocation()
  const { headerRef } = useScrollNav()
  const changeMaxWidth = location.pathname === '/' ? 'max-w-[130rem]' : 'max-w-[140rem]'
  return (
    <header className='bg-primary text-white fixed top-0 left-0 z-10 w-full h-[6.4rem] duration-300' ref={headerRef}>
      <div className={`flex justify-between items-center h-full w-full px-[4rem] mx-auto ${changeMaxWidth}`}>
        <div className='flex items-center'>
          <Link to='/' className='block h-[2rem] w-[15.4rem] mr-[1.6rem]'>
            <img src={PCHeaderIcon} alt='logo' />
          </Link>
          <ul className='flex items-center'>
            {HEADER_LIST.map((headerItem) => (
              <Fragment key={headerItem.id}>
                <MenuToolTip placement='bottom-start' title={<MenuList listData={headerItem.listitem} />}>
                  <li className='font-semibold capitalize mr-[1.4rem]'>
                    <Link to='/#' className='p-[8px]'>
                      {headerItem.name}
                    </Link>
                  </li>
                </MenuToolTip>
              </Fragment>
            ))}
          </ul>
        </div>
        <div>
          <ul className='flex items-center'>
            <li className='cursor-pointer'>
              <AddIcon sx={ICON_STYLES.mdIcon} />
            </li>
            <li className='cursor-pointer ml-[3rem]'>
              <div className='bg-primary flex items-center justify-center uppercase font-semibold h-[2.6rem] w-[2.8rem] px-[3px] py-[5px] border-white border-[1px] rounded-[3px] hover:text-primary hover:bg-white duration-150'>
                en
              </div>
            </li>
            <li className='cursor-pointer ml-[3rem]'>
              <NotificationsIcon sx={ICON_STYLES.icon} />
            </li>
            <li className='cursor-pointer ml-[3rem]'>
              <Avatar sx={AVATAR_STYLES.ava} alt='Remy Sharp' src={AvaIcon} />
            </li>
            <li className='cursor-pointer ml-[3rem]'>
              <SearchIcon sx={ICON_STYLES.lgIcon} />
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default PCHeader
