import React, { useRef } from 'react';
import Toggle from './Toggle';

// methods
import { useTitleInput }  from './hooks/useTitleInput';

const App = () => {
  const [name, setName] = useTitleInput('');
  const ref = useRef();
  console.log('ref:', ref.current);

  return (
    <div className="main-wrapper" ref={ref}>
      <h1 onClick={() => console.log(ref.current.classList.add('new-fake-class'))}>Level Up Dishes</h1>
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
