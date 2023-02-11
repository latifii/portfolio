import React from 'react'
import Wrapper from '../assets/wrappers/Navbar'
import logo from '../assets/images/avatar.jpg'
import { IoIosColorPalette } from 'react-icons/io'
import { Links } from '../components'
import { useDispatch } from 'react-redux'
import { openModal } from '../featuers/modalSlice'

const Navbar = () => {
  const dispatch = useDispatch()
  return (
    <Wrapper>
      <div className='container nav__container'>
        <a href='/' className='nav__logo'>
          <img src={logo} alt='Logo' />
        </a>
        <Links />
        <button id='theme__icon' onClick={() => dispatch(openModal())}>
          <IoIosColorPalette />
        </button>
      </div>
    </Wrapper>
  )
}

export default Navbar
