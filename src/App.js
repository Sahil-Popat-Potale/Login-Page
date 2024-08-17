import React from 'react';
import './App.css';

import { FaAt } from "react-icons/fa6";
import { FaUnlockKeyhole } from "react-icons/fa6";

function App() {
  return (
    <div className="App">
      <form className="form">
        <p id="heading">Login</p>
        <div className="field">
          <FaAt className='input-icon'/>
          <input autoComplete='off' placeholder='Username' className="input-field" type="text" />
        </div>

        <div class="field">
          <FaUnlockKeyhole className='input-icon' />
          <input placeholder='Password' className="input-field" type="password" />
        </div>

        <div className="btn">
          <button className="button1">Login</button>
          <button className="button2">Sign Up</button>
        </div>
        <button className="button3">Forgot Password</button>
      </form>
    </div>
  );
}

export default App;
