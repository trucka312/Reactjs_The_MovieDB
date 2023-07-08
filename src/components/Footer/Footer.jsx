import React from 'react'
import { NavLink } from 'react-router-dom'
import MobileHeaderIcon from '../../assets/image/MobileHeader.svg'

const Footer = () => {
  return (
    <footer className='flex relative z-[1] justify-center items-end mx-auto text-white bg-primary gap-x-[40px] pt-[41px] pb-[91px] md:block md:py-[4rem] md:px-[2rem]'>
      <div className='logo'>
        <img src={MobileHeaderIcon} alt='icon' className='w-[130px] h-[94px] mb-[46px] md:hidden' />
        <button className='w-full p-3 font-bold text-[18.72px] bg-white rounded-md text-info md:w-[70%]' type='button'>
          Team one
        </button>
      </div>
      <div className='flex info gap-x-10 md:block'>
        <div className='basics md:mb-[3rem] md:mt-[3rem]'>
          <h3 className='font-bold text-[20.16px]'>THE BASIC</h3>
          <ul>
            <li className='flex flex-col text-[17.28px] leading-[23px]'>
              <NavLink to='/404page'>About TMDB</NavLink>
              <NavLink to='/404page'>Contact Us</NavLink>
              <NavLink>Support Forums</NavLink>
              <NavLink>API</NavLink>
              <NavLink>System Status</NavLink>
            </li>
          </ul>
        </div>
        <div className='involved md:mb-[3rem]'>
          <h3 className='font-bold text-[20.16px]'>GET INVOLVED</h3>
          <ul>
            <li className='flex flex-col text-[17.28px] leading-[23px]'>
              <NavLink to='/404page'>Contribution Bible</NavLink>
              <NavLink to='/404page'>Add New Movie</NavLink>
              <NavLink to='/404page'>Add New TV Show</NavLink>
            </li>
          </ul>
        </div>
        <div className='community md:mb-[3rem]'>
          <h3 className='font-bold text-[20.16px]'>COMMUNITY</h3>
          <ul>
            <li className='flex flex-col text-[17.28px] leading-[23px]'>
              <NavLink to='/404page'>Guidelines</NavLink>
              <NavLink to='/404page'>Discussions</NavLink>
              <NavLink to='/404page'>Leaderboard</NavLink>
              <NavLink to='/404page'>Twitter</NavLink>
            </li>
          </ul>
        </div>
        <div className='legal md:mb-[3rem]'>
          <h3 className='font-bold text-[20.16px]'>LEGAL</h3>
          <ul>
            <li className='flex flex-col text-[17.28px] leading-[23px]'>
              <NavLink to='/404page'>Terms of Use</NavLink>
              <NavLink to='/404page'>API Terms of Use</NavLink>
              <NavLink to='/404page'>Privacy Policy</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
