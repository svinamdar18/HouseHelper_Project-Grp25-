import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditCustomer(){
    
      const [customer,setCustomer] = useState({})
      
      const navigate = useNavigate();

      const {id} = useParams();

      useEffect(() => {
        axios.get(`http://localhost:8081/api/customers/get/${id}`).then((res)=>{
          setCustomer(res.data);
      }).catch((error)=>{
          console.log(error);
      })
  },[]);


      const handleChange = (e) => {
        const {name,value} = e.target;
        setCustomer({...customer, [name]:value})
      }
    
      const updateCustomer = (e) =>{
        e.preventDefault();
        axios.post(`http://localhost:8081/api/customers/update/${id}`, customer)
        .then((res)=>{
            alert("Customer Updated Successfully")
            navigate('/custlist');
        }).catch((error)=>{
            console.log(error);
        });
        
      }
  return (
    
        <div>
      <div className="container container-fluid">
        <div className="row">
          <Card className="card col-md-6 offset-md-3 mt-5 bg-dark">
            <div className="card-header text-center text-light">
              <strong><i>Edit Customer</i></strong>
            </div>
            <br></br>
            <Card.Body>
              <form className="form-group" onSubmit={(e)=> updateCustomer(e)}>
             
                <div>
                  <FloatingLabel controlId="floatingInput" label="Name" className="form-label" >
                    <Form.Control type="text" placeholder="Name" name="customerName" value={customer.customerName} onChange={(e)=>handleChange(e)} />
                  </FloatingLabel>
                </div>
                <br></br>
                <div>
                <FloatingLabel> 
                      <select className="form-group col-12" name="customerGender" value={customer.customerGender} onChange={(e)=>handleChange(e)}>
                             <option selected disabled>Please Select</option>
                             <option value="male">male</option>
                             <option value="female">female</option>
                             <option value="other">other</option>
                          </select>
                     </FloatingLabel>
                </div>
                <br></br>
                <div>
                  <FloatingLabel controlId="floatingInput" label="Email ID" className="form-label mb-3">
                    <Form.Control type="email" placeholder="name@example.com" name="customerEmailID" value={customer.customerEmailID} onChange={(e)=>handleChange(e)}/>
                  </FloatingLabel>
                </div>
                <br></br>
                <div>
                  <FloatingLabel controlId="floatingInput" label="Contact" className="form-label" >
                    <Form.Control type="text" placeholder="Contact" name="customerContact" value={customer.customerContact} onChange={(e)=>handleChange(e)} />
                  </FloatingLabel>
                </div>
                <br></br>
                <div>
                  <FloatingLabel controlId="floatingInput" label="Address" className="form-label" >
                    <Form.Control type="text" placeholder="Address" name="customerAddress" value={customer.customerAddress} onChange={(e)=>handleChange(e)} />
                  </FloatingLabel>
                </div>
                <br></br>
                <div>
                  <FloatingLabel controlId="floatingInput" label="DOB" className="form-label" >
                    <Form.Control type="date" placeholder="DOB" name="dob" value={(customer.dob)} onChange={(e)=>handleChange(e)} />
                  </FloatingLabel>
                </div>
                <br></br>
                
                <div>
                  <center>
                    <button className="btn btn-success me-2" type='submit'>Submit</button>
                    <button type="Reset" className="btn btn-danger ms-2">Reset</button>
                  </center>
                </div>
              </form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}
