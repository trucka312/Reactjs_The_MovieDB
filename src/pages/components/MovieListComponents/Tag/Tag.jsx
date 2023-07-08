import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'

const Tag = ({ register, id, name, fieldname }) => {
  const [select, setSelect] = useState(false)
  return (
    <label
      className={twMerge(
        'border border-grayIcon px-[1.2rem] py-[0.4rem] rounded-full text-center cursor-pointer text-[1.5rem]',
        select ? 'bg-lightBlue text-white border-transparent' : '',
      )}
    >
      <input
        className='hidden'
        type='checkbox'
        value={id}
        {...register(fieldname)}
        onClick={() => {
          setSelect(!select)
        }}
      />
      {name}
    </label>
  )
}

Tag.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  fieldname: PropTypes.string.isRequired,
}

export default Tag
