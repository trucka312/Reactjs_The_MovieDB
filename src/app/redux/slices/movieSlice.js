import { createSlice } from '@reduxjs/toolkit'

const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    value: {},
    certificates: [],
    listTrailer: [],
    keyword: [],
    languages: [],
  },
  reducers: {
    setDataMovie: (state, action) => ({ ...state, value: action.payload }),
    setCertificate: (state, action) => ({ ...state, certificates: action.payload }),
    setListTrailer: (state, action) => ({ ...state, listTrailer: action.payload }),
    setKeyWord: (state, action) => ({ ...state, keyword: action.payload }),
    setLanguage: (state, action) => ({ ...state, languages: action.payload }),
  },
})
export const { setDataMovie, setCertificate, setListTrailer, setLanguage, setKeyWord } = movieSlice.actions
export default movieSlice.reducer
