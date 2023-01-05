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
            <h1 className="workersTitle">OUR WORKERS</h1>
          </Col>
        </Row>
        <Row>
          <Col className="menuCol">
            <hr className="workerLine" />
            <h1 className="workersTitle">Workers</h1>
            <p className="workersDescription">Workers at Saint Johns Bakery</p>
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
                <Card.Text className="workerdescription">{workers.description}</Card.Text>
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