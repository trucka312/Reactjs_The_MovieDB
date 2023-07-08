/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'

const CastItem = ({ dataItem, className = '' }) => {
  const {
    profile_path = '',
    name = 'Name of actor',
    character = 'Giới thiệu diễn viên',
    epsiode,
    id = '3894',
  } = dataItem
  return (
    <div
      className={` border-[1px] border-[rgb(227_227_227)] overflow-hidden flex-[0_0_auto] mb-8 rounded-xl shadow-md ${className}`}
    >
      <Link
        className='w-[139px] h-[175px] flex items-center justify-center overflow-hidden bg-[#f4fbf3]'
        to={`/person/${id}`}
      >
        {profile_path ? (
          <div className='skeleton'>
            <img
              className='w-[139px] relative z-[1] h-[175px]'
              src={`https://www.themoviedb.org/t/p/w276_and_h350_face${profile_path}`}
              alt=''
            />
          </div>
        ) : (
          <img
            src='https://kenhit.vn/public/themes/images/img-error.jpg'
            title='Vì em không là nắng'
            alt=''
            className='rounded-xl skeleton scale-150 bg-contain'
          />
        )}
      </Link>
      <div className='px-[10px] pt-[10px] infor_cast'>
        <Link to={`/person/${id}`}>
          <b>{name}</b>
        </Link>
        <p className='text-[14.4px] whitespace-pre-wrap'>{character}</p>
        <p className='text-[14.4px] text-textMeta'>{epsiode}</p>
      </div>
    </div>
  )
}

export default CastItem
