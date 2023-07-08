import { LIGHT_BLUE, GRAY_BOLD } from './colors'

export const slotDouble = (str) => ({
  root: {
    sx: {
      '& .MuiSlider-thumb:hover': {
        boxShadow: 'none',
      },
      '& .MuiSlider-thumb:focus': {
        boxShadow: 'none',
      },
      '& .MuiSlider-thumb.Mui-focusVisible': {
        boxShadow: 'none',
      },
      '& .MuiSlider-valueLabelCircle': {
        display: 'none',
      },
      '& .MuiSlider-valueLabelOpen': {
        display: 'none',
      },
      '& .MuiSlider-mark': {
        backgroundColor: GRAY_BOLD,
        height: '10px',
        transform: 'translateY(-12px)',
        width: '0.5px',
      },
      '& .MuiSlider-track::before': {
        content: `"${str}"`,
        position: 'absolute',
        textAlign: 'center',
        whiteSpace: 'nowrap',
        padding: '5px 10px',
        top: '-45px',
        left: '50%',
        transform: 'translate(-50%, 0%)',
        backgroundColor: 'black',
        zIndex: '10',
        visibility: 'hidden',
        opacity: '0',
        transition: ' 0.5s all',
        borderRadius: '2px',
        fontSize: '1.6rem',
        color: 'white',
      },
      '&.MuiSlider-dragging .MuiSlider-track::before': {
        visibility: 'visible',
        opacity: '1',
      },
    },
  },

  track: {
    sx: {
      backgroundColor: LIGHT_BLUE,
      borderColor: LIGHT_BLUE,
      zIndex: '10',
    },
  },
  thumb: {
    sx: {
      backgroundColor: LIGHT_BLUE,
      boxShadow: 'none',
      width: '16px',
      height: '16px',
    },
  },
  rail: {
    sx: {
      backgroundColor: GRAY_BOLD,
    },
  },
  markLabel: {
    sx: {
      fontSize: '14px',
      top: '50%',
      color: GRAY_BOLD,
    },
  },
})

export const slotSingle = {
  root: {
    sx: {
      '& .MuiSlider-thumb:hover': {
        boxShadow: 'none',
      },
      '& .MuiSlider-thumb:focus': {
        boxShadow: 'none',
      },
      '& .MuiSlider-thumb.Mui-focusVisible': {
        boxShadow: 'none',
      },
      '& .MuiSlider-valueLabelOpen': {
        backgroundColor: '#000000',
        padding: '6px 4px',
        fontSize: '1.4rem',
        minWidth: '2rem',
      },
    },
  },

  track: {
    sx: {
      backgroundColor: LIGHT_BLUE,
      borderColor: LIGHT_BLUE,
    },
  },
  thumb: {
    sx: {
      backgroundColor: LIGHT_BLUE,
      boxShadow: 'none',
      width: '16px',
      height: '16px',
    },
  },
  rail: {
    sx: {
      backgroundColor: GRAY_BOLD,
    },
  },
  markLabel: {
    sx: {
      fontSize: '14px',
      top: '50%',
      color: GRAY_BOLD,
    },
  },
  mark: {
    sx: {
      backgroundColor: GRAY_BOLD,
      height: '10px',
      transform: 'translateY(-11px)',
      width: '0.5px',
    },
  },
}

export const lower = '5px'
export const top = '19px'
