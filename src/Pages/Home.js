import axios from "axios";
import { useEffect, useState } from "react"


const Home = () => {
    const[user,setUser] =useState([]);

    useEffect(()=>{
        loadUsers();
    },[]);

    const loadUsers =async ()=>{
        const result =await axios.get("http://localhost:8080/api/v1/employees")
        setUser(result.data);
    }

    return (
        <div className="container">
            <div className="py-4">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Employee ID</th>
                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map((employee,index) =>(
                        <tr key={index}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>
                                <button className="btn btn-primary mx-2">View</button>
                                <button className="btn btn-outline-primary mx-2">Edit</button>
                                <button className="btn btn-danger mx-2">Delete</button>
                            </td>
                        </tr>
                            
                        ))}
                    </tbody>

                </table>
            </div>
            
        </div>
    )
}

export default Home
