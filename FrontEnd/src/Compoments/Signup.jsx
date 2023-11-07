  import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const Signup = () => {

    const [Firstname, setFirstname] = useState("")
    const [Lastname, setLastname] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [allDetails, setallDetails] = useState([])
    const navigate = useNavigate()

    const Submit = () => {

        let url = "https://augustclass-f9va.onrender.com/user/register"
        // store into an object
        let LoginDetails = { Firstname, Lastname, Email, Password }
        // push the object in the array using spread operator
        setallDetails([...allDetails, LoginDetails])
        console.log(allDetails);
        axios.post((url), LoginDetails)
        navigate('/signin')

    }
    return (
        <div>

            <div className='col-5 mx-auto'>
                <h1 className='text-center text-success'>Sign Up</h1>

                <div className="mb-3">
                    <label className="form-label">Firstname</label>
                    <input type="text" className="form-control" onChange={(e) => setFirstname(e.target.value)} required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Lastname</label>
                    <input type="text" className="form-control" onChange={(e) => setLastname(e.target.value)} required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} required />
                </div>

                <div className='mx-auto text-center'>
                    <button className='btn btn-primary w-100' onClick={Submit}>SUBMIT</button>
                </div>
            </div>


            <div className='col-8 mx-auto mt-4'>
                <table className='table table-stripped'>
                    <thead>
                        <tr className='table-primary'>
                            <th>S/N</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email Address</th>
                            <th>Actions</th>
                        </tr>
                    </thead>



                    {
                        allDetails.map((items, index) => (
                            <tbody>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{items.Firstname}</td>
                                    <td>{items.Lastname}</td>
                                    <td>{items.Email}</td>
                                    <td>
                                        <button className='btn btn-danger mx-2'>Delete</button>
                                        <button className='btn btn-warning'>Edit</button>
                                    </td>
                                </tr>
                            </tbody>
                        ))
                    }
                </table>
            </div>
        </div>
    )
}

export default Signup 