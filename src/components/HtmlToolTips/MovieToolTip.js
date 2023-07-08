/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import { styled } from '@mui/material/styles'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'
import { PRIMARY } from 'constants/colors'
import { forwardRef } from 'react'

const MovieToolTip = styled(
  forwardRef(({ className, ...props }, ref) => <Tooltip {...props} ref={ref} classes={{ popper: className }} />),
)(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: PRIMARY,
    color: 'white',
    minWidth: '53.4rem',
    padding: '1.5rem',
    borderRadius: '.5rem',
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: PRIMARY,
    fontSize: '1.4rem',
  },
}))
export default MovieToolTip
