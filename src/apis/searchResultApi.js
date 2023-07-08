import http from 'apis/http'

const SearchAPI = {
  getMultiSearch: (q, p) => {
    const url = `/search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${q}&page=${p || 1}
    &include_adult=false&region=english`
    return http.get(url)
  },
  getTrending: () => {
    const url = `/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
    return http.get(url)
  },
  getCompany: (q, p) => {
    const url = `/search/company?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${q}&page=${p || 1}`
    return http.get(url)
  },
  getPerson: (q, p) => {
    const url = `/search/person?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${q}&page=${p || 1}`
    return http.get(url)
  },
  getCollection: (q, p) => {
    const url = `/search/collection?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${q}&page=${p || 1}`
    return http.get(url)
  },
  getKeyword: (q, p) => {
    const url = `/search/keyword?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${q}&page=${p || 1}`
    return http.get(url)
  },
  getMovie: (q, p) => {
    const url = `/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${q}&page=${p || 1}`
    return http.get(url)
  },
  getMovieByYear: (q, p, y) => {
    const url = `/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${q}&page=${p || 1}
    &include_adult=false&year=${y}`
    return http.get(url)
  },
  getTvshow: (q, p) => {
    const url = `/search/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${q}&page=${p || 1}`
    return http.get(url)
  },
}

export default SearchAPI
