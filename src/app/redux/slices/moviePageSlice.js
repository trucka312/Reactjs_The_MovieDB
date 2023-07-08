import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getLanguage, getResultsFromLanguage, getCountries as getContriesValue } from 'apis/movieListApi'
import { DEFAULT_FORM_VALUE } from 'constants/forms'
import { isNull } from 'lodash'

const initialState = {
  countriesLoading: false,
  languagesLoading: false,
  countries: [],
  params: DEFAULT_FORM_VALUE,
  languages: [],
  requestcountriesID: undefined,
  loadingList: true,
  loadingParams: false,
}

export const getCountries = createAsyncThunk('moviePage/getCountries', async (_, thunkAPI) => {
  try {
    const response = await getContriesValue()
    const rs = response.data.map((item) => {
      return {
        value: item.iso_3166_1,
        title: item.english_name,
        img: `https://flagcdn.com/h24/${item.iso_3166_1.toLowerCase()}.png`,
      }
    })
    return rs
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data)
  }
})

export const getLanguages = createAsyncThunk('moviePage/getLanguages', async (_, thunkAPI) => {
  try {
    const lang = await getLanguage()
    const temp = lang.data
    let rs = await Promise.all(
      temp.map((item) => {
        return getResultsFromLanguage(item.iso_639_1)
      }),
    )
    rs = rs
      .map((item, i) => {
        if (item.data.total_pages === 0) return null
        return {
          value: lang.data[i].iso_639_1,
          title: `${lang.data[i].english_name} (${item.data.total_pages})`,
          total_pages: item.data.total_pages,
        }
      })
      .filter((item) => !isNull(item))
      .sort((a, b) => b.total_pages - a.total_pages)
    rs.unshift({
      value: '',
      title: 'None Selected',
    })

    return rs
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data)
  }
})

export const moviePageSlice = createSlice({
  name: 'moviePage',
  initialState,
  reducers: {
    SET_PARAMS: (state, action) => {
      state.params = action.payload
    },
    SET_LOADING_LIST: (state, action) => {
      state.loadingList = action.payload
    },
    SET_LOADING_PARAM: (state, action) => {
      state.loadingParams = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getCountries.fulfilled, (state, action) => {
        state.countriesLoading = false
        state.countries = action.payload
      })
      .addCase(getCountries.pending, (state) => {
        state.countriesLoading = true
      })
      .addCase(getCountries.rejected, (state) => {
        state.countriesLoading = false
      })
      .addCase(getLanguages.fulfilled, (state, action) => {
        state.languagesLoading = false
        state.languages = action.payload
      })
      .addCase(getLanguages.pending, (state) => {
        state.languagesLoading = true
      })
      .addCase(getLanguages.rejected, (state) => {
        state.languagesLoading = false
      })
  },
})

export const { SET_PARAMS, SET_LOADING_PARAM, SET_LOADING_LIST } = moviePageSlice.actions

export default moviePageSlice.reducer
