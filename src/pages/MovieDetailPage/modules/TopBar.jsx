/* eslint-disable no-unused-vars */
import React from 'react'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

const TopBar = () => {
  const listMovieImg = useSelector((state) => state.movieimg)
  const dataMovie = useSelector((state) => state.movie.value)
  const { backdrops, poster } = listMovieImg
  const overview = [
    'Main',
    'Alternative Titles',
    'Cast & Crew',
    'Episode Groups',
    'Seasons',
    'Translations',
    'Changes',
    'Report',
    'Edit',
  ]
  const media = [
    {
      title: 'Backdrops',
      number: backdrops.length,
    },
    {
      title: 'Logos',
      number: 14,
    },
    {
      title: 'Posters',
      number: poster.length,
    },
  ]

  const discustion = [{ title: 'Overview' }, { title: 'General', number: 3 }, { title: 'Content issues', number: 63 }]
  return (
    <div className='h-[46px] TopBar'>
      <ul className='h-full top_bar gap-x-[40px] font-normal flex justify-center'>
        <li className='relative h-full overview'>
          <a href='Menu1'>Overview</a>
          <i className='pl-[6px] fa-solid fa-caret-down'> </i>
          <ul className='rounded-lg border'>
            {overview.map((item) => (
              <li className={`${item === 'Changes' ? 'mt-[14px]' : ''}`} key={uuidv4()}>
                <a href={item}>{item}</a>
              </li>
            ))}
          </ul>
        </li>
        <li className='media'>
          <a href='Media'>Media</a>
          <i className='pl-[6px] fa-solid fa-caret-down'> </i>
          <ul className='rounded-lg border'>
            {media.map((item) => (
              <li key={uuidv4()} className='flex gap-x-[23px] justify-between'>
                <a href={`#${item.title}`}>{item.title}</a>
                <span>{item.number}</span>
              </li>
            ))}
            <li className='flex justify-between items-center relative'>
              <a href='jdkasj'>Video</a>
              <i className='fa-solid fa-caret-right' />
              <ul className='px-2 left-full top-[0px] py-[10px] rounded-md'>
                <li className='flex justify-between gap-x-4 px-[20px]'>
                  <a href='adsfsad'>Trailer</a>
                  <span>1</span>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className='fandom'>
          <a href='fandom'>Fandom</a>
          <i className='pl-[6px] fa-solid fa-caret-down'> </i>
          <ul className='py-4  rounded-lg border'>
            <li className='flex gap-x-[23px] justify-between items-center relative'>
              <a href='jkda'>Discussions</a>
              <i className='fa-solid fa-caret-right' />
              <ul className='border top-0 left-full py-[10px] rounded-md'>
                {discustion.map((item) => (
                  <li className='flex items-center justify-between gap-x-[20px]' key={uuidv4()}>
                    <a href={item.title}>{item.title}</a>
                    <span>{item?.number}</span>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <a href='jkda'>Reviews</a>
            </li>
          </ul>
        </li>
        <li className='share mr-[11px]'>
          <a href='Share'>Share</a>
          <i className='pl-[6px] fa-solid fa-caret-down'> </i>
          <ul className='py-4  rounded-lg border'>
            <li>
              <a href='dkaklf'>Share Link</a>
            </li>
            <li>
              <a href='dkaklf'>Facebook </a>
            </li>
            <li>
              <a href='dkaklf'>Tweet</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default TopBar
