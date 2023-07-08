/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import { Box, Modal } from '@mui/material'
import _ from 'lodash'
import React, { useEffect, useState, useRef } from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { setModalPoster } from '../../../../app/redux/slices/movieImgSlice.js'
import Dropdown from '../Dropdown/Dropdown.jsx'

const ModalPoster = ({ handleClose, open }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    outline: 'none',
  }
  const dispatch = useDispatch()
  const dataMovie = useSelector((state) => state.movie.value)
  const posters = useSelector((state) => state.movieimg.poster)
  const modalPoster = useSelector((state) => state.movieimg.modalPoster)
  const [indexImg, setIndexImg] = useState(0)
  const [value, setValue] = useState({ key: 'en', name: 'English' })
  useEffect(() => {
    const getAPI = async () => {
      const initialPosters = posters.filter((item) => item?.iso_639_1 === value.key)
      dispatch(setModalPoster(initialPosters))
      setIndexImg(0)
    }
    getAPI()
  }, [value])
  const handleSlide = (e, type) => {
    refImg.current.style.opacity = '0'
    setTimeout(() => {
      refImg.current.style.opacity = '1'
    }, 1000)
    if (type === 'prev') {
      setIndexImg((p) => p - 1)
    } else {
      setIndexImg((p) => p + 1)
    }
  }
  let url = modalPoster[indexImg]?.file_path
  const refImg = useRef(null)
  if (_.isEmpty(dataMovie)) return null
  return (
    <Modal
      open={open}
      onClose={() => handleClose()}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <section className='modal_content'>
          <div className=' content_img bg-grayBold flex items-center justify-center'>
            {!_.isEmpty(url) ? (
              <div className='relative h-full'>
                <div id='preloader'>
                  <div id='status'>&nbsp;</div>
                </div>
                <img
                  className='h-full relative z-[1]'
                  src={`https://www.themoviedb.org/t/p/w1280${url}`}
                  alt=''
                  ref={refImg}
                />
              </div>
            ) : (
              <div className='relative'>
                <img
                  className='h-full opacity-10'
                  src={`https://www.themoviedb.org/t/p/w1280${dataMovie.poster_path}`}
                  alt=''
                />
                <div className='absolute z-[1] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center'>
                  <div className='w-[50px] mx-auto h-[50px] bg-transparent border-[7px] border-t-[7px] border-dotted animate-spin border-grayBold rounded-full border-t-primary shadow-md' />
                  <h3 className='text-primary font-bold text-5xl'>Comming Soon...</h3>
                </div>
              </div>
            )}
          </div>
          <div className='content_info'>
            <button
              onClick={() => handleClose()}
              className='transition-all px-[10px] absolute top-5 right-5 duration-300 rounded-xl hover:cursor-pointer'
              type='button'
            >
              <i
                id='close'
                className='py-2 text-3xl opacity-50 hover:color-white hover:opacity-100 fa-solid fa-xmark'
              />
            </button>
            <div className='reaction'>
              <i className='fa-solid fa-thumbs-down' />
              <i className='fa-solid fa-thumbs-up' />
            </div>
            <div className='border-b info_part border-grayBold'>
              <p>Info</p>
              <i className='fa-solid fa-lock-open' />
            </div>
            <span className='primary_part'>
              Primary?
              <i className='fa-solid fa-circle-xmark' />
            </span>
            <div className='added_part'>
              <p>Add By</p>
              <p>Trunks</p>
            </div>
            <div className='size_part'>
              <p>Size</p>
              <p>
                {modalPoster[indexImg]?.width}*{modalPoster[indexImg]?.height}
              </p>
            </div>
            <div className='language_part'>
              <p>Language</p>
              <Dropdown setValue={setValue} value={value} />
            </div>
            <div className='flex justify-between border-b tagged_part border-grayBold'>
              <h3>Tagged Peopple</h3>
              <i className='fa-solid fa-plus' />
            </div>
            <p>No records have been added.</p>
            {!_.isEmpty(modalPoster) && (
              <div className='slide_poster_part'>
                <button disabled={indexImg === 0} type='button' onClick={(e) => handleSlide(e, 'prev')}>
                  <i className='fa-solid fa-arrow-left-long' />
                </button>
                <button
                  type='button'
                  disabled={indexImg === modalPoster.length - 1 || modalPoster.length === 1}
                  onClick={(e) => handleSlide(e, 'next')}
                >
                  <i className='fa-solid fa-arrow-right-long' />
                </button>
              </div>
            )}
          </div>
        </section>
      </Box>
    </Modal>
  )
}
export default ModalPoster
