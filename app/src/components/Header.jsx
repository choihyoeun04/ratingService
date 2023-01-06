import React from "react";
import HomeButton from "./HomeButton";
import {Container, Row, Col, Navbar, Button, ButtonGroup, Nav, Image } from "react-bootstrap"
import "./Header.css"


function Header() {
  function refreshPage(){
    window.location.reload();
  }

  return (
        <Navbar fixed="top" >
          //Row??Col??
          <Navbar.Brand>
            <Image className="websiteName" src="/images/websiteName.png" onClick={refreshPage} />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <HomeButton className="buttonsGroup1" buttonName="Home" path="/"/>
            </Nav.Link>
              <HomeButton className="buttonsGroup1" buttonName="Workers" path="/workers"/>

            
              <HomeButton className="homeButton" buttonName="Sign up" path="/signup"/>
              <HomeButton className="homeButton" buttonName="Log in" path="/login"/>
          </Nav>
        </Navbar>

  );

}
export default Header;