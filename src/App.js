import React from 'react';
import Toggle from './Toggle';

// methods
import { useTitleInput }  from './hooks/useTitleInput';

const App = () => {
  const [name, setName] = useTitleInput('');

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

export default App;
