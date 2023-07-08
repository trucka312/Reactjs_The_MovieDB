import _ from 'lodash'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { getCredits } from '../../../apis/movieDetailApi.js'
import { setCast } from '../../../app/redux/slices/creditSlice.js'
import CastItem from '../../components/MovieDetailComponents/CastItem'
import Heading from '../../components/MovieDetailComponents/Heading'
import SlideCard from '../../components/MovieDetailComponents/SlideCard'

const SeriesCast = () => {
  const { movieId } = useParams()
  const dispatch = useDispatch()
  const dataCast = useSelector((state) => state.credit.cast)
  useEffect(() => {
    const getAPI = async () => {
      const credit = await getCredits(movieId)
      dispatch(setCast(credit.data.cast))
    }
    getAPI()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  if (_.isEmpty(dataCast)) return null
  return (
    <div className='SeriesCast pb-[30px] border-b border-grayBold'>
      <Heading className='mb-[21px] '>Series Cast</Heading>
      <div className='relative left-[-10px]'>
        <SlideCard id='3894' className='pb-4' loadMore={dataCast.length > 10}>
          {dataCast &&
            dataCast
              .slice(0, 9)
              .map((item) => (
                <CastItem key={uuidv4()} dataItem={item} className='mb-[10px] w-[140px] pb-[10px] ml-[10px] mr-[4px]' />
              ))}
        </SlideCard>
      </div>
      <NavLink className='inline-block mt-[20px] font-semibold text-[17.6px] hover:text-textMeta' to='/movie/1429/cast'>
        Full Cast & Crew
      </NavLink>
    </div>
  )
}
export default SeriesCast
