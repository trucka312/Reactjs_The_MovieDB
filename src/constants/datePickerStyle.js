import { GRAY_THIRD, LIGHT_BLUE } from './colors'

const slotProps = {
  actionBar: { actions: ['today'] },
  openPickerButton: {
    sx: {
      '&.MuiButtonBase-root': {
        backgroundColor: GRAY_THIRD,
        padding: '10px 5px',
        borderRadius: '0 5px 5px 0',
        transform: 'translateX(2px)',
      },
    },
  },
  textField: {
    placeholder: '',
    sx: {
      backgroundColor: 'white',

      '& .MuiInputBase-input': {
        paddingTop: '8px',
        paddingBottom: '8px',
        paddingRight: '0',
        fontSize: '1.3rem',
      },

      '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
          border: '1px solid black',
          borderColor: LIGHT_BLUE,
        },
      },

      '&:hover .MuiOutlinedInput-notchedOutline': {
        border: '1px solid black',
        borderColor: LIGHT_BLUE,
      },
    },
  },
  popper: {
    sx: {
      '& *': {
        fontSize: '15px',
      },
      '& .MuiButtonBase-root.Mui-selected': {
        backgroundColor: LIGHT_BLUE,
      },

      '& .MuiButtonBase-root.Mui-selected:hover': {
        backgroundColor: LIGHT_BLUE,
      },
    },
  },
  desktopPaper: {
    sx: {
      '& span': {
        fontSize: '15px',
      },
      '& button': {
        fontSize: '15px',
      },
      '& .MuiButtonBase-root.Mui-selected': {
        backgroundColor: LIGHT_BLUE,
      },
      '& .MuiButtonBase-root.Mui-selected:hover': {
        backgroundColor: LIGHT_BLUE,
      },
    },
  },
}

export default slotProps
