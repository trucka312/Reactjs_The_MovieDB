import React, { useState, useEffect } from 'react'
import { useNavigate, createSearchParams } from 'react-router-dom'

import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import SearchIcon from '@mui/icons-material/Search'

import SearchAPI from '../../../../apis/searchResultApi.js'

const SearchTrending = () => {
  const [trendingResult, setTrendingResult] = useState([])
  const navigate = useNavigate()
  // call API lấy trending results
  useEffect(() => {
    const fetchApi = async () => {
      const result = await SearchAPI.getTrending()
      // xử lí lấy ra 10 phần tử trên cùng của api trả về để hiển thị
      setTrendingResult(result.data.results.slice(0, 10))
    }
    fetchApi()
  }, [])
  const handleClick = (e) => {
    navigate({
      pathname: '/search/movie',
      search: createSearchParams({
        query: e.target.textContent,
      }).toString(),
    })
  }

  return (
    <div>
      <div className='flex w-full py-[10px] bg-[#f5f5f5] border-solid border-b border-slate-300 px-[6%]'>
        <TrendingUpIcon sx={{ fontSize: '2.5rem' }} />
        <p className='font-bold text-4xl pl-[5px]'>Trending</p>
      </div>
      {/* khi không có nội dung thì hiện phần trending này */}
      {trendingResult.map((item) => (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div
          key={item.id}
          onClick={handleClick}
          className='flex px-40 py-[2px] border-solid border-b border-slate-300 hover:bg-[#f5f5f5] cursor-pointer'
        >
          <SearchIcon sx={{ fontSize: '1.8rem', cursor: 'text', margin: '4px 8px 0  0' }} />
          <p className='font-size :1rem'>{item.name || item.title}</p>
        </div>
      ))}
    </div>
  )
}

export default SearchTrending
