/* eslint-disable no-unused-vars */
import { ICON_STYLES } from 'constants/muiStylesIcon-Ava'
import React, { Fragment } from 'react'
import '../../assets/css/TopNav.css'
import ArrowDropDownTwoToneIcon from '@mui/icons-material/ArrowDropDownTwoTone'
import PropTypes from 'prop-types'
import { MenuToolTip } from 'components/HtmlToolTips'
import { MenuList } from 'components/MenuBox'

const TopBar = ({ listData }) => {
  return (
    <nav className='flex justify-center py-4 Top_Bar gap-x-12 border-b border-gray md:px-[2rem]'>
      <div className='flex'>
        {listData.map((item, index) => (
          <Fragment key={item.id}>
            <MenuToolTip placement='bottom-start' title={<MenuList listData={item.listitem} />}>
              <li
                className={`list-none relative mr-[4rem] md:mr-[1.6rem] capitalize cursor-pointer md:flex md:items-center ${
                  index === 0 ? 'topbar' : ''
                }`}
              >
                <span>{item.name}</span>
                <ArrowDropDownTwoToneIcon sx={ICON_STYLES.dropDownIcon} />
              </li>
            </MenuToolTip>
          </Fragment>
        ))}
      </div>
    </nav>
  )
}
TopBar.propTypes = {
  listData: PropTypes.oneOfType([() => null, PropTypes.object]),
}
TopBar.defaultProps = {
  listData: {},
}
export default TopBar
