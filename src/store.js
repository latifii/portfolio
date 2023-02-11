import { configureStore } from '@reduxjs/toolkit'
import modalSlice from './featuers/modalSlice'
import themeSlice from './featuers/themeSlice'

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    theme: themeSlice,
  },
})
