import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';




  
    export default function Successfull() {
      return (
        <div>
    <CardGroup>
    <Card>
       
        <Card.Body>
          <Card.Title ><center>Thank You</center></Card.Title>
          <Card.Text>
            <center>Thank You for using our services!</center>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <center><Link to={'/home'} className="btn btn-danger">Log Out</Link></center>
        </Card.Footer>
      </Card>
      

    
    </CardGroup>
    </div>
      )}






