import React from 'react'

const CategoryButton = ({ category, className, handleProject }) => {
  return (
    <button
      type='button'
      className={`btn car__btn ${className}`}
      onClick={() => handleProject(category)}
    >
      {category.toUpperCase()}
    </button>
  )
}

export default CategoryButton
