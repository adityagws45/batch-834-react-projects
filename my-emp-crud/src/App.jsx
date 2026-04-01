
import { useState } from 'react'
import './App.css'
import AddEmployee from './components/AddEmployee'
import AllEmployees from './components/AllEmployees'

function App() {
  const[count,setCount]=useState(0)
  let[ref,setRef]=useState(false)

  return (
    <>
    <center>
    <h1>My Employee CRUD App</h1>
    <AddEmployee  setRefresh={(v)=>setRef(ref+v)}/>
    <AllEmployees refresh={ref}/> <br/>
   

    </center>
    </>
  )
}

export default App
