import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack';
import "./style.css";


function About() {
  return (
    <>
    <div class="bg-dark bg-opacity-25 ">
      <Stack gap={3} class="col-md-3 col-sm-4 col-lg-3 col-xl-3 col-xs-2 mx-auto">
        <h1 class="p-4">Hi, I am Jack.</h1>
        <div class="p-4">
        <Image src="/images/Myself.png" id="selfimage" thumbnail height="auto" class="image-expand" />
        </div>
        <div class="p-4">
        <Button href="/projects" variant="primary">Take a peek</Button>
        </div>
      </Stack>
      </div>
      <div class="">
      </div>
    </>
  );
}

export default About;
