import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import OrderService from '../Service/OrderService';

const Temphelperloginpage = () => {
    const { id } = useParams();

    const [orderList, setOrderList] = useState([]);
    useEffect(() => {
        init();
    }, [])

    const init = () => {
        OrderService.getOrderbyHelperID(id).then((res) => {
            setOrderList(res.data);
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className="container">
            <h2 className="text-center text-success">List of Orders</h2>
            <hr />
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            {/* <th scope="col">Order ID</th> */}
                            {/* <th scope="col">Customer ID</th> */}
                            <th scope="col">Customer Name</th>
                            <th scope="col">Customer DOB</th>
                            <th scope="col">Customer Contact</th>
                            <th scope="col">Customer Address</th>
                            <th scope="col">Customer EmailId</th>
                            <th scope="col">Customer Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderList.map((order) => (
                            <tr key={order.orderID}>
                                {/* <td>{order.orderID}</td> */}
                                {/* <td>{order.customer.customerID}</td> */}
                                <td>{order.customer.customerName}</td>
                                <td>{order.customer.dob}</td>
                                <td>{order.customer.customerContact}</td>
                                <td>{order.customer.customerAddress}</td>
                                <td>{order.customer.customerEmailID}</td>
                                <td>{order.customer.customerGender}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <br />
      <center><Link to={"/home"} className="btn btn-danger" >Sign Out</Link></center>
        </div>
    )
}

export default Temphelperloginpage