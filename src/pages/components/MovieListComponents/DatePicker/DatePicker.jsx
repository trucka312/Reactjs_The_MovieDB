/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types'
import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker as MUIDatePicker } from '@mui/x-date-pickers/DatePicker'
import slotProps from 'constants/datePickerStyle'
import { Controller } from 'react-hook-form'

const DatePicker = ({ title, control, name }) => {
  return (
    <div className='flex mt-[1rem] justify-between items-baseline text-[1.4rem] text-graySecond'>
      <p className='w-[8rem]'>{title}</p>
      <Controller
        name={name}
        control={control}
        defaultValue={null}
        render={({ field, ...props }) => {
          return (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MUIDatePicker
                views={['year', 'month', 'day']}
                slotProps={slotProps}
                onChange={(date) => {
                  field.onChange(date)
                }}
              />
            </LocalizationProvider>
          )
        }}
      />
    </div>
  )
}

DatePicker.propTypes = {
  title: PropTypes.string.isRequired,
  control: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
}

export default DatePicker
