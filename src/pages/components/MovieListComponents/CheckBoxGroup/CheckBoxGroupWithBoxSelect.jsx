/* eslint-disable max-len */
/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types'
import { Checkbox, FormControlLabel } from '@mui/material'
import React, { useState } from 'react'
import { uniqueId } from 'lodash'
import { checkboxControlStyle } from 'constants/formControlLabelStyle'
import SelectBox from '../SelectBox'

const CheckBoxGroupWithBoxSelect = ({ list, setValue, name, listBox, listboxName }) => {
  const [showAll, setShowAll] = useState(false)
  const [showSelectBox, setShowSelectBox] = useState(false)
  const [listStatus, setListStatus] = useState(list)
  const handleOnChangeFirst = (e) => {
    if (e.target.checked) {
      setValue(name, '', { shouldDirty: true })
      setValue(listboxName, '', { shouldDirty: true })
    }
    setShowAll(!showAll)
    setListStatus((state) => {
      return state.map((item) => {
        if (item.name === e.target.name) return { ...item, check: e.target.checked }
        return item
      })
    })
  }

  const handleOnChangeSecond = (e) => {
    if (e.target.checked) setValue(listboxName, '', { shouldDirty: true })
    setShowSelectBox(!showSelectBox)
  }

  const handleOnChange = (e) => {
    const rs = listStatus.map((item) => {
      if (item.name === e.target.name) return { ...item, check: e.target.checked }
      return item
    })

    const formData = rs.filter((item) => item.check && item.name !== listboxName).map((item) => item.name)
    setValue(name, formData, { shouldDirty: true })

    setListStatus(rs)
  }
  return (
    <div>
      <FormControlLabel
        name={listStatus[0].name}
        control={<Checkbox checked={!showAll} disableRipple />}
        label={listStatus[0].label}
        onChange={handleOnChangeFirst}
        sx={checkboxControlStyle}
      />

      {showAll && (
        <div className='mb-[1rem]'>
          <FormControlLabel
            name={listboxName}
            control={<Checkbox checked={!showSelectBox} disableRipple />}
            label={listStatus[1].label}
            onChange={handleOnChangeSecond}
            sx={checkboxControlStyle}
          />
          {showSelectBox && <SelectBox id={listboxName} list={listBox} setValue={setValue} haveSearchBar />}
        </div>
      )}

      {showAll &&
        listStatus.map((item, i) => {
          return i >= 2 ? (
            <FormControlLabel
              key={uniqueId()}
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

CheckBoxGroupWithBoxSelect.propTypes = {
  list: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  listBox: PropTypes.array.isRequired,
  listboxName: PropTypes.string.isRequired,
}

export default CheckBoxGroupWithBoxSelect
