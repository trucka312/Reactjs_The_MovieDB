/* eslint-disable react/forbid-prop-types */
import { useState } from 'react'
import PropTypes from 'prop-types'
import SwitchToggle from 'components/SwitchToggle'
import MovieList from '../MovieList'

const Section = ({ title, items, sectionClassNames }) => {
  const [toggleValue, setToggleValue] = useState(items[0])

  const onToggle = (selectedValue) => {
    setToggleValue(selectedValue)
  }

  return (
    <section className={`pt-[30px] px-[4rem] ${sectionClassNames}`}>
      <div className='flex items-center gap-5'>
        <h2 className='font-semibold text-4xl'>{title}</h2>
        <SwitchToggle
          items={items}
          onToggle={onToggle}
          isToggle={toggleValue.label === items[1].label}
          textColor='text-black'
          bgColor='bg-darkBlue'
          border='border-darkBlue'
        />
      </div>
      <MovieList endPoint={toggleValue?.endPoint} />
    </section>
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  sectionClassNames: PropTypes.string,
}

Section.defaultProps = {
  sectionClassNames: '',
}

export default Section
