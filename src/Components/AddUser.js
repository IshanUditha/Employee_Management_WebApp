import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


const AddUser = () => {
    let navigate = useNavigate();

    const [user,setUser] =useState({
        firstName:"",
        lastName:"",
        email:""

    });
    const {firstName,lastName,email} =user;
    const onInputChange = (e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const onSubmit = async (e) =>{
        e.preventDefault();
        await axios.post("http://localhost:8080/api/v1/employees",user)
        navigate("/");
    }

    return (
        <div className='container '>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-4 shadow bg-secondary'>
                    <h3 className='text-center '>
                        Register User
                    </h3>
                    <form onSubmit={(e)=>onSubmit(e)}>
                    <div className='mb-3'>
                        <div class="form-group" >
                            <h5 className='font-weight-bold text-left col-md-3 p-2'>First Name :</h5>
                            <input 
                            type='text' 
                            className='form-control' 
                            placeholder='Enter Your First Name'
                            name='firstName'
                            value={firstName}
                            onChange={(e)=>onInputChange(e)}
                            />
                        </div>
                        <div class="form-group">
                            <h5 className='font-weight-bold text-left col-md-3 p-2'>Last Name :</h5>
                            <input type='text' 
                            className='form-control' 
                            placeholder='Enter Your Last Name'
                            name='lastName'
                            value={lastName}
                            onChange={(e)=>onInputChange(e)}

                            />
                        </div>
                        <div class="form-group">
                            <h5 className='font-weight-bold text-left col-md-2 p-2'>Email :</h5>
                            <input type='text' 
                            className='form-control' 
                            placeholder='Enter Your Email' 
                            name='email'
                            value={email}
                            onChange={(e)=>onInputChange(e)}
                            />
                        </div>
                       
                        <button type='submit' className='btn btn-dark p-2 mt-3 col-md-3 mx-3 '>Submit</button>

                        <Link type='submit' className='btn btn-danger p-2 mt-3 col-md-3  ' to='/'>Cancel</Link>
                      
                        
                    </div>
                    </form>
                   

                </div>
                
                
            </div> 
            
        </div>
    )
}

export default AddUser
