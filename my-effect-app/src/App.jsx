
// import './App.css'
// import Addition from './components/Addition'
// import Multiplication from './components/Multiplication'
// import ShowEmployees from './components/ShowEmployees'

// function App() {
  
  

//   return (
//     <>
//     <h1>Hello & welcome to my effect app</h1>



//      <Addition/>
//      <Multiplication/>
//      <ShowEmployees/>
//     </>
//   )
// }

// export default App




import React, { useState } from 'react'
import './App.css'
import Addition from './components/Addition'
import Multiplication from './components/Multiplication'
import ShowEmployees from './components/ShowEmployees'
import Division from './components/Division'
import Greet from './components/Greet'

function App() {
  

  


  let [num1, setNum1] = useState(0)
  let [num2, setNum2] = useState(0)

  // handle first input
  const handleNum1 = (e) => {
    setNum1(Number(e.target.value))   // convert string → number
  }

  // handle second input
  const handleNum2 = (e) => {
    setNum2(Number(e.target.value))
  }

  let[name , setName]= useState(" ")

  const handleName = (e)=>{
    setName(e.target.value)
    
  }

  return (
    <>
    <h1>Hello & welcome to my effect app</h1>


    <input type="text" onChange={handleName}/>

    <Greet person={name}/>

    <input type="number" onChange={handleNum1} placeholder="Enter number 1" />
      <input type="number" onChange={handleNum2} placeholder="Enter number 2" />

     <Addition add1={num1} add2={num2}/>
     <Multiplication multi1={num1} multi2={num2}/>
     {/* <Division div1={num1} div2={num2}/> */}
     <Division div1={num1} div2={num2}/>
     <ShowEmployees/>
    </>
  )
}

export default App

