import React from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap'
import './Header.css'

function Header() {
  return (
    <div>
    <Navbar className='top-header' fixed='top'>
        <Container fluid>
            <Navbar.Brand href="#home"><img src='images/event.gif' alt='notify'></img><span className='offer-text'>Check Offers click <b>Here</b></span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="ms-auto mb-2 mb-lg-0 ">
                <Nav.Link href="#home"><i className="fab fa-whatsapp"/>&nbsp;+91 9891116408</Nav.Link>
                <Nav.Link href="#link"><i className="fas fa-phone-alt"/>&nbsp;+91 9891116408</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  )
}

export default Header