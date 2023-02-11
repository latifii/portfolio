import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isModal: false,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      console.log('open')
      state.isModal = true
    },
    closeModal: (state) => {
      state.isModal = false
    },
  },
})

export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer
