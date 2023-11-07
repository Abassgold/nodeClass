import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashord = () => {
  const navigate = useNavigate()
  let url = `https://augustclass-f9va.onrender.com/user/dashboard`
  let token = localStorage.token
  useEffect(() => {
    axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    }).then((result) => {
      if (result) {
        console.log(result.data);
      }
      else {
        navigate('/signin')
      }
    })
    .catch(err=>{
      console.log(err)
        navigate('/signin')
    })
  }, []);
  return (
    <div>
      <h1>WLECOME TO DASHBOARD</h1>
    </div>
  );
}
export default Dashord;
