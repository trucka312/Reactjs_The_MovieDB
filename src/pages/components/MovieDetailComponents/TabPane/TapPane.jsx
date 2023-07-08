/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

const TapPane = ({ show }) => {
  const dataMovie = useSelector((state) => state.movie.value)
  return (
    <div>
      <div className='tab-content'>
        <div className='tab-pane'>
          {show ? (
            <p>We don&apos;t have any reviews for {dataMovie.title}. Would you like to write one?</p>
          ) : (
            <div>
              {new Array(3).fill(1).map(() => (
                <div
                  key={uuidv4()}
                  className='rounded-lg gap-x-5  h-[61px] px-[21px] py-[13px] flex items-center mt-4 font-[300] text-[14.4px] shadow-md border border-grayBold'
                >
                  <img
                    className='rounded-full w-14 h-14'
                    src='https://www.themoviedb.org/t/p/w90_and_h90_face/xTNNz1qIXlrBIXOmtdJtSOhbJL0.jpg'
                    alt=''
                  />
                  <span className='w-[50%] text-[17px] font-normal'>Best Anime</span>
                  <span className=''>Open</span>
                  <span className='text-right w-[10%]'>0</span>
                  <div className='flex-1 text-right'>
                    <p>Mar 28, 2022 at 1:07 PM</p>
                    <p>by Ordinaryad204</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TapPane
