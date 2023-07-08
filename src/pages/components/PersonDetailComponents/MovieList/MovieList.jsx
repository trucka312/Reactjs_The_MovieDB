import { v4 as uuidv4 } from 'uuid'
import { useSelector } from 'react-redux'
import { movieSelector } from 'app/redux/selectors'
import { Fragment } from 'react'
import FilterMovies from './FilterMovie'
import MovieByYear from './MovieByYear'

const MovieList = () => {
  const movieArr = useSelector(movieSelector)
  return (
    <section className='relative'>
      {movieArr.map((movies) => (
        <div key={uuidv4()}>
          <h3 className='font-semiBold mt-[2rem] text-[2.08rem]'>{movies.department}</h3>
          <div className='w-full border-[1px] mt-[1rem] block border-gray shadow-[0px_2px_8px_rgba(0,0,0,0.1)]'>
            {movies.data.map((movie) => (
              <Fragment key={uuidv4()}>
                <MovieByYear movieList={movie} />
              </Fragment>
            ))}
          </div>
        </div>
      ))}
      {/* credit filter */}
      <FilterMovies />
    </section>
  )
}
export default MovieList
