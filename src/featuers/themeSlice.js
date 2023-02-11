import { createSlice } from '@reduxjs/toolkit'

const getLocalStorage = () => {
  let getLocal = localStorage.getItem('theme-port')
  return JSON.parse(getLocal)
}
const initialState = getLocalStorage() || {
  primary: 'color-1',
  background: 'bg-1',
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    handlePrimary: (state, { payload }) => {
      state.primary = payload
    },
    handleBck: (state, { payload }) => {
      state.background = payload
    },
  },
})

export const { handlePrimary, handleBck } = themeSlice.actions
export default themeSlice.reducer
