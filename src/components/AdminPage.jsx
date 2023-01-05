
import React from 'react'
import {  Card, CardGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import customer from '../images/customers.jpg'
import helper from '../images/helper.jpg'
import order from '../images/orders.jpg'

 const AdminPage = () => {
    return (      
        <div>
          <CardGroup>
                <Card className='col-3 me-4 ms-3 mt-5'>
                    <Card.Img variant="top" src={customer} />
                    <Card.Body>
                        <Card.Title>Customer</Card.Title>
                        <Card.Text>
                            This is the customer crud operation for admin only.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <center>
                        <p><Link to={'/custlist'} className='btn btn-primary'>Customer CRUD</Link></p>
                        
                        </center>
                    </Card.Footer>
                </Card>
                <Card className='col-3 me-4 ms-3 mt-5'>
                    <Card.Img variant="top" src={helper} />
                    <Card.Body>
                        <Card.Title>Helper</Card.Title>
                        <Card.Text>
                        This is the helper crud operation for admin only.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <center>
                        <p><Link to={'/helplist'} className='btn btn-secondary'>Helper CRUD</Link></p>
                        
                        </center>
                    </Card.Footer>
                </Card>
                <Card className='col-3 me-4 ms-3 mt-5'>
                    <Card.Img variant="top" src={order} />
                    <Card.Body>
                        <Card.Title>Orders</Card.Title>
                        <Card.Text>
                        This is the order crud operation for admin only.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <center>
                        <p><Link to={'/ordlist'} className='btn btn-dark'>Order CRUD</Link></p>
                        
                        </center>
                    </Card.Footer>
                </Card>
            </CardGroup><br />
            <center><Link to={"/home"} className="btn btn-danger" >Sign Out</Link></center>
        </div>
    )
}

export default AdminPage;
