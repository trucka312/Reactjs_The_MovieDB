import PropTypes from 'prop-types'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import FavoriteIcon from '@mui/icons-material/Favorite'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import StarIcon from '@mui/icons-material/Star'
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import PercentBox from 'components/PercentBox'

const MovieCard = ({ title, posterPath, releaseDate, id, voteCount }) => {
  // 0. Init Value

  const styles = {
    mdIcon: {
      height: '1.8rem',
      width: '1.8rem',
      stroke: 'black',
    },
  }
  const TOOLTIP_ITEMS = [
    {
      id: 1,
      title: 'Add to list',
      Icon: <FormatListBulletedIcon />,
      url: '/',
    },
    {
      id: 2,
      title: 'Favorite',
      Icon: <FavoriteIcon />,
      url: '/',
    },
    {
      id: 3,
      title: 'Watchlist',
      Icon: <BookmarkIcon />,
      url: '/',
    },
    {
      id: 4,
      title: 'Your rating',
      Icon: <StarIcon />,
      url: '/',
    },
  ]

  // 1. Hooks
  const [open, setOpen] = useState(false)

  let menuRef = useRef()

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
    }
  })

  // 3.Init Value

  const posterURL = (poster) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${poster}`
  }

  return (
    <div className='relative bg-transparent min-w-mw150 w-w150 mr-[20px]'>
      <div className='w-full overflow-hidden rounded-lg shadow-shadowCard h-h225 min-h-mh225 bg-gray'>
        <div className='relative top-0 left-0 w-full h-full'>
          <Link to={`movie/${id}`} className='w-full h-full'>
            <img src={posterURL(posterPath)} alt={title} loading='lazy' className='w-full h-full' />
          </Link>
          <div className='absolute z-[2] rounded-full top-4 right-4  w-8 h-8  opacity-60 bg-graySoft hover:bg-lightBlue'>
            <button type='submit' onClick={() => setOpen(!open)}>
              <div className='flex items-center justify-center w-[20px] h-[20px]'>
                <MoreHorizIcon sx={styles.mdIcon} />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className='relative flex flex-wrap content-start w-full whitespace-normal p-paddingCard '>
        <div className='absolute top-[-19px] left-4'>
          <PercentBox isBig={false} percent={voteCount} />
        </div>
        <h2 className='font-bold hover:text-lightBlue'>
          <Link to={`movie/${id}`}>{title}</Link>
        </h2>
        <p className='text-textMeta'>{releaseDate}</p>
      </div>
      <div
        className={`absolute top-0 left-0 h-full w-full bg-black/[.5] backdrop-blur-xl z-20 rounded-lg ${
          open ? 'block' : 'hidden'
        }`}
      >
        <ul
          className='bg-white absolute top-10 left-40 flex flex-col items-center justify-center z-30 overflow-visible rounded border border-[#21252926] w-max  font-semibold'
          ref={menuRef}
        >
          {TOOLTIP_ITEMS.map((item) => {
            return (
              <li
                key={item.id}
                className='flex px-5 py-3 items-center border-b w-[120px] border-[#21252926] cursor-pointer hover:bg-darkBlue'
              >
                <div className='mr-2'>{item.Icon}</div>
                <p className='hover:text-white'>{item.title}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  posterPath: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  voteCount: PropTypes.number.isRequired,
}
export default MovieCard
