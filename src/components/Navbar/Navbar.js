import { Link } from 'react-router-dom'
import './Navbar.css'
import { 
  Navbar, 
  NavbarBrand, 
  Nav, 
  NavLink, 
  NavItem} from 'reactstrap'

const Navibar = () => {
  return (
    <>
    <div>
      <Navbar light expand="md">
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to='/'>
                <NavbarBrand href="/" >Ken Dy</NavbarBrand>
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/'>
                <NavLink className="linkText">About</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/portfolio'>
                <NavLink className="linkText">Projects</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/contact'>
                <NavLink className="linkText">Contact</NavLink>
              </Link>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
    </>
  )
}

export default Navibar