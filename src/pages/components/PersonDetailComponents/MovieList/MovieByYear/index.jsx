import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import _ from 'lodash'
import DotImg from '../DotImg'

const MovieByYear = ({ movieList }) => {
  return (
    <div className='border-gray border-b py-[1rem]'>
      {movieList.movies.map((item) => (
        <div className='flex items-center' key={uuidv4()}>
          <span className='px-[1.6rem] py-[.8rem] w-[6.4rem] text-center'>
            {_.isEmpty(movieList.year) ? '—' : movieList.year}
          </span>
          <DotImg movie={item} />
          <div className='px-[1.6rem] py-[.8rem] flex-1'>
            <Link to={`/movie/${item.id}`} className='font-semiBold hover:text-info'>
              {item.name}&nbsp;
            </Link>
            <Link to='/#' className='text-black text-opacity-50 hover:text-info'>
              {_.gte(item.episode_count, 0) && `(${item.episode_count} episodes)`}
            </Link>
            <span className='text-black text-opacity-50'> {item.job ? '... ' : 'as '}</span>
            <span className='font-[300]'>{item.character || item.job}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
MovieByYear.propTypes = {
  movieList: PropTypes.oneOfType([() => null, PropTypes.object]),
}
MovieByYear.defaultProps = {
  movieList: {},
}
export default MovieByYear
