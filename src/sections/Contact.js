import React from 'react'
import Wrapper from '../assets/wrappers/Contact'
import { contactData } from '../data/data'
const Contact = () => {
  return (
    <Wrapper id='contact'>
      <h2>Get In Touch</h2>
      <p>Shoot me a message via any of the links below!</p>
      <div className='container contact__container'>
        {contactData.map((item) => {
          const { id, icon, link } = item
          return (
            <a key={id} href={link} target='_blank' rel='noopener noreferrer'>
              {icon}
            </a>
          )
        })}
      </div>
    </Wrapper>
  )
}

export default Contact
