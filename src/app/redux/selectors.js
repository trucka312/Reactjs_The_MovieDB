/* eslint-disable indent */
/* eslint-disable camelcase */
import _ from 'lodash'

const movieSelector = (state) => {
  const getMovieList = !_.isEmpty(state.movieList.filterMovies) ? state.movieList.filterMovies : state.movieList.movies
  const preprocessData = getMovieList.map(({ first_air_date: release_date, title: name, ...rest }) => ({
    release_date,
    name,
    ...rest,
  }))
  const depMovieList = preprocessData.map((item) => {
    return _.isNil(item.department) ? { ...item, department: 'Acting' } : { ...item }
  })
  const sortDateMovieList = depMovieList.sort((a, b) => {
    if (_.isEmpty(a.release_date)) return -1
    if (_.isEmpty(b.release_date)) return 1
    return new Date(b.release_date) - new Date(a.release_date)
  })
  const movieArr = sortDateMovieList
    .reduce((acc, movie) => {
      const existingDep = acc.find((item) => item.department === movie.department)
      if (existingDep) {
        const year = movie.release_date.slice(0, 4)
        const existingYear = existingDep.data.find((item) => item.year === year)
        if (existingYear) existingYear.movies.push(movie)
        else existingDep.data.push({ year, movies: [movie] })
      } else {
        acc.push({
          department: movie.department,
          data: [{ year: movie.release_date.slice(0, 4), movies: [movie] }],
        })
      }
      return acc
    }, [])
    .sort((a, b) => a.department.localeCompare(b.department))
  return movieArr
}
const originalMovieList = (state) => {
  const depMovieList = !_.isEmpty(state.movieList.movies)
    ? state.movieList.movies.map((item) => {
        return _.isNil(item.department) ? { ...item, department: 'Acting' } : { ...item }
      })
    : []
  return depMovieList
}
const filterMovieList = (state) => state.movieList.filterMovies
const knownForSlide = (state) => state.movieList.movies.slice(0, 8)
const loadingData = (state) => state.movieList.loading

export { movieSelector, originalMovieList, filterMovieList, knownForSlide, loadingData }
