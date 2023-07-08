import PropTypes, { number } from 'prop-types'
import { Slider } from '@mui/material'
import { useEffect, useMemo } from 'react'
import { slotSingle, lower, top } from 'constants/sliderStyle'
import generateMarks from 'utils/generateMarks'

const SingleSlider = ({ name, min, max, step, bigStepList, setValue }) => {
  const marks = useMemo(() => generateMarks(min, max, step, bigStepList), [min, max, step, bigStepList])

  const handleOnchange = (e) => {
    setValue(name, e.target.value, { shouldDirty: true })
  }
  useEffect(() => {
    const els = document.querySelectorAll(`.${name} .MuiSlider-mark`)
    els.forEach((item, i) => {
      const temp = i * step + min
      if (!bigStepList.includes(temp)) {
        item.style.height = lower
        item.style.top = top
      }
    })
  }, [name, bigStepList, min, step])

  return (
    <div className={`${name}`}>
      <Slider
        defaultValue={min}
        min={min}
        max={max}
        step={step}
        valueLabelDisplay='auto'
        marks={marks}
        slotProps={slotSingle}
        onChangeCommitted={handleOnchange}
      />
    </div>
  )
}

SingleSlider.propTypes = {
  bigStepList: PropTypes.arrayOf(number).isRequired,
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  step: PropTypes.number.isRequired,
  setValue: PropTypes.func.isRequired,
}

export default SingleSlider
