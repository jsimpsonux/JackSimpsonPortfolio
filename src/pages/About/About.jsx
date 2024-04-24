import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import "./style.css";

function About() {
  return (
    <>
    <Container fluid className="d-flex align-items-center" style={{backgroundColor: "#fdf5df"}}>
      <Row className="">
          <Col lg={4} className="ms-4">
            <p class="text-start fs-1" style={{color: "#4e8098"}}>Hello, I'm Jack,
            <br /> a friendly web developer. </p>
          <Button href="/projects" variant="link" className="text-start float-start" style={{color: "#4e8098"}}>
            Take a peek
          </Button>
          </Col>
          <Col className="ml-auto">
          <img src="./src/assets/JackSimpson.png"  className="float-end" thumbnail />
          </Col>
      </Row>
      {/* <div class=""></div> */}
    </Container>
    </>
  );
}

export default About;
