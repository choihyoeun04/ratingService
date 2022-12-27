import React, { useState } from "react";
import HomeButton from "./HomeButton";
/*import "./Header.css"*/
import {Container, Row, Col, Navbar, Button, ButtonGroup} from "react-bootstrap"



function Header() {
  function refreshPage(){
    window.location.reload();
  }

  return (
    <div className="headerDiv">
      <Navbar fixed="top" expand="lg" className="homeNavBar">
        <Container className="Headers">
          <ButtonGroup className="headerRow">
            <Button className="navbarCol" onClick={refreshPage}>
              Rating service for Saint Johns Bakery
            </Button>
            <HomeButton className="homeButton" buttonName="Home" path="/"/>
            <HomeButton className="homeButton" buttonName="Workers" path="/workers"/>
            <HomeButton className="homeButton" buttonName="Menu" path="/menu"/>
            <HomeButton className="homeButton" buttonName="Sign up" path="/signup"/>
            <HomeButton className="homeButton" buttonName="Log in" path="/login"/>
          </ButtonGroup>
        </Container>
      </Navbar>
    </div>
  );

}
export default Header;