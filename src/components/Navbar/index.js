import React from 'react'
import { Nav, NavLink, Bars, NavIcon } from './NavbarElements'

const Navbar = ({toggle}) => {
    return (
        <>
          <Nav>
              <NavLink to='/' >JHB Burger Stop</NavLink>
              <NavIcon onClick={toggle}>
                  <p>Menu</p>
                  <Bars></Bars>
              </NavIcon>
          </Nav>
        </>
    )
}

export default Navbar
