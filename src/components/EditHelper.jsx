import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, FormControl } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditHelper(){
    
      const [helper,setHelper] = useState({})
      
      const navigate = useNavigate();

      const {id} = useParams();

      useEffect(() => {
        axios.get(`http://localhost:8081/api/helpers/get/${id}`).then((res)=>{
          setHelper(res.data);
      }).catch((error)=>{
          console.log(error);
      })
  },[]);


      const handleChange = (e) => {
        const {name,value} = e.target;
        setHelper({...helper, [name]:value})
      }
    
      const updateHelper = (e) =>{
        e.preventDefault();
        axios.post(`http://localhost:8081/api/helpers/update/${id}`, helper)
        .then((res)=>{
            alert("Helper Updated Successfully")
            navigate('/helplist');
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
              <strong><i>Edit Helper</i></strong>
            </div>
            <br></br>
            <Card.Body>
              <form className="form-group" onSubmit={(e)=> updateHelper(e)}>
             
                <div>
                  <FloatingLabel controlId="floatingInput" label="Name" className="form-label" >
                    <Form.Control type="text" placeholder="Name" name="helperName" value={helper.helperName} onChange={(e)=>handleChange(e)} />
                  </FloatingLabel>
                </div>
                <br></br>
                <div>
                
                     <FloatingLabel> 
                      <select className="form-group col-12" name="helperGender" value={helper.helperGender} onChange={(e)=>handleChange(e)}>
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
                    <Form.Control type="email" placeholder="name@example.com" name="helperEmail" value={helper.helperEmail} onChange={(e)=>handleChange(e)}/>
                  </FloatingLabel>
                </div>
                <br></br>
                <div>
                  <FloatingLabel controlId="floatingInput" label="Contact" className="form-label" >
                    <Form.Control type="text" placeholder="Contact" name="helperContact" value={helper.helperContact} onChange={(e)=>handleChange(e)} />
                  </FloatingLabel>
                </div>
                <br></br>
                <div>
                  <FloatingLabel controlId="floatingInput" label="Address" className="form-label" >
                    <Form.Control type="text" placeholder="Address" name="helperAddress" value={helper.helperAddress} onChange={(e)=>handleChange(e)} />
                  </FloatingLabel>
                </div>
                <br></br>
                <div>
                  <FloatingLabel controlId="floatingInput" label="DOB" className="form-label" >
                    <Form.Control type="date" placeholder="DOB" name="dob" value={helper.dob} onChange={(e)=>handleChange(e)} />
                  </FloatingLabel>
                </div>
                <br></br>
                <div>
                
                     <FloatingLabel> 
                      <select className="form-group col-12" name="helperService" value={helper.helperService} onChange={(e)=>handleChange(e)}>
                             <option selected disabled>Please Select</option>
                             <option value="Nanny">Nanny</option>
                             <option value="Maid">Maid</option>
                             <option value="Gardener">Gardener</option>
                             <option value="Pet-Care">Pet-Care</option>
                        </select>
                     </FloatingLabel>
                    
                </div>
              
                <br></br>
                <div>
                  <FloatingLabel controlId="floatingInput" label="Servicecharge" className="form-label" >
                    <Form.Control type="text" placeholder="Servicecharge" name="helperServicecharge" value={(helper.helperServicecharge)} onChange={(e)=>handleChange(e)} />
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

