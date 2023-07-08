/* eslint-disable no-undef */
/* eslint-disable max-len */
/* eslint-disable react/forbid-prop-types */
import PropTypes, { any } from 'prop-types'
import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import React from 'react'
import _ from 'lodash'
import { radioFormControlStyle } from 'constants/formControlLabelStyle'

const RadioGroupSelect = ({ list }) => {
  return (
    <RadioGroup>
      {list.map((item) => (
        <FormControlLabel
          name='radio'
          key={_.uniqueId()}
          value={item.name}
          control={<Radio disableRipple />}
          label={item.name}
          sx={radioFormControlStyle}
          checked={item.check}
          disabled={item.disable}
        />
      ))}
    </RadioGroup>
  )
}

RadioGroupSelect.propTypes = {
  list: PropTypes.arrayOf(any).isRequired,
}

export default RadioGroupSelect
