import React, { Component } from "react"
import { Link } from "gatsby"
import $ from "jquery"
import Navmenu from "./navmenu"

import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap"

const CustomNavbar = ({ pageInfo }) => {
  console.log(pageInfo)
  return (
    <>
      <div id="myNav" class="overlay">
        <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>
          &times;
        </a>
        <div class="overlay-content">
          <Navmenu />
        </div>
      </div>
      <Navbar variant="light" expand="lg" id="site-navbar">
        {/* <Container> */}
        <Container>
          <Link to="/" className="link-no-style">
            <Navbar.Brand as="span">Personal</Navbar.Brand>
          </Link>
          <button onClick={openNav}>hey</button>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto" activeKey={pageInfo && pageInfo.pageName}>
              <Navmenu />
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
  document.getElementById("myNav").style.width = "80%"
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%"
}

export default CustomNavbar
