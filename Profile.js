import React from "react";
import img from './ccc.jpg';
import { Form, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

    const ProfilePhoto = () => {

   return (
    <div className="pho">
      <h3> My Profile Photo </h3>
      <div className="pu">
        <img src ={img} alt=""/>
      </div>
    </div>
      );
     }




     const FullName =() => {
      return(
        <div className="name">
                    <div className="na">

         <Form.Label> <h3> Please enter your Name </h3> </Form.Label> </div>
         <Form.Control type="email" placeholder="Enter Name" />  <br/>

        </div>
        );
      }



   const Address = () => {
    return (
    <div className="App">
            <header className="App-header">
            <Form>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="2">
      Email
    </Form.Label>
    <Col sm="10">
      <Form.Control type="email"  placeholder="email@example.com" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Password
    </Form.Label>
    <Col sm="10">
      <Form.Control type="password" placeholder="Password" />
    </Col>
  </Form.Group>
</Form>

          

 </header>
     </div>
   )
 }
 


