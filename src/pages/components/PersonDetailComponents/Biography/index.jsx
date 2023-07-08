/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable quotes */
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../../../assets/css/PersonDetail.css'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { ICON_STYLES } from 'constants/muiStylesIcon-Ava'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { useSelector } from 'react-redux'
import { loadingData } from 'app/redux/selectors'
import { Skeleton } from '@mui/material'

const Biography = ({ personData }) => {
  const [isVisible, setIsVisible] = useState(false)
  const parentRef = useRef(null)
  const contentRef = useRef(null)
  useEffect(() => {
    if (!_.isNil(personData.biography)) {
      const parentHeight = parentRef.current.clientHeight
      const contentHeight = contentRef.current.clientHeight
      if (contentHeight > parentHeight) setIsVisible(false)
      else setIsVisible(true)
    }
  }, [personData.biography])
  const handleReadMore = () => setIsVisible(true)
  const checkVisible = !isVisible ? 'max-h-[24rem]' : 'after:hidden'
  const loading = useSelector(loadingData)
  return (
    <section>
      {!loading ? (
        <h2 className='font-bold text-[3.52rem] capitalize md:hidden'>
          <Link to={`/person/${personData.id}`}>{personData.name}</Link>
        </h2>
      ) : (
        <Skeleton variant='text' width='100%' sx={{ fontSize: '2rem' }} animation='wave' />
      )}
      <div className='mt-[2.5rem] mb-[.8rem] relative'>
        <h3 className='text-[2.08rem] font-semiBold'>Biography</h3>
        <div className={`overflow-hidden mt-[.8rem] biography-bg ${checkVisible}`} ref={parentRef}>
          <p className='whitespace-pre-line' ref={contentRef}>
            {!_.isEmpty(personData.biography)
              ? personData.biography
              : `We don't have a biography for ${personData.name}.`}
          </p>
        </div>
        {!isVisible && (
          <div className='flex justify-end w-full absolute bottom-0'>
            <span
              onClick={handleReadMore}
              className='text-info hover:text-secondary cursor-pointer duration-150 font-semiBold'
            >
              Read More
            </span>
            <NavigateNextIcon sx={ICON_STYLES.semilgIcon} />
          </div>
        )}
      </div>
    </section>
  )
}
Biography.propTypes = {
  personData: PropTypes.oneOfType([() => null, PropTypes.object]),
}
Biography.defaultProps = {
  personData: {},
}
export default Biography
