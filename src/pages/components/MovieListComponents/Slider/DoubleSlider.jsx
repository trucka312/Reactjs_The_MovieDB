import PropTypes, { number } from 'prop-types'
import { Slider } from '@mui/material'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { lower, slotDouble, top } from 'constants/sliderStyle'
import generateMarks from 'utils/generateMarks'

const DoubleSlider = ({ name, min, max, step, bigStepList, templateString, setValue: setFormValue }) => {
  const [value, setValue] = useState([min, max])
  const str = useRef(templateString.replace('$', String(min)).replace('$', String(max)))
  const marks = useMemo(() => generateMarks(min, max, step, bigStepList), [min, max, step, bigStepList])

  const handleChange = (event, newValue) => {
    const temp = templateString.replace('$', String(newValue[0])).replace('$', String(newValue[1]))
    str.current = temp
    setValue([newValue[0], newValue[1]])
  }

  const handleChangeCommit = (event, newValue) => {
    setFormValue(`${name}-gte`, newValue[0], { shouldDirty: true })
    setFormValue(`${name}-lte`, newValue[1], { shouldDirty: true })
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
        value={value}
        min={min}
        max={max}
        step={step}
        valueLabelDisplay='auto'
        marks={marks}
        onChange={handleChange}
        onChangeCommitted={handleChangeCommit}
        disableSwap
        slotProps={slotDouble(str.current)}
      />
    </div>
  )
}

DoubleSlider.propTypes = {
  bigStepList: PropTypes.arrayOf(number).isRequired,
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  step: PropTypes.number.isRequired,
  templateString: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
}

export default DoubleSlider
