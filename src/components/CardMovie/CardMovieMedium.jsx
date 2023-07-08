/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import FavoriteIcon from '@mui/icons-material/Favorite'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import StarIcon from '@mui/icons-material/Star'
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef, forwardRef } from 'react'
import PercentBox from 'components/PercentBox'
import { BsImage } from 'react-icons/bs'
import _ from 'lodash'
import formatDate from 'utils/formatDate'

const CardMovieMedium = ({ title, posterPath, releaseDate, id, score }, ref) => {
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
    <div
      className='bg-white relative border-graySoft border rounded-[10px] shadow-lg card-movie-medium min-h-[38rem] flex flex-col '
      ref={ref}
    >
      <div className='w-full shadow-shadowCard bg-gray rounded-t-[10px] overflow-hidden h-[75%] flex-shrink-0'>
        <div className='w-full h-full relative '>
          <Link to={`/movie/${id}`} className='w-full h-full '>
            {_.isNull(posterPath) ? (
              <div className='flex h-full items-center justify-center'>
                <BsImage className='text-[8rem] text-grayIcon' />
              </div>
            ) : (
              <img
                src={`https://image.tmdb.org/t/p/w500${posterPath}`}
                alt={title}
                className='w-full h-full object-cover'
                title={title}
                loading='lazy'
              />
            )}
          </Link>
          <div className='absolute h-[2.2rem] w-[2.2rem] flex justify-center items-center top-4 right-4 opacity-60 z-2 bg-graySoft hover:bg-lightBlue rounded-full'>
            <button type='submit' onClick={() => setOpen(!open)}>
              <div className='flex items-center justify-center w-8 h-8 '>
                <MoreHorizIcon sx={styles.mdIcon} />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className='w-full relative whitespace-normal pt-[2.4rem] px-[1rem] pb-[1rem]'>
        <div className='absolute top-[-19px] left-4'>
          <PercentBox type='small' percent={score * 10} />
        </div>
        <h2 className='font-bold hover:text-lightBlue text-normal w-fit line-clamp-2 leading-[1.2]'>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p className='text-textMeta leading-[1.2]'>{formatDate(releaseDate)}</p>
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

CardMovieMedium.propTypes = {
  title: PropTypes.string.isRequired,
  posterPath: PropTypes.any.isRequired,
  releaseDate: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
}
export default forwardRef(CardMovieMedium)
