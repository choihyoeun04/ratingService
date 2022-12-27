/*import React, {useEffect, useState} from 'react';
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
          {/*{workers.map(workers => {
            return (
              <Col>
                <Image className="menuImage" src={bread.imagePath} alt={bread.name}/>
                <p className="menuPrice">${bread.price}</p>
                <h2 className="menuName">{bread.name}</h2>
                <hr className="menuPriceLine" />
                <p className="menuDescription">{bread.description}</p>
              </Col>
            )})}
        </Row>
      </Container>
    </div>
  )
}


export default Menu;*/