/* eslint-disable react/prop-types */
import React from 'react'

const Heading = ({ children = '', className }) => {
  return <h3 className={`font-semibold mb-[20px] h-[28px] text-[22.4px] flex items-center ${className}`}>{children}</h3>
}

export default Heading
