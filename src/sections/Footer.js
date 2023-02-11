import React from 'react'
import Wrapper from '../assets/wrappers/Footer'
import { Links } from '../components'
import { headerData } from '../data/data'
const Footer = () => {
  return (
    <Wrapper>
      <div className='container footer__container'>
        <Links />
        <div className='footer__socials'>
          {headerData.map((social) => {
            const { id, link, icon } = social
            return (
              <a key={id} href={link} target='_blank' rel='noopener noreferrer'>
                {icon}
              </a>
            )
          })}
        </div>
      </div>
      <div className='footer__copyright'>
        <small>2023 Hamed Latifi © All Rights Reserved</small>
      </div>
    </Wrapper>
  )
}

export default Footer
