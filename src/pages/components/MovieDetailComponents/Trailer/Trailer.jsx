/* eslint-disable react/prop-types */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTrailer } from 'app/redux/slices/trailerSlice.js'
import ReactDOM from 'react-dom'

const Trailer = () => {
  const dispatch = useDispatch()
  const trailer = useSelector((state) => state.trailer)
  if (!trailer.status) return null
  return ReactDOM.createPortal(
    <div id='trailer'>
      <div className='inset-0 overlay' />
      <div className='video_trailer'>
        <div id='video_close' className='flex py-[15px] px-[20px] justify-between bg-black'>
          <p className='text-4xl'>Play Trailer</p>
          <button
            className='transition-all px-[10px] duration-300 bg-transparent rounded-xl hover:opacity-50 hover:cursor-pointer hover:bg-primary'
            type='button'
            onClick={() => dispatch(setTrailer({ status: false, id: '' }))}
          >
            <i id='close' className='py-2 text-3xl opacity-50 hover:opacity-70 fa-solid fa-xmark' />
          </button>
        </div>
        <div id='video_frame' className='' />
        <iframe
          width='1300'
          height='731'
          src={`https://www.youtube.com/embed/${trailer.id}`}
          title={trailer.id}
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        />
      </div>
    </div>,
    document.getElementById('portal-root'),
  )
}

export default Trailer
