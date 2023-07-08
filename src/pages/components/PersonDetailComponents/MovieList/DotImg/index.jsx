import { MOVIELIST_DOT, MOVIELIST_DOT_HOVER } from 'constants/imgs'
import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { MovieToolTip } from 'components/HtmlToolTips'
import { MovieBoxTT } from 'components/MenuBox'

const DotImg = ({ movie }) => {
  const [dotImg, setDotImg] = useState(MOVIELIST_DOT)
  const [isOpen, setOpen] = useState(false)
  const tooltipRef = useRef(null)
  useEffect(() => {
    const handleClose = (e) => {
      if (tooltipRef.current && !tooltipRef.current.contains(e.target)) {
        if (!e.target.closest('.MuiTooltip-popper')) setOpen(false)
      }
    }
    window.addEventListener('click', handleClose)
    return () => window.removeEventListener('click', handleClose)
  }, [])
  const handleMouseEnter = () => setDotImg(MOVIELIST_DOT_HOVER)
  const handleMouseLeave = () => setDotImg(MOVIELIST_DOT)
  const handleOpen = () => setOpen(true)
  return (
    <div>
      <MovieToolTip ref={tooltipRef} open={isOpen} placement='top' arrow title={<MovieBoxTT movie={movie} />}>
        <img
          src={dotImg}
          alt='dot-img'
          className='w-[16px] h-[16px] cursor-pointer inline-block md:hidden'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleOpen}
        />
      </MovieToolTip>
    </div>
  )
}
DotImg.propTypes = {
  movie: PropTypes.oneOfType([() => null, PropTypes.object]),
}
DotImg.defaultProps = {
  movie: {},
}
export default DotImg
