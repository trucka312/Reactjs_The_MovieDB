/* eslint-disable no-case-declarations */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unknown-property */
import React, { useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'
import Heading from '../../components/MovieDetailComponents/Heading'
import IconAction from '../../components/MovieDetailComponents/IconAction'
import SlideCard from '../../components/MovieDetailComponents/SlideCard'
import { getMovieImg, getTrailers } from '../../../apis/movieDetailApi.js'
import { setLoading, setMovieImg } from '../../../app/redux/slices/movieImgSlice.js'
import { setTrailer } from '../../../app/redux/slices/trailerSlice.js'
import { setListTrailer } from '../../../app/redux/slices/movieSlice.js'

const Media = () => {
  const [tabActive, setTabActive] = useState('Most Popular')
  const [node, setNode] = useState(undefined)
  const dataMovie = useSelector((state) => state.movie.value)
  const { movieId } = useParams()
  const dispatch = useDispatch()
  const listMovieImg = useSelector((state) => state.movieimg)
  const listTrailer = useSelector((state) => state.movie.listTrailer)
  const bgFrame = (key) => `https://img.youtube.com/vi/${key}/maxresdefault.jpg`
  const toggleTap = async (e, tab) => {
    let child = node?.lastElementChild
    if (node?.childNodes.length > 0) {
      node?.removeChild(child)
    }
    const newNode = document.createElement('span')
    e.target.appendChild(newNode)
    setNode(e.target)
    if (tabActive !== tab) {
      setTabActive(tab)
    }
    switch (tab) {
      case 'Video':
        // Lấy trailer video
        dispatch(setLoading(true))
        const dataTrailer = await getTrailers(movieId)
        dispatch(setListTrailer(dataTrailer?.data?.results))
        setTimeout(() => {
          dispatch(setLoading(false))
        }, 1000)
        break
      case 'Backdrop':
        //  Lấy
        dispatch(setLoading(true))
        const dataBackdrop = await getMovieImg(movieId)
        dispatch(setMovieImg({ backdrops: dataBackdrop?.data?.backdrops }))
        setTimeout(() => {
          dispatch(setLoading(false))
        }, 1000)
        break
      case 'Poster':
        dispatch(setLoading(true))
        const dataVideo = await getMovieImg(movieId)
        dispatch(setMovieImg({ poster: dataVideo?.data?.posters }))
        setTimeout(() => {
          dispatch(setLoading(false))
        }, 1000)
        break
      default:
        break
    }
  }
  useEffect(() => {
    const listTab = document.getElementsByClassName('tab_item')
    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < listTab.length; index++) {
      const element = listTab[index]
      element.style.display = 'none'
      if (element.getAttribute('tabid') === tabActive) {
        element.style.display = 'block'
      }
    }
  }, [tabActive])
  const btnInit = useRef()
  useEffect(() => {
    const callAPI = async () => {
      const dataMovieImg = await getMovieImg(movieId)
      dispatch(setMovieImg({ backdrops: dataMovieImg?.data?.backdrops, poster: dataMovieImg?.data?.posters }))
    }
    callAPI()
    setTabActive('Most Popular')
    setNode(btnInit.current)
    let child = node?.lastElementChild
    if (node?.childNodes.length > 0) {
      node?.removeChild(child)
    }
    const newNode = document.createElement('span')
    btnInit.current.appendChild(newNode)
  }, [movieId, dispatch])
  if (_.isEmpty(listMovieImg, listTrailer)) return null
  const { backdrops, poster } = listMovieImg
  return (
    <div className='pb-[37px] Media'>
      <div className='tab-pane pt-[30px] flex gap-x-5 items-center active'>
        <Heading className='pr-10'>Media</Heading>
        <ul className='font-semibold mb-[20px] flex  flex-1 gap-x-10 text-[17.6px]'>
          <button
            type='button'
            className='after:opacity-100'
            ref={btnInit}
            onClick={(e) => toggleTap(e, 'Most Popular')}
          >
            Most Popular
            {!node && <span />}
          </button>
          <button type='button' onClick={(e) => toggleTap(e, 'Video')}>
            Video {listTrailer?.length}
          </button>
          <button type='button' onClick={(e) => toggleTap(e, 'Backdrop')}>
            Backdrop {backdrops?.length}
          </button>
          <button type='button' onClick={(e) => toggleTap(e, 'Poster')}>
            Poster {poster?.length}
          </button>
          <b className='flex-1 mt-2 text-2xl font-semibold text-right text-info flex-end'>
            {tabActive === 'Most Popular' ? '' : `View All ${tabActive}`}
          </b>
        </ul>
      </div>
      <div id='Backdrops' className='tab-content relative h-[300px] rounded-xl'>
        <div tabid='Most Popular' className='absolute inset-0 tab_item most_popular'>
          <SlideCard className='px-0 pb-0 rounded-xl gap-x-0'>
            {!_.isEmpty(listTrailer) && (
              <div
                className='play relative flex-[0_0_auto] flex items-center justify-center bg-#00000065 w-[533px] h-[300px] bg-black'
                key={uuidv4()}
              >
                <img className='w-full h-full bg-cover' src={`${bgFrame(listTrailer[0]?.key)}`} alt='Ảnh đang bị lỗi' />
                <IconAction
                  classIcon='text-white text-[25px]'
                  className='bg-primary absolute top-[40%] opacity-70 w-[67px] h-[67px] rounded-full'
                  icon='fa-play'
                  onClick={() => dispatch(setTrailer({ status: true, id: listTrailer[0].key }))}
                />
              </div>
            )}

            <div key={uuidv4()} className='w-[533px] flex-[0_0_auto] shadow-xl h-[300px]'>
              {_.isEmpty(dataMovie?.backdrop_path) ? (
                <img className='w-full h-[300px] skeleton drop-shadow-xl mr-10 ' alt='' />
              ) : (
                <img
                  className='w-full h-[300px] drop-shadow-xl mr-10 '
                  src={`https://www.themoviedb.org/t/p/w1066_and_h600_bestv2${dataMovie?.backdrop_path}`}
                  alt=''
                />
              )}
            </div>
            <div key={uuidv4()} className='w-[200px] flex-[0_0_auto] mr-7 shadow-xl h-[300px]'>
              {_.isEmpty(dataMovie?.poster_path) ? (
                <img className='w-full h-[300px] skeleton drop-shadow-xl' alt='' />
              ) : (
                <img
                  className='w-full h-[300px] drop-shadow-xl'
                  src={`https://www.themoviedb.org/t/p/w440_and_h660_face${dataMovie?.poster_path}`}
                  alt=''
                />
              )}
            </div>
          </SlideCard>
        </div>
        <div tabid='Video' className='absolute inset-0 tab_item video '>
          <div className='flex items-center video rounded-tl-xl wrapper-video'>
            <SlideCard loadMore={listTrailer.length > 10}>
              {listTrailer &&
                listTrailer.slice(0, 10)?.map((item) => (
                  <div
                    className='play relative flex-[0_0_auto] flex items-center justify-center bg-#00000065 w-[533px] h-[300px] bg-black'
                    key={uuidv4()}
                  >
                    <img className='w-full h-full bg-cover' src={`${bgFrame(item?.key)}`} alt='Ảnh đang bị lỗi' />
                    <IconAction
                      classIcon='text-white text-[25px]'
                      className='bg-primary hover:opacity- absolute top-[40%] opacity-70 w-[67px] h-[67px] rounded-full'
                      icon='fa-play'
                      onClick={() => dispatch(setTrailer({ status: true, id: item.key }))}
                    />
                  </div>
                ))}
            </SlideCard>
          </div>
        </div>
        <div tabid='Backdrop' className='absolute inset-0 tab_item'>
          <SlideCard loadMore={backdrops?.length > 10} className='px-0 pb-0 rounded-xl gap-x-0'>
            {!_.isEmpty(backdrops) &&
              backdrops.slice(0, 10).map((item) => (
                <div key={uuidv4()} className='w-[533px] flex-[0_0_auto] mr-7 shadow-xl h-[300px]'>
                  <img
                    className='w-full h-[300px] drop-shadow-xl rounded-xl mr-10 '
                    src={`https://www.themoviedb.org/t/p/w1066_and_h600_bestv2${item?.file_path}`}
                    alt=''
                  />
                </div>
              ))}
          </SlideCard>
        </div>
        <div tabid='Poster' className='absolute inset-0 tab_item poster'>
          <SlideCard loadMore={poster?.length > 10} className='px-0 pb-0 gap-x-0 rounded-xl'>
            {!_.isEmpty(poster) &&
              poster.slice(0, 10).map((item) => (
                <div key={uuidv4()} className='w-[200px] flex-[0_0_auto] mr-7 shadow-xl h-[300px]'>
                  <img
                    className='w-full h-[300px] drop-shadow-xl rounded-xl mr-10 '
                    src={`https://www.themoviedb.org/t/p/w440_and_h660_face${item?.file_path}`}
                    alt=''
                  />
                </div>
              ))}
          </SlideCard>
        </div>
      </div>
    </div>
  )
}

export default Media
