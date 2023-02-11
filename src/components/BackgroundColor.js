import React from 'react'
import { useDispatch } from 'react-redux'
import { handleBck } from '../featuers/themeSlice'

const BackgroundColor = ({ className }) => {
  const dispatch = useDispatch()
  return (
    <button
      className={`${className}`}
      onClick={() => dispatch(handleBck(className))}
    ></button>
  )
}

export default BackgroundColor
