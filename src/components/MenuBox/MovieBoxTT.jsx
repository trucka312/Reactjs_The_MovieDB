/* eslint-disable max-len */
import PropTypes from 'prop-types'
import { IMG_KNOWNFOR } from 'constants/fallBack'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import StarIcon from '@mui/icons-material/Star'
import '../../assets/css/PersonDetail.css'
import FavoriteIcon from '@mui/icons-material/Favorite'
import BookmarkIcon from '@mui/icons-material/Bookmark'

const MovieBoxTT = ({ movie }) => {
  return (
    <div className='flex text-white'>
      <div className='w-[9.4rem] h-[14.1rem]'>
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
            loading='lazy'
          />
        )}
      </div>
      <div className='pl-[2rem] flex-1 flex flex-col justify-between mb-[.5rem]'>
        <div className='flex items-center'>
          <h2 className='font-bold text-[2.4rem] flex-1 text__down1'>
            <Link to={`/movie/${movie.id}`}>{movie.name}</Link>
          </h2>
          <div className='h-[2.4rem] leading-[2.4rem] bg-info pl-[.6rem] pr-[.7rem] text-[1.3rem] font-semiBold ml-[1rem] rounded-[.5rem]'>
            <StarIcon sx={{ marginBottom: '.3rem' }} />
            <span>{movie.vote_average}</span>
          </div>
        </div>
        <p className='text-[1.35rem] text__down2'>{movie.overview}</p>
        <div className='mt-[2rem]'>
          <span className='py-[1.5rem] px-[1.1rem] bg-info rounded-md cursor-pointer'>
            <FavoriteIcon sx={{ fontSize: '1.8rem' }} />
          </span>
          <span className='ml-[1rem] py-[1.5rem] px-[1.1rem] bg-info rounded-md cursor-pointer'>
            <BookmarkIcon sx={{ fontSize: '1.8rem' }} />
          </span>
          <span className='ml-[1rem] py-[1.5rem] px-[1.1rem] bg-info rounded-md cursor-pointer'>
            <StarIcon sx={{ fontSize: '1.8rem' }} />
          </span>
        </div>
      </div>
    </div>
  )
}
MovieBoxTT.propTypes = {
  movie: PropTypes.oneOfType([() => null, PropTypes.object]),
}
MovieBoxTT.defaultProps = {
  movie: {},
}
export default MovieBoxTT
