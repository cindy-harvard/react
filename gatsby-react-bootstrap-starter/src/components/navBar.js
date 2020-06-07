import React from "react"
import { Link } from "gatsby"
import $ from "jquery"

import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap"

const CustomNavbar = ({ pageInfo }) => {
  console.log(pageInfo)
  return (
    <>
      <Navbar variant="light" expand="lg" id="site-navbar">
        {/* <Container> */}
        <Container>
          <Link to="/" className="link-no-style">
            <Navbar.Brand as="span">Personal</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto" activeKey={pageInfo && pageInfo.pageName}>
              <Link to="/" className="link-no-style">
                <Nav.Link as="span" eventKey="index">
                  Home
                </Nav.Link>
              </Link>
              <Link to="/page-2" className="link-no-style">
                <Nav.Link as="span" eventKey="page-2">
                  About
                </Nav.Link>
              </Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#services">Portfolio</Nav.Link>
              <Nav.Link href="#services">Pricing</Nav.Link>
              <NavDropdown title="Blog" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#blog-home">Blog Home</NavDropdown.Item>
                <NavDropdown.Item href="#blog-single">
                  Blog Single
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Pages" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#blog-home">Elements</NavDropdown.Item>
                <NavDropdown.Item href="#blog-single">Level 2</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#services">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        {/* </Container> */}
      </Navbar>
    </>
  )
}

$(window).scroll(function() {
  var scroll = $(window).scrollTop()
  if (scroll > 0) {
    $(".navbar").addClass("active")
  } else {
    $(".navbar").removeClass("active")
  }
})

function openNav() {
  document.getElementById("site-navbar").style.width = "80%"
}

function closeNav() {
  document.getElementById("site-navbar").style.width = "0%"
}

export default CustomNavbar
