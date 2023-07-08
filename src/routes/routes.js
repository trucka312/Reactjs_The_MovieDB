import HomePage from 'pages/HomePage'
import MovieDetailPage from 'pages/MovieDetailPage'
import MovieListPage from 'pages/MovieListPage'
import Page404 from 'pages/Page404'
import PersonDetailPage from 'pages/PersonDetailPage'
import SearchResultPage from 'pages/SearchResultPage'
import { useRoutes } from 'react-router-dom'
import SearchCollection from '../pages/components/SearchResultComponents/SearchCollecttion/SearchCollection.jsx'
import SearchCompanies from '../pages/components/SearchResultComponents/SearchCompanies/SearchCompanies.jsx'
import SearchKeywords from '../pages/components/SearchResultComponents/SearchKeywords/SearchKeywords.jsx'
import SearchNetwork from '../pages/components/SearchResultComponents/SearchNetwork/SearchNetwork.jsx'
import SearchPeople from '../pages/components/SearchResultComponents/SearchPeople/SearchPeople.jsx'
import SearchResultItem from '../pages/components/SearchResultComponents/SearchResultItem/SearchResultItem.jsx'
import SearchTvshow from '../pages/components/SearchResultComponents/SearchTvshow/SearchTvshow.jsx'

const useRoutesElements = () => {
  const elementRoutes = useRoutes([
    {
      path: '*',
      element: <Page404 />,
    },
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: 'movie',
      element: <MovieListPage />,
    },
    {
      path: 'person/:personId',
      element: <PersonDetailPage />,
    },
    {
      path: 'movie/:movieId',
      element: <MovieDetailPage />,
    },
    {
      path: 'search',
      element: <SearchResultPage />,
      children: [
        {
          path: 'movie',
          element: <SearchResultItem />,
        },
        {
          path: 'collection',
          element: <SearchCollection />,
        },
        {
          path: 'keyword',
          element: <SearchKeywords />,
        },
        {
          path: 'person',
          element: <SearchPeople />,
        },
        {
          path: 'network',
          element: <SearchNetwork />,
        },
        {
          path: 'tv',
          element: <SearchTvshow />,
        },
        {
          path: 'company',
          element: <SearchCompanies />,
        },
      ],
    },
  ])

  return elementRoutes
}

export default useRoutesElements
