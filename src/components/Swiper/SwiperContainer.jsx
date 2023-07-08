import { isNil } from 'lodash'
import PropTypes from 'prop-types'
import React, { useRef, useEffect } from 'react'
import { twMerge } from 'tailwind-merge'

const SwiperContainer = ({ children, className, id }) => {
  const blurElRef = useRef()
  useEffect(() => {
    const el = document.querySelector(`.${id} .slider-item:first-child`)
    if (isNil(el)) return () => {}
    let options = {
      root: document.querySelector(`.${id} .slider-container`),
      rootMargin: '0px',
      threshold: 0.8,
    }

    let observer = new IntersectionObserver((entry) => {
      if (entry[0].isIntersecting) blurElRef.current.style.display = 'block'
      else blurElRef.current.style.display = 'none'
    }, options)

    observer.observe(el)
    return () => {
      observer.unobserve(el)
    }
  }, [id, children])

  return (
    <div className={`slider ${id}`}>
      <div className={twMerge('slider-container flex flex-nowrap overflow-x-scroll pb-[2rem]', className)}>
        {children}
      </div>
      <div className='blurEl' ref={blurElRef} />
    </div>
  )
}

SwiperContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
}

SwiperContainer.defaultProps = {
  className: '',
}

export default SwiperContainer
