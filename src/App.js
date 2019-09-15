import React from 'react';

function App() {
  // const greeting ="hi!";
  // const dom = <div className = "foo"> {greeting} </div>
  return(
  <React.Fragment>
    <label htmlFor="bar">bar</label>
    <input type="text" onChange={() =>{console.log("I am clicked")}}/>
    <Cat />
  </React.Fragment>
  )
}

const Cat =() => {
  return<div>meow</div>
}

export default App;
