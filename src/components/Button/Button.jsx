/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
import PropTypes from 'prop-types'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const style =
  'text-normal text-white bg-black font-bold px-[2.6rem] py-[1rem] rounded-full bg-lightBlue hover:text-dark'

const Button = ({ onClick, children, className, disable, isSquare, type }) => {
  const square = isSquare ? 'rounded-[0.5rem] font-[1.3em] px-[1.6rem] py-[0.8rem]' : ''
  return (
    <button type={type} className={twMerge(style, square, className)} onClick={onClick} disabled={disable}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disable: PropTypes.bool,
  isSquare: PropTypes.bool,
  type: PropTypes.string,
}

Button.defaultProps = {
  onClick: () => {},
  className: '',
  disable: false,
  isSquare: false,
  type: 'button',
}

export default Button
