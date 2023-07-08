/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

const style = { fontSize: '2.2rem', stroke: 'black', strokeWidth: 1 }

const ToggleBox = ({ header, children, defaultOpen }) => {
  const [show, setShow] = useState(defaultOpen)

  const handleOnclick = () => {
    setShow(!show)
  }
  return (
    <div className=' w-[26rem] rounded-xl border border-grayBold mb-[1rem] shadow-md cursor-pointer'>
      <div
        className='flex justify-between items-center pr-[0.8rem] pl-[1.6rem] py-[1.2rem] text-[1.8rem] font-semibold w-[25rem]'
        onClick={handleOnclick}
      >
        <div>{header}</div>

        {show ? <KeyboardArrowDownIcon sx={style} /> : <KeyboardArrowRightIcon sx={style} />}
      </div>
      {show && children}
    </div>
  )
}

ToggleBox.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.string.isRequired,
  defaultOpen: PropTypes.bool,
}

ToggleBox.defaultProps = {
  defaultOpen: false,
}

export default ToggleBox
