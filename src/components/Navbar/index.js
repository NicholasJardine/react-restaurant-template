import React from 'react'
import { Nav, NavLink, Bars, NavIcon } from './NavbarElements'

const Navbar = () => {
    return (
        <>
          <Nav>
              <NavLink to='/' >JHB Burger Stop</NavLink>
              <NavIcon>
                  <p>Menu</p>
                  <Bars></Bars>
              </NavIcon>
          </Nav>
        </>
    )
}

export default Navbar
