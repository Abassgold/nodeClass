import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Signup from './Compoments/Signup';
import SignIn from './Compoments/SignIn';
import { useState } from 'react';
import Dashord from './Compoments/Dashord';

const App = () => {
  const [state, setstate] = useState('');
  const addTodo = (response)=>{
    setstate(response)
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signin" element={<SignIn addTodo ={addTodo}/>} />
        <Route path='/dashboard' element={<Dashord result ={state}/>}/>
      </Routes>
    </>
  )
}

export default App