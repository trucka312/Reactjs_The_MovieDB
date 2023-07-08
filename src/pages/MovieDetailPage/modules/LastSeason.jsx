/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable quotes */
import { NavLink } from 'react-router-dom'
import Heading from '../../components/MovieDetailComponents/Heading'

const LastSeason = (props) => {
  const string =
    "The truth revealed through the memories of Grisha's journals shakes all of Eren's deepest beliefs. There is no rugged but free land beyond the walls. There is a whole other world, equally full of oppression and war. Suddenly, the ambitions that have animated the Survey Corps for generations seem small and naive. What is there left to fight for?"
  const {
    src = 'https://www.themoviedb.org/t/p/w260_and_h390_bestv2/cATsDNYK2AMAKh8w9xYLi9wrVti.jpg',
    title = 'The Final Season',
    year = '2020',
    content = string,
    episode = '28 Episodes',
    ...rest
  } = props
  return (
    <div className='LastSeason relative border-b border-grayBold py-[30px]' {...rest}>
      <div className='relative flex gap-x-7'>
        <Heading className='pl-0 mb-[21px] '>Last Season</Heading>
        <div className='handleHover z-[2] left-[120px] bg-white p-4 Air_date'>
          <li className='z-20 mt-1 cursor-pointer'>Original Air Date</li>
          <ul className='flex flex-col border border-grayBold'>
            <li>
              <NavLink>All Episodes (Absolute)</NavLink>
            </li>
            <li>
              <NavLink>All Episodes + OVAs (Absolute)</NavLink>
            </li>
            <li>
              <NavLink>All episodes + OVAs in logical order (Absolute)</NavLink>
            </li>
            <li>
              <NavLink>German DVD / Bluray Crunchyroll (vormals Kazé) (DVD)</NavLink>
            </li>
            <li>
              <NavLink>Story Arcs (Story Arc)</NavLink>
            </li>
            <li>
              <NavLink>Original Production (Production)</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className='flex w-full overflow-hidden border shadow-md border-[rgb(227_227_227)] rounded-2xl'>
        <img src={src} alt='' className='w-[130px] h-[195px]' />
        <div className='conent p-[20px]'>
          <Heading className='mb-0 pl-0 text-[24px]'>{title}</Heading>
          <b className='font-bold'>{`${year} | ${episode}`}</b>
          <p className='mt-[20px]'>{content}</p>
        </div>
      </div>
      <NavLink className='text-[1.1em] inline-block font-semibold mt-[20px] hover:text-textMeta '>
        View All Seasons
      </NavLink>
    </div>
  )
}
export default LastSeason
