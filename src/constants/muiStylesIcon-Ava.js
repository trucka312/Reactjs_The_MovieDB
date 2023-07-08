import { INFO, TEXT_META } from './colors'

const ICON_STYLES = {
  icon: {
    height: '2.24rem',
    width: '2.24rem',
  },
  smIcon: {
    height: '2.24rem',
    width: '2.24rem',
    stroke: 'white',
    strokeWidth: 1,
  },
  mdIcon: {
    height: '2.24rem',
    width: '2.24rem',
    stroke: 'white',
    strokeWidth: 2.5,
  },
  semilgIcon: {
    height: '2.5rem',
    width: '2.5rem',
    stroke: INFO,
    strokeWidth: 0.4,
    color: INFO,
  },
  lgIcon: {
    height: '2.9rem',
    width: '2.9rem',
    stroke: INFO,
    strokeWidth: 0.4,
    color: INFO,
  },
  dropDownIcon: {
    stroke: 'black',
    strokeWidth: 3,
    marginLeft: '.5rem',
    marginBottom: '.2rem',
  },
  socialMedia: { width: '3.04rem', height: '3.04rem' },
  personInfoIcon: { width: '2.24rem', height: '2.24rem', color: TEXT_META, marginRight: '.4rem' },
}
// ava styles
const AVATAR_STYLES = {
  ava: {
    height: '3.2rem',
    width: '3.2rem',
  },
}
export { ICON_STYLES, AVATAR_STYLES }
