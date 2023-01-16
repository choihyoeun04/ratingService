import React from "react";
import "./Home.css";
import {Container, Row, Col, Image} from "react-bootstrap";

function Home() {
  return (
    <Container>
     
        <Row className="homeIntroduction">
        </Row>
        <Row className="homeIntroduction">
          <Image className="bakeryImage" src="/images/breadInHome.jpg" alt="Bakery Image"/>
        </Row>
      
        
      <Row className="homeIntroduction">
        <h1 className="websiteDespcription2">What is this?</h1>
        <h2 className="websiteDescriptionParagraph">This is an website for workers in Saint Johns Bakery. Our workers are listed in 'Workers' Tab.</h2>
        <Container className="linkContainer">
          <a href="https://www.stjohnsbakery.com/" target="_blank" className="linkToBakery">Link to our Bakery Website &spades;</a>
        </Container>
        
    
      </Row>      
    </Container>
  );
}

export default Home;