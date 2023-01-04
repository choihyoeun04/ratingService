import React from "react";
import "./Home.css";
import {Container, Row, Col, Image} from "react-bootstrap";

function Home() {
  return (
    <Container>
      <Col>
        <Row>
          <Col>
            <Image className="bakeryLogo" src="/images/stjohnsLogo.gif" alt="Bakery Logo"/>
          </Col>
          <Col className="websiteDespcription1">
              <p className="websiteDespcriptionText">This website introduces workers in Saint Johns Bakery. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor condimentum leo, non vulputate justo finibus eget. 
              Praesent facilisis venenatis diam a blandit. Donec eget lacus dapibus nibh molestie fringilla. Integer tincidunt nibh vel faucibus condimentum. 
              Aenean ultrices vestibulum arcu ut vulputate. Nullam mollis nisi nibh, at ullamcorper ipsum pulvinar sed. Curabitur pulvinar ligula at lacus viverra, 
              nec scelerisque nisi tincidunt. Vivamus id metus egestas, consectetur nisi ut, dictum nibh. Integer et suscipit velit, at fringilla odio. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed erat sed velit vehicula finibus. Ut eget dapibus felis. </p>
          </Col>
        </Row>
        <Row>
          <Image className="bakeryImage" src="/images/breadInHome.jpg" alt="Bakery Image"/>
        </Row>
      </Col>
        
        
      <h1 className="websiteDespcription2">What is this?</h1>
      <h2 className="websiteDescriptionParagraph">This is an website for workers in Saint Johns Bakery.</h2>
      <a href="https://youtu.be/p1cE9T0CFCQ?t=161" target="_blank">Link to our Bakery Website</a>

      
    </Container>
  );
}

export default Home;