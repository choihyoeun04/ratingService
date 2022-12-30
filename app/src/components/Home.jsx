import React from "react";
import "./Home.css";
import {Container, Row, Col, Image} from "react-bootstrap";

function Home() {
  return (
    <Container>
      <Col>
        <Row>
          <Image className="bakeryLogo" src="/images/stjohnsLogo.gif" alt="Bakery Logo"/>
          
        </Row>
        <Row>
          <Image className="bakeryLogo" src="/images/breadInHome.jpg" alt="Bakery Image"/>
        </Row>
      </Col>
        
        
      <h1>What is this?</h1>
      <h2>This is an website for workers in Saint Johns Bakery.</h2>

      
    </Container>
  );
}

export default Home;