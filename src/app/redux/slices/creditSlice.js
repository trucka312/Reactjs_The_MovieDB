import { createSlice } from '@reduxjs/toolkit'

const creditSlice = createSlice({
  name: 'credit',
  initialState: {
    cast: [],
    crew: [],
  },
  reducers: {
    setCast: (state, action) => ({ ...state, cast: action.payload }),
    setCrew: (state, action) => ({ ...state, crew: action.payload }),
  },
})
export const { setCast, setCrew } = creditSlice.actions
export default creditSlice.reducer
