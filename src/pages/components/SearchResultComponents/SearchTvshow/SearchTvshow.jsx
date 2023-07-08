/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import _ from 'lodash'

import PaginationHandle from '../Pagination/index.js'
import SearchAPI from '../../../../apis/searchResultApi.js'

const SearchTvshow = () => {
  let [searchParams] = useSearchParams()
  // eslint-disable-next-line no-unused-vars
  const [searchTvshowResult, setSearchTvshowResult] = useState([])
  const [totalPage, setTotalPage] = useState(0)
  const [page, setPage] = useState(1)
  useEffect(() => {
    // call api
    const fetchApi = async () => {
      const result = await SearchAPI.getTvshow(searchParams.get('query'), page)
      setSearchTvshowResult(result.data.results)
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
      {!_.isEmpty(searchTvshowResult) ? (
        searchTvshowResult.map((item) => (
          <div className='shadow-md rounded-2xl border-solid border border-slate-200 flex justify-start mb-8 '>
            <Link to={`/movie/${item.id}`}>
              {!_.isNull(item.poster_path) ? (
                <img
                  src={`https://www.themoviedb.org/t/p/w94_and_h141_bestv2${item.poster_path}`}
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
            </Link>
            <div className='px-[15px] py-[10px] w-full truncate '>
              <div>
                <Link to>
                  <h2 className='text-4xl font-semibold truncate  cursor-pointer'>{item.original_name}</h2>
                </Link>
                <Link to>
                  <h3 className='text-[#9999] whitespace-nowrap'>{item.first_air_date}</h3>
                </Link>
              </div>
              <p className='py-[15px] max-h-[80px] w-full truncate'>{item.overview}</p>
            </div>
          </div>
        ))
      ) : (
        <p>There are no networks that matched your query.</p>
      )}
      {!_.isEmpty(searchTvshowResult) && totalPage > 1 ? (
        <PaginationHandle totalpage={!_.isNull(totalPage) ? totalPage : null} parentCallback={callbackFunction} />
      ) : (
        ''
      )}
    </div>
  )
}

export default SearchTvshow
