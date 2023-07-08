import { createSlice } from '@reduxjs/toolkit'

const movieImgSlice = createSlice({
  name: 'image',
  initialState: {
    backdrops: [],
    poster: [],
    modalPoster: [],
    resultSearch: [],
    loading: false,
  },
  reducers: {
    setMovieImg: (state, action) => ({ ...state, ...action.payload }),
    setModalPoster: (state, action) => ({ ...state, modalPoster: action.payload }),
    setResultSearch: (state, action) => {
      return { ...state, resultSearch: action.payload }
    },
    setLoading: (state, action) => ({ ...state, loading: action.payload }),
  },
})
export const { setMovieImg, setResultSearch, setModalPoster, setLoading } = movieImgSlice.actions
export default movieImgSlice.reducer
