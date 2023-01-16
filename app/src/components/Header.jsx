import React from "react";
import HomeButton from "./HomeButton";
import {Container, Row, Col, Navbar, Button, ButtonGroup, Nav, Image } from "react-bootstrap"
import "./Header.css"


function Header() {
  function refreshPage(){
    window.location.reload();
  }

  return (
        <Container>
          <Row className="navbarContainer">
            <Col className="buttonsContainer">
              <Image className="websiteName" src="/images/websiteName.png" onClick={refreshPage} />
                  <HomeButton className="buttonsGroup1" buttonName="Home" path="/"/>
                  <HomeButton className="buttonsGroup1" buttonName="Workers" path="/workers"/>
                </Col>
                <Col className="buttonsContainer2">
                  
                  <HomeButton className="homeButton" buttonName="Sign up" path="/signup"/>
                  <HomeButton className="homeButton" buttonName="Log in" path="/login"/>
              </Col>
          </Row>
        </Container>
  );

}
export default Header;