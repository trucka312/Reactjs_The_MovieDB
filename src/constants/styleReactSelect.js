import { GRAY_ICON, TEXT_META, GRAY_BOLD, LIGHT, LIGHT_BLUE } from './colors'

const REACT_SELECT_STYLE = {
  control: (_, state) => ({
    outLine: 'none',
    border: state.isFocused ? `1px solid ${LIGHT_BLUE}` : `1px solid ${GRAY_ICON}`,
    display: 'flex',
    borderRadius: '5px',
  }),
  multiValueRemove: () => ({
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    color: TEXT_META,

    '&:hover': {
      color: 'black',
    },

    '& svg': {
      width: '2rem',
      height: '2rem',
    },
  }),
  menu: () => ({
    border: `1px solid ${GRAY_ICON}`,
    borderRadius: '5px',
    minHeight: '150px',
    backgroundColor: LIGHT,
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: () => ({
    display: 'none',
  }),
  valueContainer: (baseStyles) => ({
    ...baseStyles,
    maxWidth: '90%',
    padding: '0',
  }),
  loadingMessage: () => ({
    display: 'none',
  }),
  multiValue: (baseStyles) => ({
    ...baseStyles,
    borderRadius: '6px',
    transition: 'all 0.1s linear',

    '&:hover': {
      backgroundColor: GRAY_BOLD,
    },
  }),
  multiValueLabel: (baseStyles) => ({
    ...baseStyles,
    fontSize: '15px',
    marginRight: '10px',
  }),
  noOptionsMessage: (baseStyles) => ({
    ...baseStyles,
    height: '100%',
    marginTop: '40px',
    textTransform: 'uppercase',
  }),
  menuList: (baseStyles) => ({
    ...baseStyles,
    maxHeight: '150px',
    margin: '10px 0',
  }),
  input: (baseStyles) => ({
    ...baseStyles,
    fontSize: '15px',
    padding: '6px 10px',
    width: '100%',
    margin: '0',
  }),
  placeholder: (baseStyles) => ({
    ...baseStyles,
    padding: '6px 10px',
  }),
  clearIndicator: (baseStyles) => ({
    ...baseStyles,
    color: GRAY_ICON,

    '&:hover': {
      color: TEXT_META,
    },
  }),
  option: (baseStyles) => ({
    ...baseStyles,
    padding: '6px 20px',
  }),
}

export default REACT_SELECT_STYLE
