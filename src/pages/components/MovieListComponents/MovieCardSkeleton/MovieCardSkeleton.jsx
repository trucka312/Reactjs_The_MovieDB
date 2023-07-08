import PercentBox from 'components/PercentBox'
import React from 'react'
import { BsImage } from 'react-icons/bs'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

const styles = {
  mdIcon: {
    height: '1.8rem',
    width: '1.8rem',
    stroke: 'black',
  },
}

const MovieCardSkeleton = () => {
  return (
    <div className='bg-white relative border-graySoft border rounded-[10px] shadow-lg card-movie-medium min-h-[38rem] flex flex-col'>
      <div className='w-full shadow-shadowCard bg-gray rounded-t-[10px] overflow-hidden h-[75%] flex-shrink-0'>
        <div className='w-full h-full relative '>
          <div className='flex h-full items-center justify-center animate-pulse'>
            <BsImage className='text-[8rem] text-grayIcon' />
          </div>

          <div className='absolute h-[2.2rem] w-[2.2rem] flex justify-center items-center top-4 right-4 opacity-60 z-2 '>
            <button type='submit'>
              <div className='flex items-center justify-center w-8 h-8 animate-pulse'>
                <MoreHorizIcon sx={styles.mdIcon} />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className='w-full relative whitespace-normal pt-[2.4rem] px-[1rem] pb-[1rem]'>
        <div className='absolute top-[-19px] left-4 animate-pulse'>
          <PercentBox type='small' percent={0} />
        </div>
        <div className='font-bold bg-grayButton text-normal line-clamp-2 leading-[1.2] w-full h-[1.6rem] mb-[0.4rem] animate-pulse' />

        <div className='text-textMeta leading-[1.2] bg-grayButton w-[60%] h-[1.4rem] animate-pulse' />
      </div>
    </div>
  )
}

export default MovieCardSkeleton
