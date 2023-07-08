import PropTypes from 'prop-types'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import FavoriteIcon from '@mui/icons-material/Favorite'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import StarIcon from '@mui/icons-material/Star'
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import PercentBox from 'components/PercentBox'

const CardMovie = ({ title, posterPath, releaseDate, id }) => {
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

  return (
    <div className='min-w-mw150 w-w150 ml-5 bg-transparent relative'>
      <div className='w-full shadow-shadowCard h-h225 min-h-mh225 overflow-hidden rounded-lg bg-gray'>
        <div className='w-full h-full relative top-0 left-0'>
          <Link to={`/movie/${id}`} className='w-full kdksfj h-full'>
            <div>kfksaldjkf</div>
            <img src={posterPath} alt={title} className='w-full h-full' />
          </Link>
          <div className='absolute top-4 right-4 opacity-60 z-10 w-8 h-8 bg-graySoft hover:bg-lightBlue rounded-full'>
            <button type='submit' onClick={() => setOpen(!open)}>
              <div className='flex items-center justify-center '>
                <MoreHorizIcon sx={styles.mdIcon} />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className='w-full relative whitespace-normal flex content-start flex-wrap p-paddingCard '>
        <div className='absolute top-[-19px] left-4'>
          <PercentBox isBig={false} percent={30} />
        </div>
        <h2 className='font-bold hover:text-lightBlue'>
          <Link to={`/movie/${id}`}>{title}</Link>
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

CardMovie.propTypes = {
  title: PropTypes.string.isRequired,
  posterPath: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}
export default CardMovie
