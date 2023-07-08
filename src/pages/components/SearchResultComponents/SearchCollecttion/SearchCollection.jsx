/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import _ from 'lodash'

import SearchAPI from '../../../../apis/searchResultApi.js'
import PaginationHandle from '../Pagination/index.js'

const SearchCollection = () => {
  let [searchParams] = useSearchParams()
  // eslint-disable-next-line no-unused-vars
  const [searchCollectionResult, setSearchCollectionResult] = useState([])
  const [totalPage, setTotalPage] = useState(0)
  const [page, setPage] = useState(1)

  useEffect(() => {
    // call api
    const fetchApi = async () => {
      const result = await SearchAPI.getCollection(searchParams.get('query'), page)
      setSearchCollectionResult(result.data.results)
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
      {!_.isEmpty(searchCollectionResult) ? (
        searchCollectionResult.map((item) => (
          <Link to key={item.id}>
            <div className='shadow-md rounded-2xl border-solid border border-slate-200 flex justify-start mb-8 '>
              <Link to>
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
                <Link to>
                  <h2 className='text-4xl font-semibold truncate  cursor-pointer'>{item.name}</h2>
                </Link>
                <p className='py-[15px] max-h-[80px] w-full truncate'>{item.overview}</p>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p>There are no networks that matched your query.</p>
      )}
      {/* Phân trang hay sao ý :)) */}
      {!_.isEmpty(searchCollectionResult) && totalPage > 1 ? (
        <PaginationHandle totalpage={!_.isNull(totalPage) ? totalPage : null} parentCallback={callbackFunction} />
      ) : (
        ''
      )}
    </div>
  )
}

export default SearchCollection
