/* eslint-disable max-len */
import React, { useState, useEffect, useRef } from 'react'
import { useSearchParams, createSearchParams, useNavigate, useLocation } from 'react-router-dom'

import SearchIcon from '@mui/icons-material/Search'
import ClearIcon from '@mui/icons-material/Clear'

import SearchTrending from '../../../pages/components/SearchResultComponents/SearchTrending/index.js'
import SearchResult from '../../../pages/components/SearchResultComponents/SearchResult/index.js'
import useDebounce from '../../../hooks/useDebounce.js'
import SearchAPI from '../../../apis/searchResultApi.js'
import Spinner from '../../Spinner/Spinner.jsx'

// eslint-disable-next-line react/prop-types
const SearchNav = () => {
  let [searchParams] = useSearchParams()
  let location = useLocation()
  const [showResult, setShowResult] = useState()
  const [searchValue, setSearchValue] = useState('')
  const [loading, setLoading] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [searchResult, setSearchResult] = useState([])
  const navigate = useNavigate()
  const debounced = useDebounce(searchValue, 200)
  const ref = useRef()

  useEffect(() => {
    setSearchValue(searchParams.get('query'))
  }, [searchParams])

  const handleChangeSearch = (e) => {
    const inputValue = e.target.value
    if (!inputValue.startsWith(' ')) {
      setSearchValue(e.target.value)
      // truyền dữ liệu search
    }
  }
  const handleIconClickChange = () => {
    setSearchValue('')
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      if (!e.target.value) return
      navigate({
        pathname: location.pathname === '/search' ? '/search/movie' : location.pathname,
        search: createSearchParams({
          query: searchValue,
        }).toString(),
      })
      setShowResult(false)
    }
  }

  // logic search
  useEffect(() => {
    // call api
    const fetchApi = async () => {
      setLoading(true)
      const result = await SearchAPI.getMultiSearch(debounced)
      setSearchResult(result.data)
      setLoading(false)
    }
    fetchApi()
  }, [debounced])

  useEffect(() => {
    const handleClickOut = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setShowResult(false)
    }

    window.addEventListener('click', handleClickOut)
    return () => {
      window.removeEventListener('click', handleClickOut)
    }
  }, [])

  return (
    <div className='min-w-[60%] w-full mx-auto absolute bg-white z-[2]' ref={ref}>
      <div className='flex items-center justify-center w-full border-solid border-y border-slate-300'>
        <SearchIcon sx={{ fontSize: '1.8rem', cursor: 'text' }} />
        <input
          className=' focus:outline-none pt-[10px]  pb-[10px] leading-[24px] pl-[10px] mr-4 placeholder:italic placeholder:text-slate-400 w-[85%]'
          placeholder='Search for a movie, tv show, person... '
          onFocus={() => setShowResult(true)}
          onChange={handleChangeSearch}
          onKeyDown={handleKeyDown}
          value={searchValue}
        />
        <div>
          {loading ? (
            <Spinner color='red' size='1.8rem' />
          ) : (
            <ClearIcon
              sx={{ color: 'grey', fontWeight: 700, fontSize: '1.8rem', cursor: 'pointer' }}
              onClick={handleIconClickChange}
            />
          )}
        </div>
      </div>
      {showResult && (searchValue ? <SearchResult data={searchValue} /> : <SearchTrending />)}
    </div>
  )
}

export default SearchNav
