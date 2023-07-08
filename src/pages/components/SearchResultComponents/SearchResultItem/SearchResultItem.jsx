/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
/* eslint-disable consistent-return */

import React, { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import _ from 'lodash'

import PaginationHandle from '../Pagination/index.js'
import SearchAPI from '../../../../apis/searchResultApi.js'

const SearchResultItem = () => {
  let [searchParams] = useSearchParams()
  const query = searchParams.get('query') || ''
  // eslint-disable-next-line no-unused-vars
  const [searchMovieResult, setSearchMovieResult] = useState([])
  const [totalPage, setTotalPage] = useState(0)
  const [page, setPage] = useState(1)
  useEffect(() => {
    // call api
    const fetchApi = async () => {
      const result = await SearchAPI.getMovie(query, page, +getYear(query))
      setSearchMovieResult(result.data.results)
      setTotalPage(result.data.total_pages)
    }
    fetchApi()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams.get('query'), page])

  const callbackFunction = (childData) => {
    setPage(childData)
  }

  // get year
  const getYear = (value) => {
    const string = value.slice(-6, -4)
    if (string === 'y:') {
      const number = value.slice(-4)
      if (number > 999 && number < 9999) return number
    }
  }

  return (
    <div>
      {!_.isEmpty(searchMovieResult)
        ? searchMovieResult.map((item) => (
            <Link to={`/movie/${item.id}`} key={item.id}>
              <div
                key={item.id}
                className='flex justify-start mb-8 border border-solid shadow-md rounded-2xl border-slate-200 '
              >
                {!_.isNull(item.poster_path) ? (
                  <img
                    src={`https://www.themoviedb.org/t/p/w94_and_h141_bestv2${item.poster_path || item.backdrop_path}`}
                    alt=''
                    className='w-[94px] min-w-[94px] h-[141px] rounded-l-2xl'
                  />
                ) : (
                  <img
                    src='https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg'
                    alt=''
                    className='w-[94px] min-w-[94px] h-[141px] rounded-l-2xl object-cover'
                  />
                )}
                <div className='px-[15px] py-[10px] w-full truncate '>
                  <div>
                    <h2 className='text-4xl font-semibold truncate cursor-pointer'>{item.original_title}</h2>
                    <h3 className='text-[#9999] whitespace-nowrap'>{item.release_date}</h3>
                  </div>
                  <p className='py-[15px] max-h-[80px] w-full truncate'>{item.overview}</p>
                </div>
              </div>
            </Link>
          ))
        : 'There are no networks that matched your query.'}
      {!_.isEmpty(searchMovieResult) && totalPage > 1 ? (
        <PaginationHandle totalpage={!_.isNull(totalPage) ? totalPage : null} parentCallback={callbackFunction} />
      ) : (
        ''
      )}
    </div>
  )
}

export default SearchResultItem
