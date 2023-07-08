/* eslint-disable react/no-array-index-key */
import { LIST_LEADERBOARD } from 'apis/homeApi'
import './styles.css'

const LeaderBoard = () => {
  return (
    <div className='h-full w-full px-[4rem] py-[30px]'>
      <div className='flex items-center'>
        <h2 className='mr-[20px] whitespace-nowrap text-[24px] font-semibold'>Leaderboard</h2>
        <div className=''>
          <p>
            <span className='inline-block rounded-[50%] w-[12px] h-[12px] mr-[10px] bg-fromBluetoGreen' />
            All Time Edits
          </p>
          <p>
            <span className='inline-block rounded-[50%] w-[12px] h-[12px] mr-[10px] bg-fromRedtoOrange' />
            Edits This Week
          </p>
        </div>
      </div>
      <div className='mt-[20px]'>
        <ol className='flex flex-wrap w-full list-none md:flex-nowrap md:flex-col'>
          {LIST_LEADERBOARD.map((item, id) => {
            return (
              <li key={id} className='pr-[10px] flex items-center w-[50%] mb-[20px]'>
                <div className=' min-w-[56px] w-[56px] h-[56px] mr-[10px]'>
                  <img src={item.img} alt='' className='w-full h-full object-cover rounded-[50%]' />
                </div>
                <div className='flex flex-wrap items-center content-center'>
                  <h3 className='text-[1em] font-semibold '>{item.name}</h3>
                  <div className='w-full h-[8px] flex items-center '>
                    <div
                      className='bg-fromBluetoGreen rounded-[4px] h-full max-w-[300px]'
                      style={{ width: `${item.all}px ` }}
                    />
                    <h4 className='ml-[4px] text-[0.8em]'>{item.all}</h4>
                  </div>
                  <div className='w-full h-[8px] flex items-center mt-[5px]'>
                    <div
                      className='bg-fromRedtoOrange rounded-[4px] h-full max-w-[300px]'
                      style={{ width: `${item.ed}px` }}
                    />
                    <h4 className='ml-[4px] text-[0.8em]'>{item.ed}</h4>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}

export default LeaderBoard
