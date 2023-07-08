/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from 'react'
import MovieCard from 'components/Card/MovieCard'
import http from 'apis/http'
import { SwiperContainer, SwiperItem } from 'components/Swiper'
import { ENV_KEY } from 'apis/homeApi'
import _ from 'lodash'
import SkeletonCard from 'components/Card/SkeletonCard'

const MovieList = ({ endPoint }) => {
  // 0. Hooks

  const [Movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchMovie = async () => {
      const { data } = await http.get(endPoint, {
        params: {
          api_key: ENV_KEY,
        },
      })
      setMovies(data.results)
      setIsLoading(false)
    }
    fetchMovie()
  }, [endPoint])

  return (
    <div className='w-full pt-10 min-h-[355px]'>
      <SwiperContainer id={_.uniqueId('swiper-')} className='w-full'>
        {isLoading && <SkeletonCard cards={10} />}
        {Movies &&
          Movies.map((movie, index) => {
            return (
              <SwiperItem key={index} gap='10px'>
                <MovieCard
                  key={index}
                  title={movie.title || movie.name}
                  posterPath={movie.poster_path}
                  releaseDate={movie.release_date || movie.first_air_date}
                  id={movie.id}
                  voteCount={Math.round(movie.vote_average * 10)}
                  mediaType={movie.media_type}
                />
              </SwiperItem>
            )
          })}
      </SwiperContainer>
    </div>
  )
}

export default MovieList
