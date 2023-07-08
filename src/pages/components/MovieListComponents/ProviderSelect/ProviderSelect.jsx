import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { GiCheckMark } from 'react-icons/gi'
import Tooltip from '../Tooltip'

const ProviderSelect = ({ register, id, name, img }) => {
  const [select, setSelect] = useState(false)
  return (
    <label className='group w-[5rem] h-[5rem] mt-[1rem] cursor-pointer relative block rounded-[0.8rem] overflow-hidden'>
      <input
        className='hidden'
        type='checkbox'
        value={id}
        {...register('with_ott_providers')}
        onClick={() => {
          setSelect(!select)
        }}
      />
      <Tooltip title={name}>
        <img
          src={`https://www.themoviedb.org/t/p/original${img}`}
          alt=''
          className='w-full h-full cover'
          loading='lazy'
        />
        <div
          className={`absolute w-full h-full top-0 left-0 bg-lightBlue justify-center items-center bg-opacity-70 ${
            select ? 'flex' : 'group-hover:flex hidden'
          } `}
        >
          <GiCheckMark className='text-light text-[3rem] ' />
        </div>
      </Tooltip>
    </label>
  )
}

ProviderSelect.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
}

export default ProviderSelect
