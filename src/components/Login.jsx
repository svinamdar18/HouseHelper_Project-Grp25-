import React from 'react'
import Customer from "../images/customers.jpg" 
import Helper from "../images/helper.jpg"
import Admin from "../images/admin.jpg"
import { Card, CardGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div>
      <br /><br />
      <CardGroup>
        <Card>
          <Card.Img src={Customer} />
          <Card.Body>
            <Card.Title>Customer</Card.Title>
            <Card.Text>
              Customer Login / Sign Up
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <center><Link to={"/custlogin"} className="btn btn-dark">Proceed</Link></center>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img src={Helper} />
          <Card.Body>
            <Card.Title>Helper</Card.Title>
            <Card.Text>
              Helper Login / Sign Up
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <center><Link to={"/helplogin"} className="btn btn-dark">Proceed</Link></center>
          </Card.Footer>
        </Card>

        <Card>
          <Card.Img src={Admin} />
          <Card.Body>
            <Card.Title>Admin</Card.Title>
            <Card.Text>
              Admin Login
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <center><Link to={"/adminlogin"} className="btn btn-dark">Proceed</Link></center>
          </Card.Footer>
        </Card>

      </CardGroup>
    </div>
  )
}
