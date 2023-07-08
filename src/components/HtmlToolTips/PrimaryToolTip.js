import styled from '@emotion/styled'
import { Tooltip, tooltipClasses } from '@mui/material'
import { PRIMARY } from 'constants/colors'

const PrimaryToolTip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: PRIMARY,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: PRIMARY,
    fontSize: '1.58rem',
  },
}))
export default PrimaryToolTip
