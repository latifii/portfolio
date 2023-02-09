import React, { useState } from 'react'
import CategoryButton from './CategoryButton'

const ProjectsCategories = ({ categories, handleProject }) => {
  const [active, setActive] = useState('all')
  const changeCategoryHandler = (arg) => {
    setActive(arg)
    handleProject(arg)
  }
  return (
    <div className='portfolio__categories'>
      {categories.map((item, index) => {
        return (
          <CategoryButton
            key={index}
            category={item}
            className={item === active ? 'primary' : 'white'}
            handleProject={() => changeCategoryHandler(item)}
          />
        )
      })}
    </div>
  )
}

export default ProjectsCategories
