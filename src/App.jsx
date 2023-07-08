/* eslint-disable indent */
import { SkeletonTheme } from 'react-loading-skeleton'
import { useSelector } from 'react-redux'
import useRoutesElements from './routes/routes.js'
import MainLayout from './layouts/MainLayout/MainLayout.jsx'

const App = () => {
  const elements = useRoutesElements()
  const trailer = useSelector((state) => state.trailer)
  return (
    <SkeletonTheme baseColor='#313131' highlightColor='#525252'>
      <div id={`${trailer.status ? 'filter_bg' : ''}`}>
        <MainLayout>
          <div className='container'>{elements}</div>
        </MainLayout>
      </div>
    </SkeletonTheme>
  )
}

export default App
