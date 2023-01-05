import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OrderService from "../Service/OrderService"

const ListOrders = () => {

    const [orderList,setOrderList] = useState([]);
    useEffect(()=>{
        init();
    }, [])

    const init =() =>{
        OrderService.getAllOrders().then((res)=>{
            setOrderList(res.data);
        }).catch((error)=>{
            console.log(error);
        });
    }

    const deleteOrder=(id) =>{
        OrderService.deleteOrderById(id).then(()=>{
            alert("Order with id: "+id+" has been removed from database");
            window.location.reload(true);
        })
    }

  return (
    <div className="container">
      <h2 className="text-center text-success">List of Orders</h2>
      <hr />
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">Order ID</th>
              <th scope="col">Customer ID</th>
              <th scope="col">Helper ID</th>
              <th scope="col">Actions</th>
              
            </tr>
          </thead>
          <tbody>
            {orderList.map((order) => (
              <tr key={order.orderID}>
                <td>{order.orderID}</td>
                <td>{order.customer.customerID}</td>
                <td>{order.helper.helperID}</td>
                <td>
                  <div className="btn-group">
                    {/* <Link to={'/edit-order/'+order.orderID} class="btn btn-warning btn-sm">
                      Update
                    </Link> */}
                    <button type="button" class="btn btn-dark btn-sm ms-2" onClick={()=>deleteOrder(order.orderID)}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))} 
          </tbody>
        </table>
      </div>

      <center><Link to={"/home"} className="btn btn-danger" >Sign Out</Link></center>
      <br /><br /><br />
    </div>
  );
};

export default ListOrders;
