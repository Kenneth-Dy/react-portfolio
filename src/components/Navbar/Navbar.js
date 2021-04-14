import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { 
  Collapse,
  Navbar, 
  NavbarToggler, 
  NavbarBrand, 
  Nav, 
  NavLink } from 'reactstrap'

const Navibar = () => {

  const [collapsed, setCollapsed] = useState(true)

  const toggleNavbar = () => setCollapsed(!collapsed)

  return (
    <div>
      <Navbar color="info" light>
        <Link to='/'>
          <NavbarBrand href="/" className="mr-auto">Ken Dy</NavbarBrand>
        </Link>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <Link to='/'>
              <NavLink className="linkText">About</NavLink>
            </Link>
            <Link to='/portfolio'>
              <NavLink className="linkText">Portfolio</NavLink>
            </Link>
            <Link to='/contact'>
              <NavLink className="linkText">Contact</NavLink>
            </Link>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Navibar