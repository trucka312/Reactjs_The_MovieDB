/* eslint-disable max-len */
import { styled } from '@mui/material/styles'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'
import { GRAY } from 'constants/colors'

const MenuToolTip = styled(({ className, ...props }) => (
  <Tooltip
    PopperProps={{
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [-5, -10],
          },
        },
      ],
    }}
    {...props}
    classes={{ popper: className }}
  />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'white',
    color: 'black',
    minWidth: 180,
    border: `1px solid ${GRAY}`,
    paddingLeft: '0px',
    paddingRight: '0px',
    paddingTop: '1rem',
    paddingBottom: '1rem',
  },
}))
export default MenuToolTip
