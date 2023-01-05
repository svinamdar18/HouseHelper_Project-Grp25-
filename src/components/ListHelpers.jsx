import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HelperService from "../Service/HelperService"

const ListHelpers = () => {

    const [helperList,setHelperList] = useState([]); 
    
    useEffect(()=>{
        init();
    }, [])

    const init =() =>{
      HelperService.getAllHelpers().then((res)=>{
            setHelperList(res.data);
        }).catch((error)=>{
            console.log(error);
        });
    }

    const deleteHelper=(id) =>{
      HelperService.deleteHelperById(id).then(()=>{
            alert("Helper with id: "+id+" has been removed from database");
            window.location.reload(true);
        })
    } 

  return (
    <div className="container">
      <h2 className="text-center text-success">List of Helpers</h2>
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
                <td>
                  <div className="btn-group">
                    <Link to={'/edit-helper/'+helper.helperID} class="btn btn-warning btn-sm">
                      Update
                    </Link>
                    <button type="button" class="btn btn-danger btn-sm ms-2" onClick={()=>deleteHelper(helper.helperID)}>
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
          <Link to='/helpreg' className="btn btn-primary me-2">Add Helper</Link>
          <Link to={"/home"} className="btn btn-danger" >Sign Out</Link>
        </center>
      </div>
      <center></center>
      <br />
      <br /><br />
    </div>
  );
};

export default ListHelpers;
