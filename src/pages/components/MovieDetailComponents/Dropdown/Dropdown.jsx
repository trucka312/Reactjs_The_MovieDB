/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
import _, { debounce } from 'lodash'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { getLanguages } from '../../../../apis/movieDetailApi.js'
import { setResultSearch } from '../../../../app/redux/slices/movieImgSlice.js'

const Dropdown = ({ setValue, value }) => {
  const dispatch = useDispatch()
  const resultSearch = useSelector((state) => state.movieimg.resultSearch)
  const [state, setState] = useState(false)
  const [language, setLanguage] = useState([])
  useEffect(() => {
    const callAPI = async () => {
      const result = await getLanguages()
      const languages = result.data.filter((item) => !_.isEmpty(item.name))
      setLanguage(languages)
      dispatch(setResultSearch(languages))
    }
    callAPI()
  }, [])

  // logic search
  const handleChooseLanguage = (data) => {
    setValue(data)
    toast.success('The language has been uploaded!')
    setState(false)
    dispatch(setResultSearch(language))
  }
  const handleChange = debounce((e) => {
    const keyword = e.target.value
    const result = resultSearch.filter((item) => _.includes(item.english_name.toLowerCase(), keyword.toLowerCase()))
    if (e.target.value === '') {
      dispatch(setResultSearch(language))
    } else {
      dispatch(setResultSearch(result))
    }
  }, 1000)
  return (
    <div>
      <div onClick={() => setState(!state)} className='show_search'>
        <span className='result'>{value.name}</span>
        <i className='fa-solid fa-caret-down' />
      </div>
      {state && (
        <div className='search_part'>
          <div className='input_search'>
            <input onChange={handleChange} placeholder='Enter your keyword' type='text' />
            <i className='fa-solid fa-magnifying-glass' />
          </div>
          <div className='search_result'>
            {resultSearch ? (
              resultSearch.map((item) => (
                <p
                  onClick={() => handleChooseLanguage({ key: item.iso_639_1, name: item.english_name })}
                  key={uuidv4()}
                >
                  {item.english_name}
                </p>
              ))
            ) : (
              <div>No founded data</div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Dropdown
