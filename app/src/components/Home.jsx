import React from "react";
/*import "./Home.css";*/
import {Container, Row, Col, Image} from "react-bootstrap";

function Home() {
  return (
    <Container>
      <Col>
        <Row>
          <Image className="testing" src="/images/testimage.jpg" alt="HomeBread1"/>
        </Row>
      </Col>
        
        
      <h1>hi</h1>
    </Container>
  );
}

export default Home;