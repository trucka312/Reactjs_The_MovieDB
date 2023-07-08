/* eslint-disable prettier/prettier */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import _ from 'lodash'

import SearchAPI from '../../../../apis/searchResultApi.js'
import PaginationHandle from '../Pagination/index.js'

const SearchCompanies = () => {
  let [searchParams] = useSearchParams()
  // eslint-disable-next-line no-unused-vars
  const [searchCompanyResult, setSearchCompanyResult] = useState([])
  const [totalPage, setTotalPage] = useState(0)
  const [page, setPage] = useState(1)
  useEffect(() => {
    // call api
    const fetchApi = async () => {
      const result = await SearchAPI.getCompany(searchParams.get('query'), page)
      setSearchCompanyResult(result.data.results)
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
      {!_.isEmpty(searchCompanyResult) ? (
        searchCompanyResult.map((item) => (
          <Link to>
            <div
              className='flex items-center h-[40px] border-t border-solid border-slate-500 hover:text-lightBlueMore'
              key={item.id}
            >
              <ul className='w-full'>
                <li className=' border-solid border-slate-500 w-full'>
                  {!_.isNull(item.logo_path) ? (
                    <img src={`https://www.themoviedb.org/t/p/h30${item.logo_path}`} alt='' />
                  ) : (
                    <div>
                      <span className='text-3xl'>{item.name}</span>
                      <span className='bg-secondary text-light ml-[4px] rounded p'>{item.origin_country}</span>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </Link>
        ))
      ) : (
        <p>There are no networks that matched your query.</p>
      )}
      {!_.isEmpty(searchCompanyResult) && totalPage > 1 ? (
        <PaginationHandle totalpage={!_.isNull(totalPage) ? totalPage : null} parentCallback={callbackFunction} />
      ) : (
        ''
      )}
    </div>
  )
}

export default SearchCompanies
