/* eslint-disable react/prop-types */
import React from 'react'

const IconMovie = ({ icon, text, className = '', classIcon = '' }) => {
  return (
    <section
      className={`flex items-center justify-center w-[45px] h-[45px] rounded-full cursor-pointer justify-ce bg-[#032541] add ${className}`}
    >
      <i className={` ${classIcon} text-[12px] fa-solid ${icon}`} />
      <p className='hidden'>{text}</p>
    </section>
  )
}

export default IconMovie
