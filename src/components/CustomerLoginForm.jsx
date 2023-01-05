import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

export default function CustomerLoginForm() {
   
    const [Customer, setCustomer] = useState({
        customerName:'',
        dob:'',
        customerContact:'',
        customerAddress:'',
        customerEmailID:'',
        customerGender:''
    })
    const navigate = useNavigate();

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setCustomer({...Customer,[name]:value});
    }
    const loginCustomer = (e) =>{
        e.preventDefault();
        axios.get(`http://localhost:8081/api/customers/login/${Customer.customerEmailID}/${Customer.customerContact}`).then((res)=>{
            alert("You Are now signed in successfully");
            console.log(res.data);
            navigate('/custlog/'+res.data.customerID);
       }).catch((err)=>{
            console.log(err);
        })
    }
   
   
    return (
        <div className='container col-8 mt-5'>
            <h1 style={{textAlign:'center'}}>Customer Login</h1>
            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-bold'>Customer EmailID</Form.Label>
                    <Form.Control type="email" placeholder="Customer EmailID" name="customerEmailID"  onChange={(e)=>{changeHandler(e)}}/>
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Customer Contact No</Form.Label>
                    <Form.Control type="text" placeholder="Customer Contact No" name="customerContact"  onChange={(e)=>{changeHandler(e)}}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" href="/custlog" onClick={(e)=>{loginCustomer(e)}} >
                    Login
                </Button>
                <b> or new here<a href='/custreg'> Sign Up </a>for free</b> 
            </Form>
        </div>
    )
}
