import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const SignIn = () => {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('')
    const [response, setresponse] = useState('Find User');
    const navigate = useNavigate()
    let url = "https://augustclass-f9va.onrender.com/user/signin"
    const checksignin = () => {
        axios.post((url), { Email, Password })
            .then((res) => {
                console.log(res);
                if (res.data.status) {
                    localStorage.token = res.data.token
                     navigate('/dashboard')
                }
                else {
                    console.log('wrong credentials')
                    setresponse('wrong credentials')
                }
            })
    }
    return (
        <div>
            <div className='col-5 mx-auto'>
                <h1 className='text-center text-success'>Sign In</h1>


                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} required />
                </div>

                <div className='mx-auto text-center'>
                    <button className='btn btn-primary w-100' onClick={checksignin}>SUBMIT</button>
                </div>
                <div className='alert alert-danger text-center mt-5'>{response}</div>
            </div>
        </div>
    );
}

export default SignIn;
