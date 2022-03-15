import React,{useState} from 'react'
import { Navbar, Nav, Container, Button,NavDropdown } from 'react-bootstrap'
import './Navbar.css'
function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [size, setsize] = useState(false)
  const changeSize = () => {
      if(window.scrollY >= 90) {
          setsize(true)
      } else {
          setsize(false)
      }
  }
  window.addEventListener("scroll", changeSize)
  return (
        <>
            <Navbar collapseOnSelect expand="lg"  className='top-navbar' fixed='top'>
            <Container fluid>
            <Navbar.Brand href="#home" className={size ? "top-navbar-logo img top-navbar-logo-size img" : "top-navbar-logo img"}><img src='images/logo4.png' alt='navbar logo'/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleClick}><i className={click ? 'fas fa-times' : 'fas fa-bars' } style={{color:'white',transform:'Scale(1.3)'}}/></Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto mb-2 mb-lg-0 top-navbar-links">
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#features" onClick={closeMobileMenu}><i className="fas fa-home" />&nbsp;HOME</Nav.Link>
                <Nav.Link href="#pricing" onClick={closeMobileMenu}>GENERAL DENTISTRY</Nav.Link>
                <Nav.Link href="#pricing" onClick={closeMobileMenu}>COSMETIC DENTISTRY</Nav.Link>
                <Nav.Link href="#pricing" onClick={closeMobileMenu}>SURGICAL DENTISTRY</Nav.Link>
                <Nav.Link href="#KIDS DENTISTRY" onClick={closeMobileMenu}>REVIEWS</Nav.Link>
                <Nav.Link href="#pricing" onClick={closeMobileMenu}><Button variant='danger'>BOOK NOW</Button></Nav.Link>
  
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
  )
}

export default NavBar;