import './App.css';
import React, { useState } from 'react';

function App() {
  const [result, setResult] = useState("0");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  }

  const clear = (e) => {
    setResult('');
  }

  const del = (e) => {
    setResult();
  }

  return (
    <div className="App">
      <div className='container'>
        <form>
          <input type='text' value={result} />
        </form>
        <div className='keypad'>00000
          <button onClick={del}>DEL</button>
          <button onClick={clear} id='clear'>C</button>
          <button  name='/' onClick={handleClick}>/</button>
          <button  name='1' onClick={handleClick}>1</button>
          <button  name='2' onClick={handleClick}>2</button>
          <button  name='3' onClick={handleClick}>3</button>
          <button  name='*' onClick={handleClick}>*</button>
          <button  name='4' onClick={handleClick}>4</button>
          <button  name='5' onClick={handleClick}>5</button>
          <button  name='6' onClick={handleClick}>6</button>
          <button  name='+' onClick={handleClick}>+</button>
          <button  name='7' onClick={handleClick}>7</button>
          <button  name='8' onClick={handleClick}>8</button>
          <button  name='9' onClick={handleClick}>9</button>
          <button  name='-' onClick={handleClick}>-</button>
          <button  name='.' onClick={handleClick}>.</button>
          <button  name='0' onClick={handleClick}>0</button>
          <button onClick={handleClick} id='result'>=</button>
        </div>
      </div>  
    </div>
  );
}

export default App;
