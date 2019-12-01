import React, { useState } from 'react';
import Toggle from './Toggle';

const App = () => {

  // const [value, setValue] = useState(initialState); 
const [name, setName] = useState('');

  return (
    <div className="main-wrapper">
      <h1>Level Up Dishes</h1>
      <Toggle />
      <form onSubmit={e => {
        // prevents form from refreshing page
        e.preventDefault();
        formSubmit(name, setName);
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
const formSubmit = (value, setValue) => {
  console.log('email sent to' + value + '!');
  setValue('');
}

export default App;
