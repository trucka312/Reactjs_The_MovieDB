import PropTypes from 'prop-types'
import React from 'react'

const SwiperItem = ({ gap, children }) => {
  const style = {
    marginLeft: gap,
  }
  return (
    <div className='slider-item flex-shrink-0 ' style={style}>
      {children}
    </div>
  )
}

SwiperItem.propTypes = {
  gap: PropTypes.string,
  children: PropTypes.node.isRequired,
}

SwiperItem.defaultProps = {
  gap: '4rem',
}

export default SwiperItem
