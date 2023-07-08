/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable max-len */
/* eslint-disable camelcase */
import React, { createRef, useEffect, useState } from 'react'
import { formatTime } from 'utils/formatTime.js'
import { hanleString } from 'utils/handleString.js'
import PercentBox from 'components/PercentBox'
import ColorThief from 'colorthief'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import _ from 'lodash'
import PrimaryToolTip from 'components/HtmlToolTips/PrimaryToolTip.js'
import { handleDate } from 'utils/handleDate.js'
import { handleCors } from 'utils/handleCors.js'
import { handleStyleBgImg } from 'utils/handleStyleBgImg.js'
import { setCertificate, setDataMovie, setListTrailer } from 'app/redux/slices/movieSlice.js'
import { getCertification, getCredits, getMovies, getTrailers } from 'apis/movieDetailApi.js'
import { setCast, setCrew } from 'app/redux/slices/creditSlice.js'
import { handleCertification } from 'utils/handleCertification.js'
import { Toaster } from 'react-hot-toast'
import ModalPoster from '../../components/MovieDetailComponents/ModalPoster'
import IconMovie from '../../components/MovieDetailComponents/IconMoive'

const MovieDetail = () => {
  const { movieId } = useParams()
  const dispatch = useDispatch()
  const [color, setColor] = useState([])
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  handleCors()
  const dataMovie = useSelector((state) => state.movie.value)
  const certificates = useSelector((state) => state.movie.certificates)
  const dataCrew = useSelector((state) => state.credit.crew)
  const imgRef = createRef()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    const getAPI = async () => {
      const movie = await getMovies(movieId)
      dispatch(setDataMovie(movie.data))
      const credit = await getCredits(movieId)
      dispatch(setCrew(credit.data.crew))
      dispatch(setCast(credit.data.cast))
      const listCertificate = await getCertification(movieId)
      dispatch(setCertificate(listCertificate))
      const dataTrailer = await getTrailers(movieId)
      dispatch(setListTrailer(dataTrailer?.data?.results))
    }
    getAPI()
  }, [movieId, dispatch])
  if (_.isEmpty(dataMovie)) return null
  const {
    vote_average,
    production_countries,
    title,
    backdrop_path,
    poster_path,
    tagline,
    runtime,
    release_date,
    genres,
  } = dataMovie
  document.title = title
  const overviewPart = dataMovie.overview ? hanleString(dataMovie) : 'Nothing overview about moive'
  const backdropUrl = `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${backdrop_path}`
  const countryCode = production_countries[0]?.iso_3166_1
  const certificate = handleCertification(certificates, countryCode)
  return (
    <section className='relative MovieDetail'>
      <Toaster position='top-right' reverseOrder={false} />
      <div
        style={{ backgroundImage: `url(${backdropUrl})` }}
        className='movie bg-cover  w-full h-[510px] flex gap-x-[40px] header_bg items-center text-white'
      >
        <div
          style={handleStyleBgImg(color)}
          className={`absolute ${
            !_.isEmpty(color) ? '' : 'bg-[#e2e8f0] opacity-70'
          } transition-all inset-0 custom_bg overlay`}
        />
        <div className='original_header flex gap-x-[40px] ml-[56px] pr-[56px]'>
          <div onClick={() => handleOpen()} className='relative poster_wrapper w-[300px]'>
            <div className='relative poster_img'>
              {poster_path ? (
                <div className='skeleton rounded-[15px]'>
                  <img
                    alt=''
                    src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${poster_path}`}
                    id='poster_img'
                    className='rounded-[15px] overflow-hidden w-[300px] h-[450px] hover:cursor-pointer relative z-[1]'
                  />
                </div>
              ) : (
                <img
                  alt=''
                  id='poster_img'
                  className='rounded-[15px] skeleton overflow-hidden w-[300px] h-[450px] hover:cursor-pointer'
                />
              )}

              <img
                crossOrigin='anonymous'
                ref={imgRef}
                alt='my cool cat'
                src={`https://cors-anywhere.herokuapp.com/https://www.themoviedb.org/t/p/w600_and_h900_bestv2${poster_path}`}
                id='poster_img'
                className=' absolute opacity-0 w-[300px] h-[450px] hover:cursor-pointer'
                onLoad={() => {
                  const colorThief = new ColorThief()
                  const img = imgRef.current
                  const result = colorThief.getColor(img)
                  setColor(result)
                }}
              />
            </div>
            <div className='absolute inset-0 z-10 flex items-center justify-center poster_zoom'>
              <i className='mr-3 fa-solid fa-maximize' />
              Expand
            </div>
          </div>
          {open && <ModalPoster open={open} handleClose={handleClose} />}
          <div className='relative flex flex-col justify-center movie-info z-2'>
            <div className='pb-1 text-white title mb-[24px]'>
              <h2 className='inline-block hover:opacity-70 text-[35.2px] leading-[initial] font-bold'>
                <a href={`${movieId}-${title}`}>{title}</a>
                <span className='ml-[7.5px] opacity-60 font-normal text-[#ffffff]'>({release_date?.slice(0, 4)})</span>
              </h2>
              <div className='flex items-center mt-[-2px] category'>
                {certificate && (
                  <span className='mr-[7px] p-[0.06em_4px_0.15rem_4px] border rounded-sm inline-flex leading-[1] text-white opacity-60'>
                    {certificate}
                  </span>
                )}
                <span className='release_date'>
                  {handleDate(release_date)} ({countryCode})
                </span>
                <span className='genres pl-[20px] flex gap-x-3 relative before:absolute before:top-4 before:left-[7px] before:inline-flex before:w-2 before:h-2 before:rounded-full before:bg-white '>
                  {genres &&
                    genres.length > 0 &&
                    genres.map((genre, index) => (
                      <span key={uuidv4()}>
                        <a href='1'>{genre?.name}</a>
                        <span>{index < genres.length - 1 ? ',' : ''}</span>
                      </span>
                    ))}
                </span>
                <span className='pl-[20px] relative after:absolute after:top-4 after:left-[7px] after:inline-flex after:w-2 after:h-2 after:rounded-full after:bg-white'>
                  {formatTime(runtime)}
                </span>
              </div>
            </div>
            <div className='flex items-center mb-[20px]'>
              <div className='p-[4px] transition-all hover:scale-110 hover:cursor-pointer'>
                <PercentBox percent={vote_average ? Math.ceil(vote_average * 10) : 0} type='big' />
              </div>
              <div className='score font-bold leading-[1.2] ml-[6px]'>
                User
                <br /> Score
              </div>
              <div className='flex ml-[20px] action gap-x-[20px]'>
                <PrimaryToolTip title='Add to list'>
                  <div>
                    <IconMovie icon='fa-list' />
                  </div>
                </PrimaryToolTip>
                <PrimaryToolTip title='Mark as favorite'>
                  <div>
                    <IconMovie icon='fa-heart' />
                  </div>
                </PrimaryToolTip>
                <PrimaryToolTip title='Add to your watchlist'>
                  <div>
                    <IconMovie icon='fa-bookmark' />
                  </div>
                </PrimaryToolTip>
                <PrimaryToolTip title='Rate it'>
                  <div>
                    <IconMovie icon='fa-star' />
                  </div>
                </PrimaryToolTip>
              </div>
            </div>
            <div>
              <p className='tagline opacity-70 text-[17.6px] italic'>{tagline}</p>
              <h3 className='text-[20.8px] h-[26.67px] mt-[10px] mb-[8px] font-semibold'>Overview</h3>
              <div className='overview leading-[1.4]'>
                {_.isArray(overviewPart) && overviewPart.length > 0 ? (
                  overviewPart?.map((item) => <p key={uuidv4()}>{item}</p>)
                ) : (
                  <p>{overviewPart}</p>
                )}
              </div>
              <div className='credits mt-[20px]'>
                <div className='credit'>
                  <ul className='flex justify-between flex-1 text-left'>
                    {dataCrew &&
                      dataCrew.slice(2, 5).map((crew) => (
                        <li key={uuidv4()}>
                          <p className='font-bold text-[16px] hover:cursor-pointer hover:opacity-90'>{crew.name}</p>
                          <p className='text-[14.4px]'>{crew.job}</p>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MovieDetail
