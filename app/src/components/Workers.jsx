import React, {useEffect, useState} from 'react';
import {Container, Row, Col, Image} from "react-bootstrap"

function Menu() {
  const [Workers, setWorkers] = useState([]);

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
            <h1 className="aboutTitle">OUR MENU</h1>
          </Col>
        </Row>
        <Row>
          <Col className="menuCol">
            <hr className="menuLine" />
            <h1 className="menuTitle">Bread</h1>
            <hr className="menuLine" />
            <p className="menuText">I'm a paragraph. Click here to add your own text and edit me. It’s easy.</p>
          </Col>
          {{workers.map(worker => {
            return (
              <Col>
                <Image className="menuImage" src={worker.imagePath} alt={worker.name}/>
                <p className="menuPrice">${worker.price}</p>
                <h2 className="menuName">{worker.name}</h2>
                <hr className="menuPriceLine" />
                <p className="menuDescription">{worker.description}</p>
              </Col>
            )})}}
        </Row>
      </Container>
    </div>
  )
}


export default Menu;