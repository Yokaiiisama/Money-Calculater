import { useState } from 'react';
import './App.css';
import Calculate from './calculate.jsx';

function App() {

  return (
  <>
  <div className="wrapper">
    <h1 className="title">Money Counter</h1>
    <div className="topBorder">
      <p className="top">Enter amount of each and let the computer</p>
      <p className="top">calculate everything for you!</p>
    </div>
    <div className="container">
      <p>
        <Counter />
      </p>
    </div>
    <div className="total">
      <p>
       <Calculate />
      </p>
      <button className="button" onClick={Calculate}>Submit</button>
    </div>
  </div>
  </>
  )
}

export default App
