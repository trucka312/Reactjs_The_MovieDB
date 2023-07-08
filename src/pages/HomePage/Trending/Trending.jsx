/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
import Section from '../Section'

const Trending = ({ onToggle, isToggle, endPoint }) => {
  return (
    // eslint-disable-next-line max-len
    <div className='bg-[url("https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg")] bg-no-repeat bg-bottom'>
      <Section
        title='Trending'
        items={['Today', 'This Week']}
        onToggle={onToggle}
        isToggle={isToggle}
        endPoint={endPoint}
      />
    </div>
  )
}

export default Trending
