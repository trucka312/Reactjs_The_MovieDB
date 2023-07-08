/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { useNavigate, createSearchParams } from 'react-router-dom'

import SearchIcon from '@mui/icons-material/Search'
import LocalMoviesIcon from '@mui/icons-material/LocalMovies'
import TvIcon from '@mui/icons-material/Tv'
import PersonIcon from '@mui/icons-material/Person'

import SearchAPI from '../../../../apis/searchResultApi.js'

const SearchResult = (data) => {
  const [searchMovie, setSearchMovie] = useState([])
  const [searchPeople, setSearchPeople] = useState([])
  const [searchTvshow, setSearchTvshow] = useState([])
  const [searchMulti, setSearchMulti] = useState([])
  const navigate = useNavigate()
  // eslint-disable-next-line react/destructuring-assignment
  // eslint-disable-next-line react/destructuring-assignment
  // call API lấy results
  // eslint-disable-next-line react/destructuring-assignment
  let value = data.data
  useEffect(() => {
    const fetchApi = async () => {
      const movie = await SearchAPI.getMultiSearch(value)
      const people = await SearchAPI.getPerson(value)
      const tvshow = await SearchAPI.getTvshow(value)
      const multi = await SearchAPI.getMultiSearch(value)
      // xử lí lấy ra 10 phần tử trên cùng của api trả về để hiển thị
      setSearchMovie(movie.data.results.slice(0, 1))
      // lấy 1 pt của people
      setSearchPeople(people.data.results.slice(0, 1))
      // lấy 1 pt ở tv show
      setSearchTvshow(tvshow.data.results.slice(0, 1))
      setSearchMulti(multi.data.results.slice(0, 10))
    }
    fetchApi()
  }, [value])

  const handleClick = (e, type) => {
    const queryValue = e.target.firstChild.nextSibling.innerText
    navigate({
      pathname: `/search/${type}`,
      search: createSearchParams({
        query: queryValue,
      }).toString(),
    })
  }

  const handleClickText = (e, type) => {
    navigate({
      pathname: `/search/${type}`,
      search: createSearchParams({
        query: e.target.textContent,
      }).toString(),
    })
  }

  return (
    <div>
      {/* khi có value thì hiện kết quả */}
      {!_.isEmpty(searchMovie) ? (
        <div
          onClick={(e) => handleClick(e, 'movie')}
          className='flex border-solid border-b border-slate-300 px-40 py-[2px] hover:bg-[#f5f5f5] cursor-pointer'
        >
          <LocalMoviesIcon sx={{ fontSize: '1.8rem', cursor: 'text', margin: '4px 8px 0  0' }} />
          <div className='font-size :1rem'>
            <strong onClick={(e) => handleClickText(e, 'movie')}>{searchMovie[0].name || searchMovie[0].title}</strong>
            {/* kiểm tra dữ liệu có chưa, có rồi thì hiện thằng đầu tiên */}
          </div>
          <div className='pl-[3px]'>in Movie</div>
        </div>
      ) : (
        ''
      )}

      {!_.isEmpty(searchTvshow) ? (
        <div
          onClick={(e) => handleClick(e, 'tv')}
          className='flex border-solid border-b border-slate-300 px-40 py-[2px] hover:bg-[#f5f5f5] cursor-pointer'
        >
          <TvIcon sx={{ fontSize: '1.8rem', cursor: 'text', margin: '4px 8px 0  0' }} />
          <p className='font-size :1rem'>
            <strong onClick={(e) => handleClickText(e, 'tv')}>{searchTvshow[0].name || searchTvshow[0].title}</strong>
          </p>
          <p className='pl-[3px] '>in TV Show</p>
        </div>
      ) : (
        ''
      )}

      {!_.isEmpty(searchPeople) ? (
        <div
          onClick={(e) => handleClick(e, 'person')}
          className='flex border-solid border-b border-slate-300 px-40 py-[2px] hover:bg-[#f5f5f5] cursor-pointer'
        >
          <PersonIcon sx={{ fontSize: '1.8rem', cursor: 'text', margin: '4px 8px 0  0' }} />
          <p className='font-size :1rem'>
            <strong onClick={(e) => handleClickText(e, 'person')}>
              {searchPeople[0].name || searchPeople[0].original_name}
            </strong>
          </p>
          <p className='pl-[3px]'>in People</p>
        </div>
      ) : (
        ''
      )}

      {/* map ra 10 kết quả tìm kiếm từ movie search */}
      {!_.isEmpty(searchMulti) ? (
        searchMulti.map((item) => (
          <div
            onClick={(e) => handleClick(e, item.media_type)}
            className='flex border-solid border-b border-slate-300 px-40 py-[2px] hover:bg-[#f5f5f5] cursor-pointer'
            key={item.id}
          >
            <SearchIcon sx={{ fontSize: '1.8rem', cursor: 'text', margin: '4px 8px 0  0' }} />
            <p className='font-size :1rem'>{item.title || item.name || item.original_name || item.original_name}</p>
          </div>
        ))
      ) : (
        <div className='w-full h-[100px] font-bold text-center border-b border-themeColor text-4xl pt-[40px] text-textMeta'>
          <h1>NO RESULTS</h1>
        </div>
      )}
    </div>
  )
}

SearchResult.prototype = {
  // truyền auto không pass ? để hỏi
  data: PropTypes.element,
}

export default SearchResult
