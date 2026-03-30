
import { useState } from 'react';
import './App.css'

function App() {
  //let name="Tejas"
 //agar tum is name ko change hote hue dekhna chahte ho runtime par then u have to use usestate 


 //String hai to sirf " " aise rakho intial value number hai to 0
 //setter method  to set value
 //yahape document word use nhi kiya
 //background mein automactiocally chalta hai


 let[name,setName]=useState("Tejas")

 let[count,setCount]=useState(0);

  const handleClick = ()=>{

    //name = "kiran";
    setName("kiran");
    console.log("button  clicked...")

    console.log("name change to-->"+ name)

  }




  function handleIncrease(){
    setCount(count+1)
     
  }
  

//  function handleDecrease(){
//   setCount(count-1)
//  }
 

  return (
    <>
      <h1>Welcome to My Mix App...{name}</h1>


       <button onClick = {handleClick}>Click Me</button><br/><br/>

      <button onClick={handleIncrease}>Increase</button>


  
   
    <button onClick = {()=>setCount(count-1)}>Decrease</button>
    
    <button onClick= {()=>setCount(count * 0)}>Reset</button>

    <h2>Count ={count}</h2>


    </>
  )
}

export default App
