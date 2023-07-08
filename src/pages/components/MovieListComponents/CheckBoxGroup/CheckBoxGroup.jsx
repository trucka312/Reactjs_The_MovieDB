/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types'
import { Checkbox, FormControlLabel } from '@mui/material'
import React, { useState } from 'react'
import _ from 'lodash'
import { checkboxControlStyle } from 'constants/formControlLabelStyle'

const CheckBoxGroup = ({ list, setValue, name }) => {
  const [show, setShow] = useState(false)
  const [listStatus, setListStatus] = useState(list)
  const handleOnChangeFirst = (e) => {
    if (e.target.checked) setValue(name, '', { shouldDirty: true })
    setShow(!show)
    setListStatus((state) => {
      return state.map((item) => {
        if (item.name === e.target.name) return { ...item, check: e.target.checked }
        return item
      })
    })
  }

  const handleOnChange = (e) => {
    const rs = listStatus.map((item) => {
      if (item.name === e.target.name) return { ...item, check: e.target.checked }
      return item
    })

    const formData = rs.filter((item) => item.check).map((item) => item.name)
    setValue(name, formData, { shouldDirty: true })

    setListStatus(rs)
  }
  return (
    <div>
      <FormControlLabel
        name={listStatus[0].name}
        control={<Checkbox checked={listStatus[0].check} disableRipple />}
        label={listStatus[0].label}
        onChange={handleOnChangeFirst}
        sx={checkboxControlStyle}
      />
      {show &&
        listStatus.map((item, i) => {
          return i > 0 ? (
            <FormControlLabel
              key={_.uniqueId()}
              name={item.name}
              control={<Checkbox checked={item.check} disableRipple />}
              label={item.label}
              onChange={handleOnChange}
              sx={checkboxControlStyle}
            />
          ) : (
            ''
          )
        })}
    </div>
  )
}

CheckBoxGroup.propTypes = {
  list: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
}

export default CheckBoxGroup
