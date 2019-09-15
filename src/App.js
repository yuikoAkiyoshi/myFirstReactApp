import React from 'react';

function App() {
  const profiles = [
    {name:"Taro",age:10},
    {name:"Hanako",age:5},
    {name:"hoge"}
  ]
  return(
  <React.Fragment>
    {profiles.map((profiles, index)=>{
      return <User name={profiles.name} age={profiles.age} key={index}/>
    })
    }
    <label htmlFor="bar">bar</label>
    <input type="text" onChange={() =>{console.log("I am clicked")}}/>
    <User name={"Taro"} age={10}/>
    <User name={"Hanako"} age={5}/>
  </React.Fragment>
  )
}

const User =(props) => {
  return<div>hi, i am {props.name} and I am {props.age}years old</div>
}

User.defaultProps ={
  age:1
}

export default App;
