import React from 'react'
import { useFormik } from 'formik'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const validateCustomer=(custdata) =>{
    const errors={}
    let pattern = /^([a-zA-Z\s]+)$/
    //let numpat = /^([0-9]{10})$/
    //let emailpattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
    if (!custdata.customerName) {
        errors.customerName="Name is required"
    }
    else if(!pattern.test(custdata.customerName))
    {
        errors.customerName="Alphabets Only"
    }
    if (!custdata.customerGender) {
        errors.customerGender="Please select a gender"
    }
    if (!custdata.dob) {
        errors.dob="Please enter your date of birth"
    }
    if (!custdata.customerEmailID) {
        errors.customerEmailID="Please enter your email address"
    }
    if (!custdata.customerContact) {
        errors.customerContact="Please enter your mobile number"
    }
    // else if (!numpat.test(custdata.mobile.value)) {
    //     errors.mobile="Please enter valid mobile number"
    // }
    if (!custdata.customerAddress) {
        errors.customerAddress="Please enter your address"
    }
    if (!custdata.ch) {
        errors.ch="Please agree to these terms and conditions"
    }
    return errors
}

export default function CustomerRegistration(){


	const [Customer, setCustomer] = useState({
        customerName:'',
        dob:'',
        customerContact:'',
        customerAddress:'',
        customerEmailID:'',
        customerGender:''
    })

    const formik = useFormik({
        initialValues:{
            customerName:'',
            customerGender:'',
            dob:'',
            customerEmailID:'',
            customerContact:'',
            customerAddress:'',
            ch:''
        },
        validate:validateCustomer
    })

    const navigate = useNavigate();

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setCustomer({...Customer,[name]:value});
    }

    const addCustomer = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8081/api/customers/create",Customer).then((res)=>{
            alert("Customer has been registered successfully. Kindly Login to Proceed further.");
            console.log(res.data);
            navigate('/custlogin');
       }).catch((err)=>{
            console.log(err);
        })
    }

    return (
        <div className="container mt-5 col-6">
            <div id="myalert"></div>
            <h1 style={{textAlign:'center'}}>Customer Registration </h1><hr /><br />
            <form id="form" onSubmit={(e)=>{addCustomer(e)}}>
                <div className="form-group col-12">
                    <b>Name</b>
                    <input type="text" name="customerName" className="form-control" placeholder="Enter First Name and Last Name" value={Customer.customerName}
                        onChange={(e)=>{changeHandler(e)}} /* onBlur={formik.handleBlur} */ />
                    {formik.touched.customerName && formik.errors.customerName ? <span customerName="text-danger">{formik.errors.customerName}</span> : null}<br />
                </div>
                <div className="row">
                    <div className="form-group col-6">
                        <b>Gender</b><br />
                        <select className="form-control" name="customerGender" value={Customer.customerGender} onChange={(e) => { changeHandler(e) }}>
                            <option selected disabled>Please Select</option>
                            <option value="male">male</option>
                            <option value="female">female</option>
                            <option value="other">other</option>
                        </select><br />
                    </div>
                    <div className="form-group col-6">
                        <b>Mobile</b>
                        <input type="text" name="customerContact" className="form-control" placeholder="Enter Mobile No." onChange={(e) => { changeHandler(e) }}/*  onBlur={formik.handleBlur} */ value={Customer.customerContact} />
                        {formik.touched.customerContact && formik.errors.customerContact ? <span className="text-danger">{formik.errors.customerContact}</span> : null}
                        <br />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-6">
                        <b>DOB</b>
                        <input type="date" name="dob" className="form-control" placeholder="Enter Your DOB" onChange={(e)=>{changeHandler(e)}} value={Customer.dob} /* onBlur={formik.handleBlur} */ />
                        {formik.touched.dob && formik.errors.dob ? <span className="text-danger">{formik.errors.dob}</span> : null}
                        <br />
                    </div>
                    <div className="form-group col-6">
                        <b>E-mail</b>
                        <input type="email" name="customerEmailID" className="form-control" placeholder="Enter Your Email Id" onChange={(e)=>{changeHandler(e)}} /* onBlur={formik.handleBlur} */ value={Customer.customerEmailID} />
                        {formik.touched.customerEmailID && formik.errors.customerEmailID ? <span className="text-danger">{formik.errors.customerEmailID}</span> : null}
                        <br />
                    </div>
                </div>
               
              
                <div className="form-group col-12">
                    <b>Address</b>
                    <input type="" name="customerAddress" className="form-control" placeholder="Enter Your Address" onChange={(e)=>{changeHandler(e)}}/*  onBlur={formik.handleBlur} */ value={Customer.customerAddress} />
                    {formik.touched.customerAddress && formik.errors.customerAddress ? <span className="text-danger">{formik.errors.customerAddress}</span> : null}
                    <br />
                </div>
                <span id="errorToShow"></span>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" name="ch" id="ch" value="" /* onBlur={formik.handleBlur} */ />
                    <label className="form-check-label">I accept Terms & Conditions</label><br />
                    {formik.touched.ch && formik.errors.ch ? <span className="text-danger">{formik.errors.ch}</span> : null}
                </div><br />
                <div className="mt-2">
                    <input type="submit" className="btn btn-success ms-2" id="submit" value="SUBMIT" />
                    <input type="reset" className="btn btn-success ms-2" />
                </div>
                <br /><br />
            </form>

        </div>
    )
}