/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/jsx-no-bind */
import Banner from './Banner'
import Section from './Section'
import Trailer from './Trailer'
import LeaderBoard from './LeaderBoard'

const HomePage = () => {
  return (
    <div className='max-w-[140rem] px-[4rem] mx-auto 2xl:px-[4rem] xl:px-[4rem] lg:px-0'>
      <Banner />
      <Section
        title='Trending'
        items={[
          { label: 'Today', endPoint: '/trending/all/day' },
          { label: 'This week', endPoint: '/trending/all/week' },
        ]}
        sectionClassNames='
          bg-[url("https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg")] bg-no-repeat bg-bottom
        '
      />
      <Trailer
        title='Latest Trailer'
        items={[
          { label: 'For Rent', endPoint: '/discover/tv' },
          { label: 'In Theaters', endPoint: '/discover/movie' },
        ]}
      />
      <Section
        title='What Popular'
        items={[
          { label: 'Streaming', endPoint: '/movie/upcoming' },
          { label: 'On TV', endPoint: '/movie/popular' },
        ]}
      />
      <Section
        title='Free To Watch'
        items={[
          { label: 'Movies', endPoint: '/movie/upcoming' },
          { label: 'TV', endPoint: '/tv/on_the_air' },
        ]}
      />
      <LeaderBoard />
    </div>
  )
}

export default HomePage
