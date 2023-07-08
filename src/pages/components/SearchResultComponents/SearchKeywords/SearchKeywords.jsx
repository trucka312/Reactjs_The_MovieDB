/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import _ from 'lodash'

import PaginationHandle from '../Pagination/index.js'
import SearchAPI from '../../../../apis/searchResultApi.js'

const SearchKeywords = () => {
  let [searchParams] = useSearchParams()
  // eslint-disable-next-line no-unused-vars
  const [searchKeywordsResult, setSearchKeywordsResult] = useState([])
  const [totalPage, setTotalPage] = useState(0)
  const [page, setPage] = useState(1)
  useEffect(() => {
    // call api
    const fetchApi = async () => {
      const result = await SearchAPI.getKeyword(searchParams.get('query'), page)
      setSearchKeywordsResult(result.data.results)
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
      {!_.isEmpty(searchKeywordsResult) ? (
        searchKeywordsResult.map((item) => (
          <Link to className='mt-[10px]' key={item.id}>
            <div>
              <Link to>{item.name}</Link>
            </div>
          </Link>
        ))
      ) : (
        <p>There are no networks that matched your query.</p>
      )}
      {!_.isEmpty(searchKeywordsResult) && totalPage > 1 ? (
        <PaginationHandle totalpage={!_.isNull(totalPage) ? totalPage : null} parentCallback={callbackFunction} />
      ) : (
        ''
      )}
    </div>
  )
}

export default SearchKeywords
