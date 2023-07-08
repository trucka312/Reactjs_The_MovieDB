/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Heading from '../../components/MovieDetailComponents/Heading'
import TapPane from '../../components/MovieDetailComponents/TabPane/TapPane'

const Social = () => {
  const [show, setShow] = useState(true)
  const handleShow = (value) => {
    setTimeout(() => setShow(value), 200)
  }
  return (
    <div className='Social py-[31px] relative soical'>
      <div className='flex items-center menu gap-x-8'>
        <Heading>Social</Heading>
        <div className='h-full social_tabpane'>
          <button
            type='button'
            onClick={() => handleShow(true)}
            className={`tab-item  ml-12 ${!show && 'after:hidden'}`}
          >
            Reviews 0
          </button>
          <button type='button' onClick={() => handleShow(false)} className={`tab-item ml-5 ${show && 'after:hidden'}`}>
            Discussions 64
          </button>
        </div>
      </div>
      <div className='content mt-[-10px]'>
        <TapPane show={show} />
      </div>
      <NavLink className='text-[1.1em] inline-block font-semibold mt-[20px] hover:text-textMeta '>
        Go to Discussions
      </NavLink>
    </div>
  )
}

export default Social
