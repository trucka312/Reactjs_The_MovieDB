/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import _ from 'lodash'
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { getRecommendations } from '../../../apis/movieDetailApi.js'
import { setData } from '../../../app/redux/slices/recommendationSlice.js'
import Heading from '../../components/MovieDetailComponents/Heading'
import MovieItem from '../../components/MovieDetailComponents/MovieItem'
import SlideCard from '../../components/MovieDetailComponents/SlideCard'

const Recomendations = () => {
  const { movieId } = useParams()
  const dataMovie = useSelector((state) => state.movie.value)
  const listRecomment = useSelector((state) => state.recommendation.data)
  const dispatch = useDispatch()
  const recommendation = useRef(null)
  useEffect(() => {
    const getAPI = async () => {
      const { data } = await getRecommendations(movieId)
      dispatch(setData(data.results))
    }
    getAPI()
  }, [movieId, dispatch])
  useEffect(() => {
    recommendation.current?.classList.add('showRecomment')
  })
  if (_.isEmpty(listRecomment)) {
    return (
      <div className='Recomendations border-t border-grayBold py-[31px]'>
        <Heading className='mb-[20px]'>Recommendations</Heading>
        <p>
          {`We don't have enough data to suggest any movies based on ${dataMovie?.title}. You can help by rating movies you have seen.`}
        </p>
      </div>
    )
  }
  return (
    <div ref={recommendation} className='Recomendations  border-t border-grayBold py-[31px]'>
      <Heading className='mb-[20px]'>Recommendations</Heading>
      <SlideCard className='pb-0 gap-x-[18px]'>
        {listRecomment &&
          listRecomment.length > 0 &&
          listRecomment.map((item) => <MovieItem key={uuidv4()} data={item} className='relative mb-2' />)}
      </SlideCard>
    </div>
  )
}

export default Recomendations
