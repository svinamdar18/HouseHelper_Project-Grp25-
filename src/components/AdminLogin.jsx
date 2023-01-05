import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const[admin, setAdmin] = useState({
        id:"",
        name:"",
        password:"",
        username:""
    })

    const navigate = useNavigate();

    const adminLogin=(e)=>{
        e.preventDefault();
        axios.get(`http://localhost:8081/api/admin/login/${username}/${password}`).then((res)=>{
            alert("You Are now signed in successfully");
            var id = res.data.id;
            navigate(`/adminpage`);
       }).catch((err)=>{
            console.log(err);
        })
    }

    return (
        <div className='form-group col-6' style={{ marginLeft: '300px' }}>
            <form><br />
                <h3 style={{ textAlign: 'center' }}>Admin Sign In</h3><br />
                <div className="form-group">
                    <label><b>Admin Username</b></label>
                    <input type="email" className="form-control" placeholder="Enter Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                </div><br />
                <div className="form-group">
                    <label><b>Password</b></label>
                    <input type="password" className="form-control" placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div><br />
                <center></center><button type="submit" className="btn btn-primary btn-block" style={{ marginLeft: '250px' }} onClick={(e) => adminLogin(e)}>Log In</button>
            </form><br />
        </div>
    )
}

export default AdminLogin