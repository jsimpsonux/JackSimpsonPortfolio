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
    <Container fluid className="bg-dark bg-opacity-25">
      <Row className="align-items-center">
          <Col md={{ span: 5, offset: 1 }}>
            <p class="text-start fs-1">Hello, I'm Jack,
            <br /> a friendly web developer. </p>
          <Button href="/projects" variant="primary" className="float-start">
            Take a peek
          </Button>
          </Col>
      </Row>
      {/* <div class=""></div> */}
    </Container>
    </>
  );
}

export default About;
