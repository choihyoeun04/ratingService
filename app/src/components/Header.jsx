import React from "react";
import HomeButton from "./HomeButton";
import {Container, Row, Col, Navbar, Button, ButtonGroup, ButtonToolbar } from "react-bootstrap"
import "./Header.css"


function Header() {
  function refreshPage(){
    window.location.reload();
  }

  return (
        <ButtonToolbar aria-label="Toolbar with button groups">
            <ButtonGroup className="buttonsGroup1" style={{display : 'inline'}}>
              <Button className="buttonsGroup1" onClick={refreshPage}>Rating service for Saint Johns Bakery</Button>
            </ButtonGroup>

            <ButtonGroup className="buttonsGroup2" aria-label="First group" style={{display : 'inline'}}>
              <HomeButton className="buttonsGroup1" buttonName="Home" path="/"/>
              <HomeButton className="buttonsGroup1" buttonName="Workers" path="/workers"/>
              <HomeButton className="buttonsGroup1" buttonName="Menu" path="/menu"/>
            </ButtonGroup>

            <ButtonGroup className="buttonsGroup3" style={{display : 'inline'}}>
              <HomeButton className="homeButton" buttonName="Sign up" path="/signup"/>
              <HomeButton className="homeButton" buttonName="Log in" path="/login"/>
            </ButtonGroup>
        </ButtonToolbar>

  );

}
export default Header;