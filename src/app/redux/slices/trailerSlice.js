import { createSlice } from '@reduxjs/toolkit'

const trailerSlice = createSlice({
  name: 'trailerInfo',
  initialState: {
    status: false,
    id: '',
  },
  reducers: {
    setTrailer: (state, action) => ({ ...state, ...action.payload }),
  },
})
export const { setTrailer } = trailerSlice.actions
export default trailerSlice.reducer
