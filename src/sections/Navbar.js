import React from 'react'
import Wrapper from '../assets/wrappers/Navbar'
import { navbarData } from '../data/data'
import logo from '../assets/images/avatar.jpg'
import { IoIosColorPalette } from 'react-icons/io'
const Navbar = () => {
  return (
    <Wrapper>
      <div className='container nav__container'>
        <a href='/' className='nav__logo'>
          <img src={logo} alt='Logo' />
        </a>
        <ul className='nav__menu'>
          {navbarData.map((item) => {
            const { id, link, title } = item
            return (
              <li key={id}>
                <a href={link}>{title}</a>
              </li>
            )
          })}
        </ul>
        <button id='theme__icon'>
          <IoIosColorPalette />
        </button>
      </div>
    </Wrapper>
  )
}

export default Navbar
