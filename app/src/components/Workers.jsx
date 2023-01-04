import React, {useEffect, useState} from 'react';
import {Container, Row, Col, Image, Card, CardGroup} from "react-bootstrap"
import "./Workers.css"



function Workers() {
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    fetch("/workers")
      .then((res) => res.json())
      .then((data) => setWorkers(data.workers));
    }, []);



    
  return (
    <div className="aboutContainer">
      <Container>
        <Row>
          <Col>
            <h1 className="aboutTitle">OUR WORKERS</h1>
          </Col>
        </Row>
        <Row>
          <Col className="menuCol">
            <hr className="menuLine" />
            <h1 className="menuTitle">Workers</h1>
            <hr className="menuLine" />
            <p className="menuText">Workers at Saint Johns Bakery</p>
            <hr></hr>
          </Col>
          <CardGroup>
          {workers.map(workers => {
            return (
              <Col>
              <Card>
                <Card.Img variant="top" src={workers.imagePath} alt={workers.name} className="workerImage" />
                <Card.Title className="workerName">{workers.name}</Card.Title>
                <Card.Text className="workerTime">{workers.time}</Card.Text>
                <Card.Text className="wirkerdescription">{workers.description}</Card.Text>
              </Card>
              </Col>
            )})}
            </CardGroup>
        </Row>
      </Container>
    </div>
  )
}


export default Workers;