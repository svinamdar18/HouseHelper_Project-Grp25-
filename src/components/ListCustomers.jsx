import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CustomerService from "../Service/CustomerService"

const ListCustomers = () => {

    const [customerList,setCustomerList] = useState([]);
    useEffect(()=>{
        init();
    }, [])

    const init =() =>{
      CustomerService.getAllCustomers().then((res)=>{
            setCustomerList(res.data);
        }).catch((error)=>{
            console.log(error);
        });
    }

    const deleteCustomer=(id) =>{
      CustomerService.deleteCustomerById(id).then(()=>{
            alert("Customer with id: "+id+" has been removed from database");
            window.location.reload(true);
        })
    } 

  return (
    <div className="container">
      <h2 className="text-center text-success">List of Customers</h2>
      <hr />
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">Customer ID</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Customer DOB</th>
              <th scope="col">Customer Contact</th>
              <th scope="col">Customer Address</th>
              <th scope="col">Customer EmailId</th>
              <th scope="col">Customer Gender</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customerList.map((customer) => (
              <tr key={customer.customerID}>
                <td>{customer.customerID}</td>
                <td>{customer.customerName}</td>
                <td>{customer.dob}</td>
                <td>{customer.customerContact}</td>
                <td>{customer.customerAddress}</td>
                <td>{customer.customerEmailID}</td>
                <td>{customer.customerGender}</td>
                <td>
                  <div className="btn-group">
                    <Link to={'/edit-customer/'+customer.customerID} class="btn btn-warning btn-sm">
                      Update
                    </Link>
                    <button type="button" class="btn btn-danger btn-sm ms-2" onClick={()=>deleteCustomer(customer.customerID)}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))} 
          </tbody>
        </table>
      </div>

      <div>
        <center>
          <Link to='/custreg' className="btn btn-primary me-2" >Add Customer</Link>
          <Link to={"/home"} className="btn btn-danger" >Sign Out</Link>
        </center>
      </div>
      
    </div>
  );
};

export default ListCustomers;
