import React, { useState, useEffect } from 'react';
import Toggle from './Toggle';

const App = () => {

  // const [value, setValue] = useState(initialState); 
const [name, setName] = useState('');

useEffect(() => {
  document.title = name;
})

  return (
    <div className="main-wrapper">
      <h1>Level Up Dishes</h1>
      <Toggle />
      <form onSubmit={e => {
        // prevents form from refreshing page
        e.preventDefault();
      }}>
        <input 
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name} 
        />
        <button>Submit</button>
      </form>
      
    </div>
  );
};

// you can use name and setName like other variables


export default App;
