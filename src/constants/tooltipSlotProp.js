import { LIGHT, PRIMARY } from './colors'

const slotProps = {
  tooltip: {
    sx: {
      backgroundColor: PRIMARY,
      color: LIGHT,
      fontSize: '1.6rem',
      borderColor: PRIMARY,
      maxWidth: 'unset',
      padding: '0.6rem 1rem',

      '& .MuiTooltip-arrow': {
        color: PRIMARY,
        borderColor: PRIMARY,
      },
    },
  },
}

export default slotProps
