/* eslint-disable consistent-return */
import http from 'apis/http'

export const getMovies = (idMoive) => {
  return http.get(`/movie/${idMoive}`, {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
      language: 'vi',
    },
  })
}
export const getCredits = (idMoive) => {
  return http.get(`/movie/${idMoive}/credits`, {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
      language: 'vi',
    },
  })
}
export const getCertification = (idMoive) => {
  return http.get(`/movie/${idMoive}/release_dates`, {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
      language: 'vi',
    },
  })
}
export const getTrailers = (idMoive) => {
  return http.get(`/movie/${idMoive}/videos`, {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
      language: 'US',
    },
  })
}
export const getRecommendations = (idMoive) => {
  return http.get(`/movie/${idMoive}/recommendations`, {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
      language: 'US',
    },
  })
}
export const getMovieImg = (idMoive) => {
  return http.get(`/movie/${idMoive}/images`, {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
    },
  })
}
export const getKeyWord = (idMoive) => {
  return http.get(`/movie/${idMoive}/keywords`, {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
    },
  })
}
export const getLanguages = () => {
  return http.get('/configuration/languages', {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
    },
  })
}
