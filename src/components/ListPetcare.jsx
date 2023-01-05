import axios from "axios";
import React, { useEffect, useState } from "react";
 import { useNavigate, useParams } from "react-router-dom";


const ListPetcare = () => {

    const [helperList,setHelperList] = useState([]); 
    
    const {id} = useParams();

    const navigate = useNavigate();

    useEffect(()=>{
        init();
    }, [])

    const init =() =>{
        axios.get(`http://localhost:8081/api/helpers/gethelper/pet-care`).then((res)=>{
            setHelperList(res.data);
        }).catch((error)=>{
            console.log(error);
        });
    }

    const orderfunction = (helperID) => {
      axios.post(`http://localhost:8081/api/orders/customer/${id}/helper/` + helperID + "/create").then((res) => {
        alert("Your order has been placed");
        navigate('/custorder/'+id);
      }).catch((error) => {
        console.log(error);
      });
    }

    

  return (
    <div className="container">
      <h2 className="text-center text-success">List of Pet Care</h2>
      <hr />
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">Helper ID</th>
              <th scope="col">Helper Name</th>
              <th scope="col">Helper DOB</th>
              <th scope="col">Helper Contact</th>
              <th scope="col">Helper Address</th>
              <th scope="col">Helper EmailId</th>
              <th scope="col">Helper Services</th>
              <th scope="col">Helper Servicecharge</th>
              <th scope="col">Helper Gender</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {helperList.map((helper) => (
              <tr key={helper.helperID}>
                <td>{helper.helperID}</td>
                <td>{helper.helperName}</td>
                <td>{helper.dob}</td>
                <td>{helper.helperContact}</td>
                <td>{helper.helperAddress}</td>
                <td>{helper.helperEmail}</td>
                <td>{helper.helperService}</td>
                <td>{helper.helperServicecharge}</td>
                <td>{helper.helperGender}</td>
                <div className="btn-group">
                <button onClick={() => { orderfunction(helper.helperID) }} class="btn btn-warning">
                    Hire
                  </button>
                    
                  </div>
                
              </tr>
            ))} 
          </tbody>
        </table>
      </div>

      
    </div>
  );
};

export default ListPetcare;
