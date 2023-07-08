import { createSlice } from '@reduxjs/toolkit'

const creditSlice = createSlice({
  name: 'recomendation',
  initialState: {
    data: [],
  },
  reducers: {
    setData: (state, action) => ({ ...state, data: action.payload }),
  },
})
export const { setData } = creditSlice.actions
export default creditSlice.reducer
