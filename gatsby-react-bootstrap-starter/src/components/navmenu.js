import React, { Component } from "react"
import { Link } from "gatsby"

import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap"

export default () => (
  <Container>
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
    <Link to="/page-2" className="link-no-style">
      <Nav.Link as="span" eventKey="page-2">
        Services
      </Nav.Link>
    </Link>
    <Link to="/page-2" className="link-no-style">
      <Nav.Link as="span" eventKey="page-2">
        Portfolio
      </Nav.Link>
    </Link>
    <Link to="/page-2" className="link-no-style">
      <Nav.Link as="span" eventKey="page-2">
        Pricing
      </Nav.Link>
    </Link>
    <NavDropdown title="Blog" id="collasible-nav-dropdown">
      <NavDropdown.Item href="#blog-home">Blog Home</NavDropdown.Item>
      <NavDropdown.Item href="#blog-single">Blog Single</NavDropdown.Item>
    </NavDropdown>
    <NavDropdown title="Pages" id="collasible-nav-dropdown">
      <NavDropdown.Item href="#blog-home">Elements</NavDropdown.Item>
      <NavDropdown.Item href="#blog-single">Level 2</NavDropdown.Item>
    </NavDropdown>
    <Link to="/page-2" className="link-no-style">
      <Nav.Link as="span" eventKey="page-2">
        Contact
      </Nav.Link>
    </Link>
  </Container>
)
