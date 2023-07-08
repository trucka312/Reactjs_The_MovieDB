import MovieList from 'pages/components/MovieListComponents/MovieList'
import { useSelector, useDispatch } from 'react-redux'
import SideBar from 'pages/components/MovieListComponents/SideBar/SideBar'
import React, { useEffect } from 'react'
import { SET_PARAMS, getCountries, getLanguages } from 'app/redux/slices/moviePageSlice'
import _ from 'lodash'
import { DEFAULT_FORM_VALUE } from 'constants/forms'
import { Toaster } from 'react-hot-toast'

const MovieListPage = () => {
  const countries = useSelector((state) => state.moviePage.countries)
  const languages = useSelector((state) => state.moviePage.languages)
  const dispatch = useDispatch()

  useEffect(() => {
    if (_.isEmpty(countries)) dispatch(getCountries())
    if (_.isEmpty(languages)) dispatch(getLanguages())
    dispatch(SET_PARAMS(DEFAULT_FORM_VALUE))
  }, [])

  return (
    <>
      <Toaster position='top-right' reverseOrder={false} />
      <div className='my-3 max-w-[140rem] px-[4rem] py-[3rem] mx-auto '>
        <h1 className='font-semibold text-[2.6rem] mb-[2rem]'>Popular Movies</h1>
        <div className='flex'>
          <div className='shrink-0'>
            <SideBar />
          </div>
          <div className='flex-1 ml-[3rem]'>
            <MovieList />
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieListPage
