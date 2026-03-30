
import { useEffect, useState } from 'react'
import './App.css'
import { showAllEmployees } from './services'
import FindAllComponent from './components/FindAllComponent'
import AcceptMsg from './components/AcceptMsg'
import ChildComp from './components/ChildComp'

function App() {
  
  let  wishes = "happy birthday raj.."

   let [cmsg, setCmsg] = useState("")

  const handleMsg = (e) => {
    setCmsg(e)
  }


  return (
    <>
      <h1>welcome to my props app</h1>

      <FindAllComponent/>

{/* 
    parent to child msg */}
      <AcceptMsg acceptWish={wishes}/>

      
{/* 
      child to parent */}
        <ChildComp sendMsg={handleMsg} />

      <h2>Msg from Child to Parent = {cmsg}</h2>
    </>
  )
}

export default App
