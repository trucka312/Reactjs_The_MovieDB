import PropTypes from 'prop-types'
import React from 'react'
import { Tooltip as MUITooltip } from '@mui/material'
import slotProps from 'constants/tooltipSlotProp'

const Tooltip = ({ children, title }) => {
  return (
    <MUITooltip slotProps={slotProps} placement='top' title={title} arrow>
      <div className='flex'>{children}</div>
    </MUITooltip>
  )
}

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

export default Tooltip
