/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react'

const IconAction = ({ icon = '', onClick, text, className = '', classIcon = '' }) => {
  return (
    <section
      onClick={onClick}
      className={`flex items-center transition-all hover:opacity-100 justify-center w-[45px] h-[45px] rounded-full cursor-pointer justify-ce bg-[#032541] add ${className}`}
    >
      <i className={` ${classIcon} fa-solid ${icon}`} />
      <p className='hidden'>{text}</p>
    </section>
  )
}

export default IconAction
