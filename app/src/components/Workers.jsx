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
      <Container className="workersmainContainer">
        <Row>
          <Col>
            <h1 className="workersTitle">OUR WORKERS</h1>
          </Col>
        </Row>
        <Row>
          <Col className="workersCol">
            <hr className="workersLine" />
            <h1 className="workersTitle">Workers</h1>
            <p className="workersDescription">Workers at Saint Johns Bakery</p>
            <hr></hr>
          </Col>
          <Col>
          {workers.map(workers => {
            return (
              <div className='workersContainer'>
                <Image variant="top" src={workers.imagePath} alt={workers.name} className="workersImage" />
                <h3 className="workersName">{workers.name}</h3>
                <p className="workersTime">{workers.time}</p>
                <p className="workersdescription">{workers.description}</p>
              </div>
            )})}
          </Col>
        </Row>
      </Container>
  )
}


export default Workers;