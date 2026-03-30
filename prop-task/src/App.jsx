

import { useState } from 'react'
import './App.css'
import Add from './components/Add'
import Form from './components/Form'
import Update from './components/Update'

function App() {

  let [action ,setAction] = useState(true)

  let name ="Tejas Saraf"

  const handleAdd =(e) =>{
      setAction(e)
  }

  return (
    <>
    <center>
    <h1>Welcome to Props-Task</h1>

    <Add addClick={setAction} />
    <Update UpdateClick ={(e) => setAction(e)} />
    <Form perform={action}/>
    </center>
    </>
  )
}

export default App
