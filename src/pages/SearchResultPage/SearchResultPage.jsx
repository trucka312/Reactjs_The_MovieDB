/* eslint-disable no-lone-blocks */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react'
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates'
import { NavLink, Outlet, useSearchParams } from 'react-router-dom'
import _ from 'lodash'

import SearchAPI from '../../apis/searchResultApi.js'

import SearchNav from '../../components/common/SearchNav/SearchNav.jsx'

const SearchResultPage = () => {
  let [searchParams] = useSearchParams()
  const query = searchParams.get('query') || ''
  // eslint-disable-next-line no-unused-vars
  const [searchValue, setSearchValue] = useState('')
  const [totalMovie, setTotalMovie] = useState(null)
  const [totalPeople, setTotalPeople] = useState(null)
  const [totalTv, setTotalTv] = useState(null)
  const [totalKeyword, setTotalKeyword] = useState(null)
  const [totalCollection, setTotalCollection] = useState(null)
  const [totalCompany, setTotalCompany] = useState(null)
  const [totalNetwork, setTotalNetwork] = useState(null)
  // lấy dữ liệu input truyền vào để search query url
  // logic search
  useEffect(() => {
    // call api
    const fetchApi = async () => {
      const resultMovie = await SearchAPI.getMovie(query)
      const resultTv = await SearchAPI.getTvshow(query)
      const resultPerson = await SearchAPI.getPerson(query)
      const resultKeyword = await SearchAPI.getKeyword(query)
      const resultCollection = await SearchAPI.getCollection(query)
      const resultCompany = await SearchAPI.getCompany(query)
      setTotalMovie(resultMovie.data.total_results)
      setTotalTv(resultTv.data.total_results)
      setTotalPeople(resultPerson.data.total_results)
      setTotalKeyword(resultKeyword.data.total_results)
      setTotalCollection(resultCollection.data.total_results)
      setTotalCompany(resultCompany.data.total_results)
      setTotalNetwork(resultCompany.data.total_results)
    }
    fetchApi()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  let searchMenu = [
    { id: 1, text: 'Movie', link: '/search/movie', totalResult: !_.isNull(totalMovie) ? totalMovie : 0 },
    { id: 2, text: 'Tv Shows', link: '/search/tv', totalResult: !_.isNull(totalTv) ? totalTv : 0 },
    { id: 3, text: 'People', link: '/search/person', totalResult: !_.isNull(totalPeople) ? totalPeople : 0 },
    { id: 4, text: 'Keywords', link: '/search/keyword', totalResult: !_.isNull(totalKeyword) ? totalKeyword : 0 },
    {
      id: 5,
      text: 'Collections',
      link: '/search/collection',
      totalResult: !_.isNull(totalCollection) ? totalCollection : 0,
    },
    { id: 6, text: 'Companies', link: '/search/company', totalResult: !_.isNull(totalCompany) ? totalCompany : 0 },
    { id: 7, text: 'Networks', link: '/search/network', totalResult: !_.isNull(totalNetwork) ? totalNetwork : 0 },
  ]
  return (
    <div className='relative'>
      <SearchNav handleSentData={(value) => setSearchValue(value)} />
      {/* search body */}
      <div className='flex w-[85%] mx-auto pt-28 pb-[20px]'>
        {/* search left */}
        <div className='max-w-[20%]'>
          {/* search menu */}
          <div className='rounded-2xl border-solid border border-slate-200 overflow-hidden'>
            <div>
              <h3 className='p-8 font-semibold text-3xl  bg-lightBlue text-white'>Search Results</h3>
            </div>
            <ul className='py-[8px]'>
              {searchMenu.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={!_.isEmpty(item.link) ? `${item.link}?query=${query}` : `${item.link}`}
                    className='w-full h-full flex justify-between px-[20px] py-[10px]'
                    style={({ isActive }) => {
                      return {
                        fontWeight: isActive ? 'bold' : '',
                        color: isActive ? '#700c92' : '#301515',
                        backgroundColor: isActive ? 'rgba(0,0,0,0.08)' : '#fff',
                      }
                    }}
                  >
                    <div>{item.text}</div>
                    <div>{item.totalResult}</div>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* search tip */}
          <div className='flex flex-wrap justify-start mt-[20px]'>
            <p>
              <TipsAndUpdatesIcon sx={{ fontSize: '2.5rem', paddingRight: '8px' }} /> Tip: You can use the 'y:' filter
              to narrow your results by year. Example: 'star wars y:1977'.
            </p>
          </div>
        </div>
        {/* search right */}
        <div className='pl-12 w-[80%] mb-40'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default SearchResultPage
