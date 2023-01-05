import React, { useEffect, useState } from 'react'
import { Card, CardGroup } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom'
import OrderService from '../Service/OrderService';
import Thumbsup from '../images/thumsup.png'

const Tempcustomerloginpage = () => {
    const { id } = useParams();

    const [orderList, setOrderList] = useState([]);
    useEffect(() => {
        init();
    }, [])

    const init = () => {
        OrderService.getOrderbyCustomerID(id).then((res) => {
            setOrderList(res.data);
        }).catch((error) => {
            console.log(error);
        });
    }

    return (

        <div className="container">
            <br />
            <CardGroup>
                <Card>

                    <Card.Body>
                        <Card.Title ><center>Thank You</center></Card.Title>
                        <Card.Text>
                            <center>For using our services!</center>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <center><img src={Thumbsup} height={100} width={100} ></img></center>
                    </Card.Footer>
                </Card>



            </CardGroup>
            <h2 className="text-center text-success">Your Order List</h2>
            <hr />
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            {/* <th scope="col">Order ID</th> */}
                            {/* <th scope="col">Customer ID</th> */}
                            <th scope="col">Helper Name</th>
                            <th scope="col">Helper DOB</th>
                            <th scope="col">Helper Contact</th>
                            <th scope="col">Helper Address</th>
                            <th scope="col">Helper EmailId</th>
                            <th scope="col">Helper Gender</th>
                            <th scope="col">Helper Service</th>
                            <th scope="col">Helper Service Charge</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderList.map((order) => (
                            <tr key={order.orderID}>
                                {/* <td>{order.orderID}</td> */}
                                {/* <td>{order.customer.customerID}</td> */}
                                <td>{order.helper.helperName}</td>
                                <td>{order.helper.dob}</td>
                                <td>{order.helper.helperContact}</td>
                                <td>{order.helper.helperAddress}</td>
                                <td>{order.helper.helperEmail}</td>
                                <td>{order.helper.helperGender}</td>
                                <td>{order.helper.helperService}</td>
                                <td>{order.helper.helperServicecharge}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <br />
            <center>
                <Link to={"/custlog/" + id} className="btn btn-dark me-2" >Order Again</Link>
                <Link to={"/home"} className="btn btn-danger" >Sign Out</Link></center>
        </div>
    )
}

export default Tempcustomerloginpage