import { createSlice } from '@reduxjs/toolkit'
import { getCombinedCredits } from 'apis/personDetailApi'
import _ from 'lodash'

const initialState = {
  movies: [],
  filterMovies: [],
  loading: false,
  error: null,
}
const filterMovieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    FILTER_BY_DEP: (state, action) => {
      state.filterMovies = state.movies.filter((movie) => {
        if (action.payload === 'Acting') return _.isNil(movie.department)
        return movie.department === action.payload
      })
    },
    FILTER_BY_MEDIA: (state, action) => {
      state.filterMovies = state.movies.filter((movie) => movie.media_type === action.payload)
    },
    FILTER_CLEAR: (state) => {
      state.filterMovies = []
    },
  },
  extraReducers: {
    [getCombinedCredits.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [getCombinedCredits.fulfilled]: (state, action) => {
      state.loading = false
      state.movies = action.payload
    },
    [getCombinedCredits.rejected]: (state, action) => {
      state.loading = false
      state.error = action.error.message
    },
  },
})
export default filterMovieSlice
