import { SwiperContainer, SwiperItem } from 'components/Swiper'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import { IMG_KNOWNFOR } from 'constants/fallBack'
import { useSelector } from 'react-redux'
import { loadingData, knownForSlide } from 'app/redux/selectors'
import { Skeleton } from '@mui/material'

const KnownFor = () => {
  const slideMovieArr = useSelector(knownForSlide)
  const loading = useSelector(loadingData)
  return (
    <div>
      {!loading ? (
        <section className='mt-[3rem]'>
          <h3 className='text-[2.08rem] font-semiBold mb-[.8rem]'>Known For</h3>
          <SwiperContainer className='ml-[-1rem]' id='slide-id'>
            {slideMovieArr.map((movie) => (
              <SwiperItem gap='10px' key={movie.id}>
                <div className='w-[13.9rem] h-[19.5rem]'>
                  <Link to={`/movie/${movie.id}`}>
                    {!_.isNil(movie.poster_path) ? (
                      <img
                        className='rounded-[.8rem] w-full h-full'
                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                        alt={movie.original_title}
                        loading='lazy'
                      />
                    ) : (
                      <img
                        className='rounded-[.8rem] w-full h-full object-cover'
                        src={IMG_KNOWNFOR}
                        alt='fallback-img'
                      />
                    )}
                  </Link>
                </div>
                <p className='capitalize text-[1.44rem] text-center w-[13.9rem]'>
                  <Link className='hover:text-info' to='/#'>
                    {movie.original_title}
                  </Link>
                </p>
              </SwiperItem>
            ))}
          </SwiperContainer>
        </section>
      ) : (
        <Skeleton variant='rounded' width='100%' height='15rem' animation='wave' />
      )}
    </div>
  )
}
export default KnownFor
