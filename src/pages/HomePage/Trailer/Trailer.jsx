/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import SwitchToggle from 'components/SwitchToggle'
import { SwiperContainer, SwiperItem } from 'components/Swiper'
import http from 'apis/http'
import { Link } from 'react-router-dom'
import YouTube from 'react-youtube'
import { AiOutlineClose } from 'react-icons/ai'
import { BsCaretRightFill } from 'react-icons/bs'
import { ENV_KEY } from 'apis/homeApi'

const Trailer = ({ title, items }) => {
  // 0. Hooks
  const [toggleValue, setToggleValue] = useState(items[0])
  const [Movies, setMovies] = useState([])
  const [open, setOpen] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState({})

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await http.get(toggleValue.endPoint, {
        params: {
          api_key: ENV_KEY,
        },
      })
      setMovies(data.results)
      setSelectedMovie(data.results[0])
    }
    fetchMovies()
  }, [toggleValue.endPoint])

  // 1. Handler Function
  const onToggle = (selectedValue) => {
    setToggleValue(selectedValue)
  }

  // const handleClick = () => {
  //   setOpen(!open)
  //   // if (trailerURL) {
  //   //   setTrailerURL('')
  //   // } else {
  //   //   movieTrailer(movie?.title || movie?.original_title || movie?.name || movie?.original_name || '')
  //   //     .then((url) => {
  //   //       const urlParams = new URLSearchParams(new URL(url).search)
  //   //       setTrailerURL(urlParams.get('v'))
  //   //     })
  //   //     .catch((err) => console.log(err))
  //   // }
  // }

  // 2. Init Value
  const opts = {
    height: '740',
    width: '1350',
    playerVars: {
      autoplay: 1,
    },
  }

  const BASE_URL = 'https://www.themoviedb.org'

  const bg = {
    backgroundImage: `linear-gradient(to right, rgba(3,37,65, 0.8) 100%, rgba(3,37,65,0) 100%), url(${BASE_URL}/t/p/w1920_and_h427_multi_faces${selectedMovie.backdrop_path})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    transition: 'all',
  }

  return (
    <div className='bg-center w-full last:l pt-[30px] pl-[4rem] relative over ' style={bg}>
      <div className='flex items-center gap-5'>
        <h2 className='font-semibold text-4xl text-white'>{title}</h2>
        <SwitchToggle
          items={items}
          onToggle={onToggle}
          isToggle={toggleValue.label === items[1].label}
          textColor='text-white'
          bgColor='bg-fromBluetoGreen'
          border='border-greenGradient'
        />
      </div>
      <div
        className={`fixed top-0 left-0 z-[100] flex justify-center items-center h-screen w-screen bg-black/[.8] ${
          open ? 'block' : 'hidden'
        }`}
      >
        <div
          className='absolute top-[130px] right-[300px] text-white cursor-pointer text-4xl'
          onClick={() => setOpen(!open)}
        >
          <AiOutlineClose />
        </div>
        <YouTube opts={opts} />
      </div>
      <SwiperContainer className='w-full pt-10 static min-h-[300px]' id='trailer'>
        {Movies &&
          Movies.map((movie, index) => {
            return (
              <SwiperItem key={index} gap='10px'>
                <div
                  className='rounded-xl w-[300px] min-w-[300px] max-w-[300px] bg-transparent border-none shadow-none flex flex-wrap cursor-pointer mr-[20px]'
                  key={index}
                  onMouseOver={() => setSelectedMovie(movie)}
                  onClick={() => setOpen(!open)}
                >
                  <div className='h-[calc(300px/1.78)] transform transition duration-500 hover:scale-110 overflow-hidden w-full rounded-xl'>
                    <div className=' w-full h-full relative'>
                      <img
                        src={`https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${movie.backdrop_path}`}
                        alt=''
                        className='w-full h-full object-cover transform transition duration-500 hover:scale-110'
                      />
                      <div className='absolute top-[50%] left-[50%] text-white text-[50px] translate-x-[-50%] translate-y-[-50%]'>
                        <BsCaretRightFill />
                      </div>
                    </div>
                  </div>
                  <div className='flex content-start justify-center flex-wrap mt-[10px] w-full'>
                    <h2 className='text-3xl text-white font-bold '>
                      <Link to={`${movie.media_type}/${movie.id}`}>{movie.title || movie.name}</Link>
                    </h2>
                  </div>
                </div>
              </SwiperItem>
            )
          })}
      </SwiperContainer>
    </div>
  )
}

Trailer.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
}

export default Trailer
