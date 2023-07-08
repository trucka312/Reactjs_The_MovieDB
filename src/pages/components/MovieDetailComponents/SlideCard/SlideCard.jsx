/* eslint-disable react/prop-types */
import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'

const SlideCard = (props) => {
  const { className = '', children, loadMore = false } = props
  const handleScroll = (e) => {
    const layer = e.target.lastElementChild
    if (e.target.scrollLeft > 0) {
      layer.style.opacity = 0
    } else {
      layer.style.opacity = 1
    }
  }
  const nodeScroll = useRef()
  useEffect(() => {
    nodeScroll.current.scrollLeft = 0
  }, [])
  return (
    <div className='relative overflow-hidden rounded-xl'>
      <div
        ref={nodeScroll}
        className={`cast-list flex-nowrap overflow-x-auto flex ${className} scroll`}
        onScroll={handleScroll}
      >
        {children}
        {loadMore && (
          <div className='flex-[0_0_auto] gap-x-5 view_more flex items-center ml-[10px] justify-center'>
            <span className='font-bold cursor-pointer hover:text-textMeta'>View More</span>
            <i className='font-bold fa-solid fa-arrow-right'> </i>
          </div>
        )}
        <div className='layerImage'> </div>
      </div>
    </div>
  )
}

export default SlideCard
