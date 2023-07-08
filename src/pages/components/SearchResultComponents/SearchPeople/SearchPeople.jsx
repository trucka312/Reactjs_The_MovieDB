/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import _ from 'lodash'

import PaginationHandle from '../Pagination/index.js'
import SearchAPI from '../../../../apis/searchResultApi.js'

const SearchPeople = () => {
  let [searchParams] = useSearchParams()
  // eslint-disable-next-line no-unused-vars
  const [searchPeopleResult, setSearchPeopleResult] = useState([])
  const [totalPage, setTotalPage] = useState(0)
  const [page, setPage] = useState(1)
  useEffect(() => {
    // call api
    const fetchApi = async () => {
      const result = await SearchAPI.getPerson(searchParams.get('query'), page)
      setSearchPeopleResult(result.data.results)
      setTotalPage(result.data.total_pages)
    }
    fetchApi()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams.get('query'), page])

  const callbackFunction = (childData) => {
    setPage(childData)
  }

  return (
    <div>
      {!_.isEmpty(searchPeopleResult) ? (
        searchPeopleResult.map((item) => (
          <Link to={`/person/${item.id}`}>
            <div className='flex mb-[10px]' key={item.id}>
              {item.profile_path ? (
                <img
                  src={`https://www.themoviedb.org/t/p/w90_and_h90_face${item.profile_path}`}
                  alt='someone'
                  className='w-[70px] rounded-lg'
                />
              ) : (
                <img
                  src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'
                  alt='someone'
                  className='w-[70px] rounded-lg object-cover'
                />
              )}

              <div className='ml-[20px] pt-[12px]'>
                <h2 className='text-3xl font-semibold'>{item.name}</h2>
                <div href=' ' className='flex align-middle'>
                  <div className='pr-[4px]'>{item.known_for_department}</div>
                  {item.known_for.map((movie) => (
                    <Link to={`/movie/${movie.id}`}>
                      •
                      <span key={movie.id} className='pl-[3px]'>
                        {movie.title},
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p>There are no networks that matched your query.</p>
      )}
      {!_.isEmpty(searchPeopleResult) && totalPage > 1 ? (
        <PaginationHandle totalpage={!_.isNull(totalPage) ? totalPage : null} parentCallback={callbackFunction} />
      ) : (
        ''
      )}
    </div>
  )
}

export default SearchPeople
