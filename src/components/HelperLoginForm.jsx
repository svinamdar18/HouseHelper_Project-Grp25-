import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

export default function HelperLoginForm() {

    const [Helper, setHelper] = useState({
        helperContact:'',
        helperEmail:'',
        
    })
    const navigate = useNavigate();

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setHelper({...Helper,[name]:value});
    }

    const loginHelper = (e) =>{
        e.preventDefault();
        axios.get(`http://localhost:8081/api/helpers/login/${Helper.helperEmail}/${Helper.helperContact}`).then((res)=>{
            alert("You Are now signed in successfully");
            console.log(res.data);
            navigate('/helplog/'+res.data.helperID);
       }).catch((err)=>{
            console.log(err);
        })
    }

    return (
        <div className='container col-8 mt-5'>
            <h1 style={{textAlign:'center'}}>Helper Login</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-bold'>Helper EmailID</Form.Label>
                    <Form.Control type="email" placeholder="Helper EmailID" name="helperEmail" onChange={(e)=>{changeHandler(e)}} />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Helper Contact No</Form.Label>
                    <Form.Control type="text" placeholder="Helper Contact No" name="helperContact" onChange={(e)=>{changeHandler(e)}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={(e)=>{loginHelper(e)}} >
                    Login
                </Button>
                <b> or new here<a href='/helpreg'> Sign Up </a>for free</b>
            </Form>
        </div>
    )
}
