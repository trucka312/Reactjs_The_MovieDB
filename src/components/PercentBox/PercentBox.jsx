/* eslint-disable max-len */
import {
  DARK_BLUE,
  LIGHT,
  MEDIUM,
  RED,
  SECOND_GREEN,
  SECOND_MEDIUM,
  SECOND_RED,
  SECONDARY,
  TEXT_META,
} from 'constants/colors'
import PropTypes from 'prop-types'
import React from 'react'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const PercentBox = ({ percent = 90, type }) => {
  let priColor = SECONDARY
  let secondColor = SECOND_GREEN

  if (percent < 70) {
    priColor = MEDIUM
    secondColor = SECOND_MEDIUM
  }
  if (percent < 50) {
    priColor = RED
    secondColor = SECOND_RED
  }
  if (percent === 0) {
    priColor = TEXT_META
    secondColor = TEXT_META
  }

  const stylePercent = {
    strokeLinecap: 'round',
    pathTransitionDuration: 0.5,
    pathColor: priColor,
    textColor: LIGHT,
    trailColor: secondColor,
    backgroundColor: DARK_BLUE,
  }

  if (type === 'big') {
    return (
      <div className='w-[6.6rem] h-[6.6rem] rounded-full border-[4px] border-darkBlue'>
        <CircularProgressbarWithChildren value={percent} background styles={buildStyles(stylePercent)}>
          <div className='relative text-white font-bold text-[2.4rem] -ml-[3px]'>
            {percent !== 0 ? percent : 'NR'}
            {percent !== 0 && <span className='absolute text-[8px] top-[20%] -right-[35%]'>%</span>}
          </div>
        </CircularProgressbarWithChildren>
      </div>
    )
  }
  if (type === 'MEDIUM') {
    return (
      <div className='w-[4.6rem] h-[4.6rem] rounded-full border-[3px] border-darkBlue'>
        <CircularProgressbarWithChildren value={percent} background styles={buildStyles(stylePercent)}>
          <div className='relative text-white font-bold text-normal -ml-[3px]'>
            {percent !== 0 ? percent : 'NR'}
            {percent !== 0 && <span className='absolute text-[7px] top-[25%] -right-[40%]'>%</span>}
          </div>
        </CircularProgressbarWithChildren>
      </div>
    )
  }
  return (
    <div className='w-[3.8rem] h-[3.8rem] rounded-full border-[2px] border-darkBlue'>
      <CircularProgressbarWithChildren value={percent} background styles={buildStyles(stylePercent)}>
        <div className='relative text-white font-bold text-[1.4rem] -ml-[3px]'>
          {percent !== 0 ? percent : 'NR'}
          {percent !== 0 && <span className='absolute text-[6px] top-[25%] -right-[35%]'>%</span>}
        </div>
      </CircularProgressbarWithChildren>
    </div>
  )
}

PercentBox.propTypes = {
  type: PropTypes.oneOf(['big', 'medium', 'small']),
  percent: PropTypes.number.isRequired,
}

PercentBox.defaultProps = {
  type: 'small',
}

export default PercentBox
