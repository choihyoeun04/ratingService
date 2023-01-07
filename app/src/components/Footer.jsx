import React from "react";
import {Container, Row, Col, Navbar, Button, ButtonGroup, Nav, Image, ListGroup  } from "react-bootstrap"


function Footer() {
    
    return (
        <div>
            <ListGroup horizontal>
                <ListGroup.Item>
                    <p className="tester">Ways to contact Admins</p>
                </ListGroup.Item>
                <ListGroup.Item>
                    <p className="tester">Click to go to Bakery website</p>
                </ListGroup.Item>
                <ListGroup.Item>
                    <p className="tester">Admins :</p>
                </ListGroup.Item>
            </ListGroup>


        </div>
  
    );
  
  }
  export default Footer;