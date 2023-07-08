import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit'
import creditSlice from './slices/creditSlice.js'
import movieImgSlice from './slices/movieImgSlice.js'
import movieSlice from './slices/movieSlice.js'
import recommendationSlice from './slices/recommendationSlice.js'
import trailerSlice from './slices/trailerSlice.js'
import filterMovieSlice from './slices/filterMovieSlice.js'
import moviePageSlice from './slices/moviePageSlice.js'

const reducer = combineReducers({
  movie: movieSlice,
  credit: creditSlice,
  trailer: trailerSlice,
  recommendation: recommendationSlice,
  movieimg: movieImgSlice,
  movieList: filterMovieSlice.reducer,
  moviePage: moviePageSlice,
})
const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({ serializableCheck: false })],
  devTools: process.env.NODE_ENV !== 'production',
})
export default store
