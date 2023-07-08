import http from './http'

export const getDiscoverMovies = (inputParams) => {
  return http.get('discover/movie', {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
      ...inputParams,
    },
  })
}

export const getGenres = () => {
  return http.get('genre/movie/list', {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
    },
  })
}

export const getCountries = () => {
  return http.get('configuration/countries', {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
    },
  })
}

export const getProviders = (params) => {
  return http.get('watch/providers/movie', {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
      ...params,
    },
  })
}

export const getLanguage = () => {
  return http.get('configuration/languages', {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
    },
  })
}

export const getResultsFromLanguage = (lang) => {
  return http.get('discover/movie', {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
      with_original_language: lang,
    },
  })
}

export const getKeywords = (input) => {
  return http.get('search/keyword', {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
      query: input,
    },
  })
}
