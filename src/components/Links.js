import React from 'react'
import styled from 'styled-components'
import { navbarData } from '../data/data'
const Links = () => {
  return (
    <NavMenu>
      {navbarData.map((item) => {
        const { id, link, title } = item
        return (
          <li key={id}>
            <a href={link}>{title}</a>
          </li>
        )
      })}
    </NavMenu>
  )
}

export default Links

const NavMenu = styled.ul`
  display: flex;
  justify-content: center;
  gap: 3.5rem;

  /* HIDE NAV MENU ON TABLETS AND PHONES */
  @media screen and (max-width: 1024px) {
    display: none;
  }
`
