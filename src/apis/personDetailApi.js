import { createAsyncThunk } from '@reduxjs/toolkit'
import http from './http'

const personAPI = {
  getPersonDetail: (personId) => {
    const url = `/person/${personId}?api_key=${process.env.REACT_APP_API_KEY}`
    return http.get(url)
  },
  getSocialLink: (personId) => {
    const url = `/person/${personId}/external_ids?api_key=${process.env.REACT_APP_API_KEY}`
    return http.get(url)
  },
  getCombinedCredits: (personId) => {
    const url = `/person/${personId}/combined_credits?api_key=${process.env.REACT_APP_API_KEY}`
    return http.get(url)
  },
}
const getCombinedCredits = createAsyncThunk('movies/getCombinedCredits', async (personId, { rejectWithValue }) => {
  try {
    const movieResponse = await personAPI.getCombinedCredits(personId)
    return [...movieResponse.data.cast, ...movieResponse.data.crew]
  } catch (error) {
    // rejectWithValue dispatch lỗi, giữ nguyên state hiện tại
    return rejectWithValue(error.response.data)
  }
})
export { getCombinedCredits }
export default personAPI
