import React, {useEffect, useState} from 'react';
import {Container, Row, Col, Image, Card} from "react-bootstrap"

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
            <p className="menuText">I'm a paragraph. Click here to add your own text and edit me. It’s easy.</p>
          </Col>
          {workers.map(worker => {
            return (
              <Col>
                <p className="workerTime">${worker.time}</p>
                <h2 className="workerName">{worker.name}</h2>
                <hr className="workerLine" />
                <p>hi</p>
                <p className="wirkerdescription">{worker.description}</p>
              </Col>
            )})}
        </Row>
      </Container>
    </div>
  )
}


export default Menu;