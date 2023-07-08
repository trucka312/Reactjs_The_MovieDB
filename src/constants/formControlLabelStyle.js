import { GRAY_THIRD, LIGHT, LIGHT_BLUE } from './colors'

export const radioFormControlStyle = {
  display: 'flex',
  width: 'fit-content',
  alignItems: 'center',
  '& .MuiFormControlLabel-label': {
    fontSize: '1.5rem',
    fontWeight: '300',
    display: 'block',
    marginTop: '2px',
  },
  '& .MuiRadio-root': {
    boxShadow: 'none',
    backgroundColor: LIGHT,
    paddingRight: '0.4rem',
    paddingTop: '0.3rem',
    paddingBottom: '0.3rem',
  },
  '& .MuiSvgIcon-root': {
    height: '2rem',
    width: '2rem',
    boxShadow: 'none',
    color: LIGHT_BLUE,
    fontWeight: '300',
  },

  '&.Mui-disabled': {
    alignItems: 'flex-start',

    '& .MuiSvgIcon-root': {
      height: '2rem',
      width: '2rem',
      boxShadow: 'none',
      color: GRAY_THIRD,
      fontWeight: '300',
    },
  },
}

export const checkboxControlStyle = {
  display: 'flex',
  width: 'fit-content',
  alignItems: 'center',

  '& .MuiFormControlLabel-label': {
    fontSize: '1.5rem',
    fontWeight: '300',
    display: 'block',
    marginTop: '2px',
  },
  '& .MuiCheckbox-root': {
    boxShadow: 'none',
    backgroundColor: LIGHT,
    paddingRight: '0.4rem',
    paddingTop: '0.3rem',
    paddingBottom: '0.3rem',
  },
  '.MuiSvgIcon-root': {
    height: '2rem',
    width: '2rem',
    boxShadow: 'none',
    color: LIGHT_BLUE,
    fontWeight: '300',
  },
  '&.Mui-disabled': {
    alignItems: 'flex-start',

    '& .MuiSvgIcon-root': {
      height: '2rem',
      width: '2rem',
      boxShadow: 'none',
      color: GRAY_THIRD,
      fontWeight: '300',
    },

    '& .MuiTypography-root': {
      color: 'black',
    },
  },
}
