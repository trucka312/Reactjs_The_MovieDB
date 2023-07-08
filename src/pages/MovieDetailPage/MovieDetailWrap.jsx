/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux'
import Reac, { useRef, useState, useEffect } from 'react'
import TopBar from './modules/TopBar'
import '../../assets/css/MovieDetailStyle.css'
import SeriesCast from './modules/SeriesCast'
import LastSeason from './modules/LastSeason'
import Social from './modules/Social'
import SideBar from './modules/SideBar'
import Media from './modules/Media.jsx'
import Recomendations from './modules/Recomendations'
import MovieDetail from './modules/MovieDetail.jsx'
import Trailer from '../components/MovieDetailComponents/Trailer/Trailer.jsx'
import Loading from '../components/MovieDetailComponents/Loading/loading.js'

const MovieDetailWrap = () => {
  const location = window.location.href
  const trailer = useSelector((state) => state.trailer.status)
  const loading = useSelector((state) => state.movieimg.loading)
  const recommendation = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const cbFunction = (entries) => {
    const [entry] = entries
    setIsVisible(entry.isIntersecting)
  }
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  }
  useEffect(() => {
    const observer = new IntersectionObserver(cbFunction, options)
    if (recommendation.current) {
      observer.observe(recommendation.current)
    }
    return () => {
      if (recommendation.current) observer.unobserve(recommendation.current)
    }
  }, [recommendation, options])
  return (
    <div className={`relative ${trailer ? 'filter' : ''} moive_detailt_page`}>
      {loading && <Loading />}
      <TopBar />
      <MovieDetail />
      <div className='flex justify-between'>
        <div className='content_left flex flex-col flex-1 pl-[56px] pt-[30px] w-[76%]'>
          <SeriesCast />
          {location.includes('tv') ? <LastSeason /> : null}
          <Social />
          <Media />
          <div style={{ border: 'none' }} ref={recommendation} className='my-1' />
          {isVisible && <Recomendations />}
        </div>
        <div className='sidebar w-[24%]'>
          <SideBar />
        </div>
      </div>
      <Trailer />
    </div>
  )
}

export default MovieDetailWrap
