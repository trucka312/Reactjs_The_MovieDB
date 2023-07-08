import personAPI, { getCombinedCredits } from 'apis/personDetailApi'
import TopBar from 'components/TopBar'
import React, { useEffect, useState, Suspense, lazy } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { TOPBAR_PERSON_DETAIL } from 'constants/navLists'
import { InfoSkeleton, PersonSkeleton } from 'utils/wrapSkeleton'

const LazyKnownFor = lazy(() => import('../components/PersonDetailComponents/KnownFor'))
const LazyBiography = lazy(() => import('../components/PersonDetailComponents/Biography'))
const LazyMovieList = lazy(() => import('../components/PersonDetailComponents/MovieList/MovieList'))
const LazyPersonInfo = lazy(() => import('../components/PersonDetailComponents/PersonInfo'))
const PersonDetailPage = () => {
  const [personData, setPersonData] = useState({})
  const { personId } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    const getPersonDetails = async () => {
      try {
        const personResponse = await personAPI.getPersonDetail(personId)
        setPersonData(personResponse.data)
      } catch (err) {
        if (err.response.status === 404) {
          navigate('/*')
        } else throw new Error(err)
      }
    }
    getPersonDetails()
  }, [navigate, personId])
  useEffect(() => {
    dispatch(getCombinedCredits(personId))
  }, [dispatch, personId])
  return (
    <>
      <TopBar listData={TOPBAR_PERSON_DETAIL} />
      <div className='flex py-[3rem] px-[4rem] max-w-[140rem] m-auto md:block md:px-[1.5rem]'>
        <Suspense fallback={<InfoSkeleton />}>
          <LazyPersonInfo personData={personData} />
        </Suspense>
        <div className='w-full pl-[3rem] max-w-[920px] overflow-x-hidden md:px-[0]'>
          <Suspense fallback={<PersonSkeleton />}>
            <LazyBiography personData={personData} />
            <LazyKnownFor />
            <LazyMovieList />
          </Suspense>
        </div>
      </div>
    </>
  )
}

export default PersonDetailPage
