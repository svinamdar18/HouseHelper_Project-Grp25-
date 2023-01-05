import React from 'react'
import { useFormik } from 'formik'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const validateHelper = (helpdata) => {
    const errors = {}
    let pattern = /^([a-zA-Z\s]+)$/
    //let numpat = /^([0-9]{10})$/
    //let emailpattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
    if (!helpdata.helperName) {
        errors.helperName = "Name is required";
    }
    else if (!pattern.test(helpdata.helperName)) {
        errors.helperName = "Alphabets Only"
    }
    if (!helpdata.helperGender) {
        errors.helperGender = "Please select a gender"
    }
    if (!helpdata.dob) {
        errors.dob = "Please enter your date of birth"
    }
    if (!helpdata.helperEmail) {
        errors.helperEmail = "Please enter your email address"
    }
    if (!helpdata.helperContact) {
        errors.helperContact = "Please enter your mobile number"
    }
    // else if (!numpat.test(custdata.mobile.value)) {
    //     errors.mobile="Please enter valid mobile number"
    // }
    if (!helpdata.helperAddress) {
        errors.helperAddress = "Please enter your address"
    }
    if (!helpdata.ch) {
        errors.ch = "Please agree to these terms and conditions"
    }
    return errors
}

export default function HelperRegistration() {

    const [Helper, setHelper] = useState({
        helperServicecharge: "",
        dob: "",
        helperAddress: "",
        helperService: "",
        helperName: "",
        helperContact: "",
        helperEmail: "",
        helperGender: ''
    });



    const formik = useFormik({
        initialValues: {
            helperName: '',
            helperGender: '',
            dob: '',
            helperEmail: '',
            helperContact: '',
            helperAddress: '',
            ch: ''
        },
        validate: validateHelper
    })

    const navigate = useNavigate();

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setHelper({ ...Helper, [name]: value });
    }

    const addHelper = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8081/api/helpers/create", Helper).then((res) => {
            alert("Helper has been registered successfully. Kindly Login to Proceed further.");
            console.log(res.data);
            navigate('/helplogin');
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <div className="container mt-5 col-6">
            <div id="myalert"></div>
            <h1 style={{ textAlign: 'center' }}>Helper Registration </h1><hr /><br />
            <form id="form" onSubmit={(e) => { addHelper(e) }}>
                <div className="form-group col-12">
                    <b>Name</b>
                    <input type="text" name="helperName" className="form-control" placeholder="Enter First Name and Last Name" value={Helper.helperName}
                        onChange={(e) => { changeHandler(e) }} /* onBlur={formik.handleBlur} */ />
                    {formik.touched.helperName && formik.errors.helperName ? <span className="text-danger">{formik.errors.helperName}</span> : null}<br />
                </div>
                <div className="row">
                    <div className="form-group col-6">
                        <b>Gender</b><br />
                        <select className="form-control" name="helperGender" value={Helper.helperGender} onChange={(e) => { changeHandler(e) }}>
                            <option selected disabled>Please Select</option>
                            <option value="male">male</option>
                            <option value="female">female</option>
                            <option value="other">other</option>
                        </select><br />
                    </div>
                    <div className="form-group col-6">
                        <b>Mobile</b>
                        <input type="text" name="helperContact" className="form-control" placeholder="Enter Mobile No." onChange={(e) => { changeHandler(e) }}/*  onBlur={formik.handleBlur} */ value={Helper.helperContact} />
                        {formik.touched.helperContact && formik.errors.helperContact ? <span className="text-danger">{formik.errors.helperContact}</span> : null}
                        <br />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-6">
                        <b>DOB</b>
                        <input type="date" name="dob" className="form-control" placeholder="Enter Your DOB" onChange={(e) => { changeHandler(e) }} value={Helper.dob} /* onBlur={formik.handleBlur} */ />
                        {formik.touched.dob && formik.errors.dob ? <span className="text-danger">{formik.errors.dob}</span> : null}
                        <br />
                    </div>
                    <div className="form-group col-6">
                        <b>E-mail</b>
                        <input type="email" name="helperEmail" className="form-control" placeholder="Enter Your Email Id" onChange={(e) => { changeHandler(e) }} /* onBlur={formik.handleBlur} */ value={Helper.helperEmail} />
                        {formik.touched.helperEmail && formik.errors.helperEmail ? <span className="text-danger">{formik.errors.helperEmail}</span> : null}
                        <br />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-6">
                        <b>Service</b><br />
                        <select className="form-control" name="helperService" value={Helper.helperService} onChange={(e) => { changeHandler(e) }}>
                            <option selected disabled>Please Select</option>
                            <option value="Nanny">Nanny</option>
                            <option value="Maid">Maid</option>
                            <option value="Gardener">Gardener</option>
                            <option value="Pet-Care">Pet-Care</option>
                        </select>
                    </div><br />
                    <div className="form-group col-6">
                        <b>Charges</b>
                        <input type="text" name="helperServicecharge" className="form-control" placeholder="Enter Service Charge" onChange={(e) => { changeHandler(e) }} value={Helper.helperServicecharge} /><br />
                    </div>
                </div>

                <div className="form-group col-12">
                    <b>Address</b>
                    <input type="" name="helperAddress" className="form-control" placeholder="Enter Your Address" onChange={(e) => { changeHandler(e) }}/*  onBlur={formik.handleBlur} */ value={Helper.helperAddress} />
                    {formik.touched.helperAddress && formik.errors.helperAddress ? <span className="text-danger">{formik.errors.helperAddress}</span> : null}
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


