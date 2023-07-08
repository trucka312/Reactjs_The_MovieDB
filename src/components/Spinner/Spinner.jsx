import PropTypes from 'prop-types'
import React from 'react'

const Spinner = ({ color, size, borderWidth }) => {
  const styleOut = {
    borderTopColor: color,
    borderBottomColor: color,
    borderWidth,
    width: size,
    height: size,
  }

  const styleIn = {
    borderWidth,
    borderRightColor: color,
    borderLeftColor: color,
  }

  return (
    <div className='round' style={styleOut}>
      <div className='inner' style={styleIn} />
    </div>
  )
}

Spinner.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  borderWidth: PropTypes.string,
}

Spinner.defaultProps = {
  color: '#032541',
  size: '8rem',
  borderWidth: '2px',
}

export default Spinner
