import React from 'react'
import Wrapper from '../assets/wrappers/Services'
import { servicesData } from '../data/data'
import Card from '../components/Card'
const Services = () => {
  return (
    <Wrapper id='services'>
      <h2>My Services</h2>
      <p>I give you the best in all the services below</p>
      <div className='container services__container ' data-aos='fade-up'>
        {servicesData.map((service) => {
          const { id, title, icon, desc } = service
          return (
            <Card key={id} className='service light'>
              <div className='service__icon'>{icon}</div>
              <div className='service__details'>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            </Card>
          )
        })}
      </div>
    </Wrapper>
  )
}

export default Services
