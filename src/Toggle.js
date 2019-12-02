import React, { useState } from 'react';

const Toggle = () => {
  const [ isToggled, setToggle ] = useState(false);

  return (
    <div>
      <button onClick={() => setToggle(!isToggled)}>Click Me!</button>
      {isToggled && <h2>Hello</h2>}
    </div>
  );
}

export default Toggle;


// import React, { Component } from "react";

// export default class Refactor extends Component {
//   state = {
//     isToggled: false
//   };

//   toggle = () => {
//     this.setState(state => {
//       return { isToggled: !state.isToggled };
//     });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.toggle}>Toggle</button>
//         {this.state.isToggled && <h2>Hello!</h2>}
//       </div>
//     );
//   }
// }

// we have a state initialized, a toggle function that 
// takes the current state and sets it to the reversed 
// version of the state