import React from 'react'
import Card from './Card'

const Project = ({ image, title, desc, demo, github }) => {
  return (
    <Card className='portfolio__project'>
      <div className='portfolio__project-image'>
        <img src={image} alt='projects pic' />
      </div>
      <h4>{title}</h4>
      <p>{desc}</p>
      <div className='portfolio__project-cta'>
        <a
          href={demo}
          className='btn sm'
          target='_blank'
          rel='noopener noreferrer'
        >
          Demo
        </a>
        <a
          href={github}
          className='btn sm primary'
          target='_blank'
          rel='noopner noreferrer'
        >
          Gitbub
        </a>
      </div>
    </Card>
  )
}

export default Project
