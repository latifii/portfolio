import React, { useEffect } from 'react'
import Wrapper from '../assets/wrappers/Header'
import { headerData } from '../data/data'
import pic from '../assets/images/avatar.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <Wrapper id='header'>
      <div className='container header__container'>
        <div
          className='header__profile aos-init aos-animate'
          data-aos='zoom-in'
        >
          <img src={pic} alt='Header Portait' />
        </div>
        <h3 data-aos='fade-up' className='aos-init'>
          Hamed Latifi
        </h3>
        <p data-aos='fade-up' className='aos-init'>
          You are a click away from building your dream website or web app. Send
          me the details of your project for a modern, mobile responsive, highly
          performant website today!
        </p>
        <div className='header__cta aos-init' data-aos='fade-up'>
          <a href='#contact' className='btn primary'>
            Let's Talk
          </a>
          <a href='#portfolio' className='btn light'>
            My Work
          </a>
        </div>
        <div className='header__socials'>
          {headerData.map((item) => {
            const { id, link, icon } = item
            return (
              <a key={id} href={link} target='_blank' rel='noopener noreferrer'>
                {icon}
              </a>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

export default Header
