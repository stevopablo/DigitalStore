import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Teste() {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/tenis', { state: { inputValue } });
  };

  return (
    <div>
      <h1>Home</h1>
      <input type="text" placeholder='oi'
      value={inputValue} 
      onChange={(e)=> setInputValue(e.target.value)}/>


      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Go to About</button>
      </form>
    </div>
  );
}

export default Teste;
