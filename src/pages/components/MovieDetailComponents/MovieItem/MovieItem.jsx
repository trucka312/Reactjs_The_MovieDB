/* eslint-disable prefer-template */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import { handleDate } from 'utils/handleDate.js'

const MovieItem = ({ data, className = '' }) => {
  const { backdrop_path = '', original_title, release_date, id, vote_average } = data
  return (
    <Link to={`/movie/${id}`} className={`${className}  cursor-pointer `}>
      <div className='card-movie img_content overflow-hidden w-[250px] '>
        <div className='relative  overflow-hidden recomment_movie'>
          {backdrop_path ? (
            <div className='skeleton rounded-xl'>
              <img
                src={`https://www.themoviedb.org/t/p/w500_and_h282_face${backdrop_path}`}
                title='Vì em không là nắng'
                alt=''
                className='rounded-xl relative z-[1] w-[250px] h-[141px]'
              />
            </div>
          ) : (
            <img
              src='https://kenhit.vn/public/themes/images/img-error.jpg'
              title='Vì em không là nắng'
              alt=''
              className='rounded-xl w-[250px] bg-cover h-[141px]'
            />
          )}

          <section
            title={original_title}
            className='px-[10px] h-[40px] meta-movie absolute bg-white opacity-90 items-center flex justify-between w-full'
          >
            <div className='flex items-center release_date gap-x-3'>
              <i className='fa-solid fa-calendar-days'> </i>
              <span>{handleDate(release_date)}</span>
            </div>
            <div className='flex gap-x-3 items-center text-[12px] cursor-pointer'>
              <i className='fa-solid fa-heart' />
              <i className='fa-solid fa-bookmark' />
              <i className='fa-solid fa-star' />
            </div>
          </section>
        </div>
        <div className='flex justify-between w-full mt-3 title'>
          <h4 className='w-[70%]'>
            {original_title.length > 23 ? original_title.substring(0, 23) + ' ...' : original_title}
          </h4>
          <p>{Math.round(vote_average * 10)} %</p>
        </div>
      </div>
    </Link>
  )
}

export default MovieItem
