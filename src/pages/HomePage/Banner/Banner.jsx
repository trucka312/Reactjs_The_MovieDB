import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import http from 'apis/http'
import { ENV_KEY } from 'apis/homeApi'
import SearchButton from '../SearchButton'

const Banner = () => {
  // 0. Hooks
  const [input, setInput] = useState('')
  const [movie, setMovie] = useState({})

  useEffect(() => {
    const fetchMovie = async () => {
      const { data } = await http.get(endPoint, {
        params: {
          api_key: ENV_KEY,
        },
      })
      setMovie(data.results[Math.floor(Math.random() * data.results.length)])
    }
    fetchMovie()
  }, [])
  // 1. Init Value
  const navigate = useNavigate()
  const endPoint = '/trending/all/week'
  // 2. Function Handler
  const handleSeach = () => {
    navigate(`/search/movie?query=${input}`)
  }
  const handleOnChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <div
      className='min-h-[300px] h-[calc(100vh/2.5)] bg-cover'
      style={{
        backgroundImage: `linear-gradient(to right,
      rgba(3, 37, 65, 0.8) 0%,
      rgba(3, 37, 65, 0) 100%
    ), url(
      "https://image.tmdb.org/t/p/original${movie?.backdrop_path}"
    )`,
      }}
    >
      <div className='flex flex-col justify-evenly h-full w-full py-8 px-[4rem]'>
        <div className=''>
          <h1 className='text-7xl font-extrabold text-white'>Welcome.</h1>
          <h2 className='text-5xl font-bold text-white'>
            Millions of movies, TV show and people to discover. Explore now.
          </h2>
        </div>
        <div className='relative'>
          <input
            onChange={handleOnChange}
            value={input}
            type='text'
            placeholder='Search for movie, tv show, person.....'
            className='w-[99%] h-[46px] rounded-[30px] py-2.5 px-5 outline-none'
          />
          <div className='absolute right-1 top-0'>
            <SearchButton onClick={handleSeach} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
