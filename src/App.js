import React from 'react';

function App() {
  // const greeting ="hi!";
  // const dom = <div className = "foo"> {greeting} </div>
  return(
  <React.Fragment>
    <label htmlFor="bar">bar</label>
    <input type="text" onChange={() =>{console.log("I am clicked")}}/>
  </React.Fragment>
  )
}

export default App;
